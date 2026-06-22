"use client";


import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FileDown, X, FileJson, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../../contexts/language-context';
import { useCustomSymbols } from '../../contexts/custom-symbols-context';
import { SymbolItem } from '../../data/symbols';

export default function ImportModal() {
    const router = useRouter();
    const { language } = useLanguage();
    const { addCustomSymbol, customSymbols } = useCustomSymbols();
    const isEnglish = language === 'en';

    // State
    const [file, setFile] = useState<File | null>(null);
    const [previewData, setPreviewData] = useState<SymbolItem[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Translations
    const tTranslations = {
        title: isEnglish ? 'Import Backup' : 'Importar Backup',
        dropLabel: isEnglish ? 'Drop JSON file here or click to upload' : 'Arrastra el archivo JSON aquí o click para subir',
        importBtn: isEnglish ? 'Import' : 'Importar',
        cancelBtn: isEnglish ? 'Cancel' : 'Cancelar',
        invalidFile: isEnglish ? 'Invalid JSON file' : 'Archivo JSON inválido',
        noData: isEnglish ? 'No valid emojis found in file' : 'No se encontraron emojis válidos',
        videosFound: isEnglish ? 'Emojis found:' : 'Emojis encontrados:',
        success: isEnglish ? 'Import successful!' : '¡Importación exitosa!',
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0];
        if (f) processFile(f);
    };

    const processFile = (f: File) => {
        setFile(f);
        setError(null);
        setPreviewData(null);

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = e.target?.result as string;
                const json = JSON.parse(text);

                // Validation logic for SymbolItem[]
                // SymbolItem must have: symbol, description, tags (optional), category (optional)
                if (Array.isArray(json) && json.length > 0 && json[0].symbol && json[0].description) {
                    setPreviewData(json);
                } else {
                    setError(tTranslations.noData);
                }
            } catch (err) {
                setError(tTranslations.invalidFile);
            }
        };
        reader.readAsText(f);
    };

    const handleImport = () => {
        if (!previewData) return;

        const existingSymbols = new Set(customSymbols.map(s => s.symbol));

        previewData.forEach(item => {
            // Avoid duplicates by symbol
            if (!existingSymbols.has(item.symbol)) {
                // Adapt SymbolItem to CustomSymbolInput
                // addCustomSymbol expects: { symbol, description, tags? }
                // item.description might be string or { es: { main: ... }, ... } depending on how it was exported
                // Our export saves the full SymbolItem structure.

                let desc = "";
                if (typeof item.description === 'string') {
                    desc = item.description;
                } else if (item.description?.es?.main) {
                    desc = item.description.es.main;
                } else {
                    desc = "Imported Emoji";
                }

                let tags = "";
                if (item.tags?.es) {
                    tags = item.tags.es.join(", ");
                }

                addCustomSymbol({
                    symbol: item.symbol,
                    description: desc,
                    tags: tags // String format for the input
                });
            }
        });

        // Navigate back
        router.push(isEnglish ? '/en/emojis' : '/emojis');
    };

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-zinc-900 w-full max-w-md rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-zinc-100 dark:border-zinc-800">
                    <h1 className="text-lg font-semibold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                        <FileDown className="w-5 h-5" />
                        {tTranslations.title}
                    </h1>
                    <Link href={isEnglish ? "/en/emojis" : "/emojis"} className="p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
                        <X className="w-5 h-5 text-zinc-500" />
                    </Link>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                    {/* File Upload Area */}
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${file ? 'border-[#6866D6] bg-[#6866D6]/5 dark:bg-[#6866D6]/10' : 'border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600'
                            }`}
                    >
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept=".json"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                        {file ? (
                            <>
                                <FileJson className="w-10 h-10 text-[#6866D6] mb-2" />
                                <span className="font-medium text-sm text-zinc-900 dark:text-zinc-100">{file.name}</span>
                                <span className="text-xs text-zinc-500">{(file.size / 1024).toFixed(1)} KB</span>
                            </>
                        ) : (
                            <>
                                <FileDown className="w-10 h-10 text-zinc-400 mb-2" />
                                <span className="text-sm text-zinc-500 max-w-[200px]">{tTranslations.dropLabel}</span>
                            </>
                        )}
                    </div>

                    {error && (
                        <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                            <AlertCircle className="w-4 h-4" />
                            {error}
                        </div>
                    )}

                    {/* Preview Info */}
                    {previewData && !error && (
                        <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-4 animate-in fade-in slide-in-from-top-4 duration-300">
                            <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                                {tTranslations.videosFound} <span className="text-[#6866D6] dark:text-[#a09fe6]">{previewData.length}</span>
                            </p>
                            <div className="mt-2 flex flex-wrap gap-1 max-h-20 overflow-y-auto">
                                {/* Visualize symbols */}
                                {previewData.slice(0, 10).map((item: any, i) => (
                                    <span key={i} className="text-lg">
                                        {item.symbol}
                                    </span>
                                ))}
                                {previewData.length > 10 && (
                                    <span className="text-xs text-zinc-500 flex items-center ml-1">...</span>
                                )}
                            </div>
                        </div>
                    )}
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
                        onClick={handleImport}
                        disabled={!file || !previewData}
                        className="px-4 py-2 text-sm font-medium text-white bg-[#6866D6] hover:bg-[#5554b7] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-sm transition-colors flex items-center gap-2 cursor-pointer"
                    >
                        <FileDown className="w-4 h-4" />
                        {tTranslations.importBtn}
                    </button>
                </div>
            </div>
        </div>
    );
}
