"use client";


import { useState, useEffect } from 'react';
import { FileUp, X, CheckSquare, Square } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../../contexts/language-context';
import { useCustomSymbols } from '../../contexts/custom-symbols-context';

export default function ExportModal() {
    const { language } = useLanguage();
    const { customSymbols } = useCustomSymbols();
    const isEnglish = language === 'en';

    // State
    const [filename, setFilename] = useState('backup');
    const [selectedTags, setSelectedTags] = useState<Record<string, boolean>>({});
    const [mounted, setMounted] = useState(false);

    // Derived state: unique tags (using 'es' tags as primary source for custom symbols)
    const allTags = Array.from(new Set(customSymbols.flatMap(s => s.tags?.es || [])));

    useEffect(() => {
        setMounted(true);
        // Initialize all tags as selected by default
        const initialSelection: Record<string, boolean> = {};
        allTags.forEach(tag => {
            initialSelection[tag] = true;
        });
        setSelectedTags(initialSelection);
    }, [customSymbols]); // Depend on customSymbols to regenerate tags if they change

    // Translations
    const tTranslations = {
        title: isEnglish ? 'Export Backup' : 'Exportar Backup',
        filenameLabel: isEnglish ? 'Filename' : 'Nombre del archivo',
        selectLabel: isEnglish ? 'Select tags to export:' : 'Elige qué tags exportar:',
        exportBtn: isEnglish ? 'Export' : 'Exportar',
        cancelBtn: isEnglish ? 'Cancel' : 'Cancelar',
        noTags: isEnglish ? 'No tags found in your custom emojis' : 'No se encontraron tags en tus emojis personalizados',
    };

    const toggleTag = (tag: string) => {
        setSelectedTags(prev => ({ ...prev, [tag]: !prev[tag] }));
    };

    const handleExport = () => {
        const tagsToExport = Object.entries(selectedTags)
            .filter(([_, isSelected]) => isSelected)
            .map(([tag]) => tag);

        if (tagsToExport.length === 0 && allTags.length > 0) return;

        // Filter data based on selected tags
        // If an item has ANY match in its tags, it's included.
        // If an item has NO tags, should it be included? Let's say yes if no tags filter is active? 
        // Or if tags are present in the item, check if any match selected.

        const symbolsToExport = customSymbols.filter(symbol => {
            const symbolTags = symbol.tags?.es || [];
            if (symbolTags.length === 0) return true; // Always export items without tags? Or maybe make a "No Tags" category? 
            // For simple backup, typically you want everything. 
            // The user snippet implies filtering: "videos.filter(video => video.tags.some(tag => tagsToExport.includes(tag)))"
            return symbolTags.some(tag => tagsToExport.includes(tag));
        });

        const data = symbolsToExport;

        // Download logic
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `emojis-${filename || 'backup'}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-zinc-900 w-full max-w-md rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-zinc-100 dark:border-zinc-800">
                    <h1 className="text-lg font-semibold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                        <FileUp className="w-5 h-5" />
                        {tTranslations.title}
                    </h1>
                    <Link href={isEnglish ? "/en/emojis" : "/emojis"} className="p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                        <X className="w-5 h-5 text-zinc-500" />
                    </Link>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                    {/* Filename Input */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            {tTranslations.filenameLabel}
                        </label>
                        <div className="flex items-center">
                            <div className="bg-zinc-100 dark:bg-zinc-800 border border-r-0 border-zinc-200 dark:border-zinc-700 rounded-l-md px-3 py-2 text-sm text-zinc-500">
                                emojis-
                            </div>
                            <input
                                type="text"
                                value={filename}
                                onChange={(e) => setFilename(e.target.value)}
                                className="flex-1 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6866D6] text-zinc-900 dark:text-zinc-100"
                                placeholder="backup"
                            />
                            <div className="bg-zinc-100 dark:bg-zinc-800 border border-l-0 border-zinc-200 dark:border-zinc-700 rounded-r-md px-3 py-2 text-sm text-zinc-500">
                                .json
                            </div>
                        </div>
                    </div>

                    {/* Tags List */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 block">
                            {tTranslations.selectLabel}
                        </label>
                        <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto pr-2">
                            {allTags.length === 0 && (
                                <p className="text-sm text-zinc-500 italic">{tTranslations.noTags}</p>
                            )}
                            {allTags.map((tag) => (
                                <div
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    className="flex items-center justify-center gap-3 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                                >
                                    <div className={`${selectedTags[tag] ? 'text-[#6866D6] dark:text-[#a09fe6]' : 'text-zinc-300 dark:text-zinc-600'}`}>
                                        {selectedTags[tag] ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5" />}
                                    </div>
                                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-end gap-3 bg-zinc-50/50 dark:bg-zinc-900/50">
                    <Link
                        href={isEnglish ? "/en/emojis" : "/emojis"}
                        className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
                    >
                        {tTranslations.cancelBtn}
                    </Link>
                    <button
                        onClick={handleExport}
                        className="px-4 py-2 text-sm font-medium text-white bg-[#6866D6] hover:bg-[#5554b7] rounded-lg shadow-sm transition-colors flex items-center gap-2 cursor-pointer"
                    >
                        <FileUp className="w-4 h-4" />
                        {tTranslations.exportBtn}
                    </button>
                </div>
            </div>
        </div>
    );
}
