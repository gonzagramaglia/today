"use client";



import { useState, useMemo, useEffect, useRef } from "react";
import { symbols } from "../../data/symbols";
import { useLanguage } from "../../contexts/language-context";
import { Check, SearchX, X, Hash, Pencil, ExternalLink } from "lucide-react";
import { useCustomSymbols } from "../../contexts/custom-symbols-context";

export function LanguageSwitch() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 bg-neutral-100 p-1 rounded-full w-fit">
            <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer ${language === "es"
                    ? "bg-white shadow-sm text-[#6866D6]"
                    : "text-neutral-500 hover:text-neutral-700"
                    }`}
            >
                ES
            </button>
            <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer ${language === "en"
                    ? "bg-white shadow-sm text-[#6866D6]"
                    : "text-neutral-500 hover:text-neutral-700"
                    }`}
            >
                EN
            </button>
        </div>
    );
}

interface SymbolBrowserProps {
    onEdit?: (symbol: any) => void;
}

export function SymbolBrowser({ onEdit }: SymbolBrowserProps) {
    const { t } = useLanguage();
    const { customSymbols } = useCustomSymbols();

    // Combined symbols with deduplication (Custom overrides Static)
    const allSymbols = useMemo(() => {
        const customIds = new Set(customSymbols.map(s => String(s.id)).filter(Boolean));
        const customSymbolsSet = new Set(customSymbols.map(s => s.symbol));
        const merged = [...customSymbols];

        symbols.forEach(s => {
            // Exclude if ID matches (edited static) OR Symbol matches (overwrite by string)
            const hasIdMatch = s.id && customIds.has(String(s.id));
            const hasSymbolMatch = customSymbolsSet.has(s.symbol);

            if (!hasIdMatch && !hasSymbolMatch) {
                merged.push(s);
            }
        });

        return merged;
    }, [customSymbols]);

    // State for Search
    const [search, setSearch] = useState("");
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const [expandedTags, setExpandedTags] = useState(false);
    const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);
    const { language } = useLanguage();
    const prevLanguageRef = useRef(language);

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedSymbol(text);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    useEffect(() => {
        if (copiedSymbol) {
            const timer = setTimeout(() => setCopiedSymbol(null), 1500);
            return () => clearTimeout(timer);
        }
    }, [copiedSymbol]);

    useEffect(() => {
        setExpandedTags(false);
    }, [search]);

    // Translate active tag when language changes
    useEffect(() => {
        if (prevLanguageRef.current !== language && activeTag) {
            const fromLang = prevLanguageRef.current as 'es' | 'en';
            const toLang = language as 'es' | 'en';

            // Find a symbol that has the active tag in the previous language
            const matchingSymbol = symbols.find(s =>
                s.tags && s.tags[fromLang] && s.tags[fromLang].includes(activeTag)
            );

            if (matchingSymbol && matchingSymbol.tags?.[fromLang] && matchingSymbol.tags?.[toLang]) {
                const index = matchingSymbol.tags[fromLang].indexOf(activeTag);
                if (index !== -1 && matchingSymbol.tags[toLang][index]) {
                    setActiveTag(matchingSymbol.tags[toLang][index]);
                }
            }
        }
        prevLanguageRef.current = language;
    }, [language, activeTag]);

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        symbols.forEach(item => {
            item.tags?.[language]?.forEach(tag => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, [language]);

    const normalizeText = (text: string) => {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    const matchingTags = useMemo(() => {
        if (!search.trim() || activeTag) return [];
        const normalizedSearch = normalizeText(search);
        return allTags.filter(tag => normalizeText(tag).includes(normalizedSearch));
    }, [search, allTags, activeTag]);

    const filteredSymbols = useMemo(() => {
        let currentSymbols = symbols;

        if (language === 'en') {
            currentSymbols = currentSymbols.filter(item =>
                item.symbol !== "¡" &&
                item.symbol !== "¿"
            );
        }

        if (activeTag) {
            return currentSymbols.filter(item =>
                item.tags?.[language]?.includes(activeTag)
            );
        }

        if (!search.trim()) return currentSymbols;
        if (!search.trim() && !activeTag) return allSymbols;

        const normalizedSearch = normalizeText(search);

        return allSymbols.filter((item) => {
            // Filter by Active Tag
            if (activeTag) {
                const itemTags = item.tags?.[language] || [];
                if (!itemTags.includes(activeTag)) return false;
            }

            if (!search.trim()) return true;

            // Search by Symbol
            if (item.symbol.includes(search)) return true;

            // Search by Description
            const description = item.description[language];
            if (
                normalizeText(description.main).includes(normalizedSearch) ||
                description.secondary?.some((s) => normalizeText(s).includes(normalizedSearch))
            ) {
                return true;
            }

            // Search by Tags
            const tags = item.tags?.[language] || [];
            if (tags.some((tag) => normalizeText(tag).includes(normalizedSearch))) return true;

            return false;
        });
    }, [search, language, activeTag, t, allSymbols]);

    const contextualTags = useMemo(() => {
        if (!search.trim() && !activeTag) return language === "en" ? ["Expressions", "Symbols"] : ["Expresiones", "Símbolos"]; // Default tags

        const tagCounts = new Map<string, number>();
        filteredSymbols.forEach(item => {
            item.tags?.[language]?.forEach(tag => {
                if (tag !== activeTag && !matchingTags.includes(tag)) {
                    tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
                }
            });
        });

        return Array.from(tagCounts.entries())
            .sort((a, b) => b[1] - a[1])
            .map(([tag]) => tag)
            .slice(0, 7);
    }, [filteredSymbols, language, activeTag, matchingTags, search]);

    const handleTagClick = (tag: string) => {
        setActiveTag(tag);
        setSearch("");
        setExpandedTags(false);
    };

    const handleUnpinTag = () => {
        setActiveTag(null);
        setSearch("");
        setExpandedTags(false);
    };




    return (
        <div className="space-y-2">
            <div className={`flex flex-col md:flex-row items-center justify-center pt-4 md:pt-8 pb-2 md:pb-4 gap-0 md:gap-1 max-w-4xl mx-auto ${language === 'es' ? 'md:translate-x-12' : ''}`}>
                <button
                    onClick={() => handleTagClick(language === 'en' ? 'Party' : 'Fiesta')}
                    className="cursor-pointer bg-transparent border-none p-0 outline-none focus:outline-none shrink-0"
                    type="button"
                >
                    <img
                        src="/milemojis.png"
                        alt="Emojis"
                        className={`h-64 md:h-80 w-auto aspect-square object-contain hover:scale-105 transition-transform duration-500 drop-shadow-2xl -mt-10 -mb-8 md:-mt-14 md:-mb-12 md:-mr-7`}
                    />
                </button>
                <div className="flex flex-col items-center md:items-start md:gap-0 md:-ml-7">
                    <h1 className="mx-auto md:mx-0 md:max-w-xl text-3xl md:text-5xl font-extrabold text-center md:text-left text-neutral-900 leading-tight tracking-tight">
                        {language === 'en' ? (
                            <>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600">
                                    Get the perfect emoji{" "}
                                </span>
                                <span className="text-[#6866D6] block">
                                    in a flash!
                                </span>
                            </>
                        ) : (
                            <>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600">
                                    ¡Consigue el emoji{" "}
                                </span>
                                <span className="block md:inline">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600">
                                        perfecto{" "}
                                    </span>
                                    <span className="text-[#6866D6]">
                                        al instante!
                                    </span>
                                </span>
                            </>
                        )}
                    </h1>
                    <div className="md:hidden flex items-center gap-2 mt-6 mb-0">
                        <span className="text-sm text-neutral-600 font-medium">
                            {language === 'en' ? 'Switch language' : 'Cambiar idioma'}
                        </span>
                        <LanguageSwitch />
                    </div>
                </div>
            </div>

            <div className="sticky top-0 z-10 bg-white py-4 border-b border-neutral-200 space-y-3">
                <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder={t("search.placeholder")}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onFocus={() => {
                                if (activeTag) {
                                    handleUnpinTag();
                                }
                            }}
                            className="w-full px-4 py-2 rounded-lg border border-neutral-300 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-[#6866D6] transition-all text-neutral-900"
                        />
                    </div>
                    <div className="hidden md:block">
                        <LanguageSwitch />
                    </div>
                </div>

                {activeTag && (
                    <div className="flex items-center justify-center md:justify-start cursor-pointer" onClick={handleUnpinTag}>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#6866D6]/10 text-[#6866D6] rounded-full text-xs font-medium hover:bg-[#6866D6]/20 transition-colors">
                            <Hash className="w-3 h-3.5" />
                            {activeTag}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleUnpinTag();
                                }}
                                className="p-0 rounded-full transition-colors cursor-pointer"
                            >
                                <X className="w-3.5 h-3.5" />
                            </button>
                        </span>
                    </div>
                )}

                {/* Tag Suggestions */}
                {(matchingTags.length > 0 || contextualTags.length > 0) && (
                    <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-2 duration-200 justify-center md:justify-start">
                        {/* Direct Matches */}
                        {matchingTags.slice(0, expandedTags ? undefined : 7).map(tag => (
                            <button
                                key={tag}
                                onClick={() => handleTagClick(tag)}
                                className="inline-flex items-center gap-1 px-2 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 rounded text-xs transition-colors cursor-pointer"
                            >
                                <Hash className="w-3 h-3" />
                                {tag}
                            </button>
                        ))}

                        {/* Separator if needed */}
                        {matchingTags.length > 0 && contextualTags.length > 0 && (
                            (expandedTags) ||
                            (!expandedTags && matchingTags.length < 7)
                        ) && (
                                <div className="w-px h-6 bg-neutral-200 mx-1" />
                            )}

                        {/* Contextual/Related Tags */}
                        {contextualTags.slice(0, expandedTags ? undefined : Math.max(0, 7 - matchingTags.length)).map(tag => (
                            <button
                                key={tag}
                                onClick={() => handleTagClick(tag)}
                                className="inline-flex items-center gap-1 px-2 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 rounded text-xs transition-colors cursor-pointer"
                            >
                                <Hash className="w-3 h-3" />
                                {tag}
                            </button>
                        ))}

                        {/* Show More */}
                        {(matchingTags.length + contextualTags.length) > 7 && !expandedTags && (
                            <button
                                onClick={() => setExpandedTags(true)}
                                className="text-xs text-neutral-400 py-1 hover:text-neutral-600 cursor-pointer transition-colors"
                            >
                                {`+${(matchingTags.length + contextualTags.length) - 7} more`}
                            </button>
                        )}
                    </div>
                )}
            </div>

            <section>
                <div className={`grid gap-4 ${activeTag && (activeTag === 'Expressions' || activeTag === 'Expresiones') ? 'grid-cols-1 sm:grid-cols-1 md:grid-cols-1' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'}`}>
                    {filteredSymbols.map((item, index) => {
                        const isCopied = copiedSymbol === item.symbol;
                        return (
                            <button
                                key={`${item.symbol}-${index}`}
                                onClick={() => handleCopy(item.symbol)}
                                className="relative flex items-center gap-3 p-2 rounded hover:bg-neutral-50 transition-all text-left group overflow-hidden cursor-pointer"
                            >
                                <div className="text-2xl min-w-[2.5rem] h-10 flex items-center justify-center bg-neutral-50 rounded group-hover:bg-white transition-colors text-neutral-900 relative">
                                    {isCopied ? (
                                        <Check className="w-6 h-6 text-green-500 animate-in zoom-in duration-200" />
                                    ) : (
                                        item.symbol
                                    )}
                                </div>
                                {onEdit && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onEdit(item);
                                        }}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-white/80 hover:bg-white rounded-full text-neutral-400 hover:text-[#6866D6] opacity-0 group-hover:opacity-100 transition-all shadow-sm z-10 cursor-pointer"
                                        title={t("config.edit")}
                                    >
                                        <Pencil className="w-3 h-3" />
                                    </button>
                                )}
                                <div className="flex flex-col min-w-0">
                                    <span className={`text-sm font-medium truncate transition-colors ${isCopied ? "text-green-600" : "text-neutral-900"}`}>
                                        {isCopied ? t("copy.feedback") : item.description[language].main}
                                    </span>
                                    {item.tags?.[language] && item.tags[language].length > 0 && !isCopied && (
                                        <div className="flex flex-nowrap gap-1 overflow-hidden max-w-full">
                                            {item.tags[language].map((tag, tagIndex) => (
                                                <span key={tagIndex} className="text-[10px] text-neutral-400 whitespace-nowrap">
                                                    #{tag}
                                                </span>
                                            ))}
                                            {item.tags[language].length > 1 && (
                                                <span className="text-[10px] text-neutral-400">...</span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </section >

            {
                filteredSymbols.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-12 text-neutral-500 space-y-4">
                        <div className="bg-neutral-100 p-4 rounded-full">
                            <SearchX className="w-8 h-8 text-neutral-400" />
                        </div>
                        <div className="text-center text-neutral-500">
                            <p className="font-bold text-lg mb-1">
                                {activeTag ? t("search.no_results").replace('"{search}"', '').trim() : t("search.no_results").replace('"{search}"', '').trim()}
                            </p>
                            <p className="text-lg">"{activeTag ? `#${activeTag}` : search}"</p>
                        </div>
                        <div className="pt-4 flex justify-center">
                            <a
                                href="https://piliapp.com/twitter-symbols"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#6866D6] hover:underline inline-flex items-center gap-1.5 font-bold"
                            >
                                {t("link.more_emojis").replace(':', '')} https://piliapp.com/twitter-symbols
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                )
            }
        </div >
    );
}
