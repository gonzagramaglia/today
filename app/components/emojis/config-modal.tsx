"use client";


import { useState, useEffect } from "react";
import { X, Trash2, Plus, Pencil, Check, Wrench, FileDown, FileUp } from "lucide-react";
import { useCustomSymbols } from "../../contexts/custom-symbols-context";

import { useLanguage } from "../../contexts/language-context";
import Link from "next/link";

interface ConfigModalProps {
    lang: string;
    onClose: () => void;
    exportPath?: string;
    importPath?: string;
    initialData?: any;
}

export default function ConfigModal({ onClose, exportPath, importPath, initialData, lang }: ConfigModalProps) {
    const { customSymbols, addCustomSymbol, editCustomSymbol, removeCustomSymbol } = useCustomSymbols();
    const { t } = useLanguage();
    console.log("ConfigModal initialData:", initialData);
    const [editingSymbol, setEditingSymbol] = useState<string | null>(initialData ? initialData.symbol : null);
    const [editingId, setEditingId] = useState<string | null>(initialData ? initialData.id : null);
    const [deleteConfirmation, setDeleteConfirmation] = useState<string | null>(null);

    // Helper to get draft
    const getDraft = () => {
        if (typeof window === 'undefined') return null;
        try {
            const draft = localStorage.getItem("custom_emoji_draft");
            return draft ? JSON.parse(draft) : null;
        } catch (e) {
            console.error("Failed to parse draft", e);
            return null;
        }
    };

    const [symbol, setSymbol] = useState(() => initialData ? initialData.symbol : (getDraft()?.symbol || ""));
    const [description, setDescription] = useState(() => {
        if (initialData) {
            // Use existing translation if available, fallback to 'es' main, then empty
            return initialData.description[initialData.lang] ? initialData.description[initialData.lang].main :
                (initialData.description[lang]?.main || initialData.description['es']?.main || "");
        }
        return getDraft()?.description || "";
    });

    const [tags, setTags] = useState(() => {
        if (initialData) {
            const t = initialData.tags?.[initialData.lang] || initialData.tags?.[lang] || initialData.tags?.['es'];
            return t ? t.join(", ") : "";
        }
        return getDraft()?.tags || "";
    });

    // Save draft on change (only if not editing)
    useEffect(() => {
        if (!editingSymbol) {
            const draft = { symbol, description, tags };
            localStorage.setItem("custom_emoji_draft", JSON.stringify(draft));
        }
    }, [symbol, description, tags, editingSymbol]);

    const restoreDraft = () => {
        const draft = localStorage.getItem("custom_emoji_draft");
        if (draft) {
            try {
                const parsed = JSON.parse(draft);
                setSymbol(parsed.symbol || "");
                setDescription(parsed.description || "");
                setTags(parsed.tags || "");
            } catch (e) {
                setSymbol("");
                setDescription("");
                setTags("");
            }
        } else {
            setSymbol("");
            setDescription("");
            setTags("");
        }
        setEditingSymbol(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!symbol.trim() || !description.trim()) return;

        if (editingId) {
            editCustomSymbol(editingId, { symbol, description, tags });
        } else {
            addCustomSymbol({ symbol, description, tags });
        }

        restoreDraft();

        if (initialData) {
            onClose();
        } else {
            setSymbol("");
            setDescription("");
            setTags("");
        }
    };

    // ... (rest of code) ...



    const handleEdit = (item: any) => {
        setSymbol(item.symbol);
        setDescription(item.description.es.main);
        setTags(item.tags?.es.join(", ") || "");
        setEditingId(item.id); // Track ID
        setEditingSymbol(item.symbol);
    };

    const handleDelete = (symbolToDelete: string) => {
        if (deleteConfirmation === symbolToDelete) {
            removeCustomSymbol(symbolToDelete);
            setDeleteConfirmation(null);
        } else {
            setDeleteConfirmation(symbolToDelete);
            // Auto reset confirmation after 3 seconds
            setTimeout(() => setDeleteConfirmation(prev => prev === symbolToDelete ? null : prev), 3000);
        }
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="w-full max-w-md lg:max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-4 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-2">
                        <Wrench className="w-5 h-5 text-zinc-900 dark:text-white scale-x-[-1]" />
                        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                            {t('config.title')}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 overflow-y-auto">


                    <h3 className="text-sm font-medium text-zinc-900 dark:text-white mb-4">
                        {editingSymbol ? t('config.edit_emoji.title') : t('config.add_emoji.title')}
                    </h3>

                    <form onSubmit={handleSubmit} className="mb-8">
                        <div className="flex flex-col lg:flex-row gap-4 items-end">
                            <div className="flex flex-row gap-4 w-full lg:contents">
                                <div className="flex-1">
                                    <label htmlFor="symbol" className="block text-xs font-medium text-zinc-500 mb-1">
                                        {t('config.form.emoji')}
                                    </label>
                                    <input
                                        id="symbol"
                                        type="text"
                                        value={symbol}
                                        maxLength={5}
                                        onChange={(e) => setSymbol(e.target.value)}
                                        className="w-full p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#6866D6] dark:text-white"
                                        placeholder={t('config.form.emoji.placeholder')}
                                    />
                                </div>
                                <div className="flex-[2] lg:flex-[2]">
                                    <label htmlFor="description" className="block text-xs font-medium text-zinc-500 mb-1">
                                        {t('config.form.name')}
                                    </label>
                                    <input
                                        id="description"
                                        type="text"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#6866D6] dark:text-white"
                                        placeholder={t('config.form.name.placeholder')}
                                    />
                                </div>
                            </div>
                            <div className="flex-[2] w-full lg:flex-[2.5] lg:w-auto">
                                <label htmlFor="tags" className="block text-xs font-medium text-zinc-500 mb-1">
                                    {t('config.form.tags')}
                                </label>
                                <input
                                    id="tags"
                                    type="text"
                                    value={tags}
                                    onChange={(e) => setTags(e.target.value)}
                                    className="w-full p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#6866D6] dark:text-white"
                                    placeholder={t('config.form.tags.placeholder')}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={!symbol || !description}
                                className="w-full lg:w-auto h-[42px] px-4 bg-[#6866D6] hover:bg-[#5554b7] text-white rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                            >
                                {editingSymbol ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                <span className="lg:hidden">{editingSymbol ? t('config.form.save') : t('config.form.add')}</span>
                            </button>
                            {editingSymbol && (
                                <button
                                    type="button"
                                    onClick={restoreDraft}
                                    className="w-full lg:w-auto h-[42px] px-4 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                                >
                                    <X className="w-4 h-4" />
                                    <span className="lg:hidden">{t('config.form.cancel')}</span>
                                </button>
                            )}
                        </div>
                    </form>

                    {customSymbols.length > 0 && (
                        <>
                            <h3 className="text-sm font-medium text-zinc-900 dark:text-white mb-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                {t('config.my_emojis')} ({customSymbols.length})
                            </h3>
                            <div className="space-y-2 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-3">
                                {customSymbols.map((item, index) => (
                                    <div key={`${item.symbol}-${index}`} className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 group h-full">
                                        <div className="flex items-center gap-4 flex-1 min-w-0">
                                            <span className="text-2xl shrink-0 w-16 text-center">{item.symbol}</span>
                                            <div className="flex flex-col gap-0.5 overflow-hidden">
                                                <span className="text-base font-medium text-zinc-900 dark:text-white truncate w-full">
                                                    {item.description.es.main}
                                                </span>
                                                {item.tags?.es && item.tags.es.length > 0 && (
                                                    <div className="flex items-center gap-2 overflow-hidden flex-wrap">
                                                        {item.tags.es.map((tag: string, i: number) => (
                                                            <span key={i} className="text-xs text-zinc-500 whitespace-nowrap">
                                                                #{tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 pl-2 shrink-0">
                                            <button
                                                onClick={() => handleEdit(item)}
                                                className="p-1.5 text-[#6866D6] hover:bg-[#6866D6]/10 dark:hover:bg-[#6866D6]/20 rounded opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                                                title={t('config.edit')}
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item.symbol)}
                                                className={`p-1.5 rounded opacity-0 group-hover:opacity-100 transition-all cursor-pointer ${deleteConfirmation === item.symbol
                                                    ? "text-red-600 bg-red-100 dark:bg-red-900/30 opacity-100"
                                                    : "text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                                                    }`}
                                                title={t('config.delete')}
                                            >
                                                {deleteConfirmation === item.symbol ? (
                                                    <Check className="w-4 h-4" />
                                                ) : (
                                                    <Trash2 className="w-4 h-4" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Export / Import Buttons */}
                    <div className="hidden lg:grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800">
                        <Link
                            href={importPath || "/import"}
                            className="flex flex-col items-center justify-center gap-2 p-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all group cursor-pointer"
                        >
                            <FileDown size={24} className="text-zinc-500 group-hover:text-[#6866D6] transition-colors" />
                            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200">
                                {t('config.import_backup')}
                            </span>
                        </Link>
                        <Link
                            href={exportPath || "/export"}
                            className="flex flex-col items-center justify-center gap-2 p-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all group cursor-pointer"
                        >
                            <FileUp size={24} className="text-zinc-500 group-hover:text-[#6866D6] transition-colors" />
                            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200">
                                {t('config.export_backup')}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}
