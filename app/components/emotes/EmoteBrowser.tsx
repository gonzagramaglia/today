"use client";

import { useState, useMemo, useEffect } from "react";
import { emotes } from "../../data/emotes";
import { useLanguage } from "../../contexts/language-context";
import { SearchX, Check, ExternalLink } from "lucide-react";

export function EmoteBrowser() {
    const { language } = useLanguage();

    const [search, setSearch] = useState("");
    const [copiedEmote, setCopiedEmote] = useState<string | null>(null);

    useEffect(() => {
        if (copiedEmote) {
            const timer = setTimeout(() => setCopiedEmote(null), 1500);
            return () => clearTimeout(timer);
        }
    }, [copiedEmote]);

    const normalizeText = (text: string) => {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    const filteredEmotes = useMemo(() => {
        if (!search.trim()) return emotes;

        const normalizedSearch = normalizeText(search);

        return emotes.filter(emote => {
            if (normalizeText(emote.name).includes(normalizedSearch)) return true;
            if (normalizeText(emote.twitchName).includes(normalizedSearch)) return true;
            if (normalizeText(emote.channel).includes(normalizedSearch)) return true;
            const tags = emote.tags[language] || [];
            if (tags.some(tag => normalizeText(tag).includes(normalizedSearch))) return true;
            return false;
        });
    }, [search, language]);

    const handleCopy = async (emote: typeof emotes[0]) => {
        try {
            await navigator.clipboard.writeText(emote.twitchName);
            setCopiedEmote(emote.name);
        } catch (err) {
            console.error("Failed to copy emote name", err);
        }
    };

    return (
        <div className="space-y-2">
            {/* Header */}
            <div className={`flex flex-col md:flex-row items-center justify-center pt-4 md:pt-8 pb-2 md:pb-4 gap-0 md:gap-1 max-w-4xl mx-auto ${language === 'es' ? 'md:translate-x-12' : ''}`}>
                <img
                    src="/milemojis.png"
                    alt="Emotes"
                    className="h-64 md:h-80 w-auto aspect-square object-contain hover:scale-105 transition-transform duration-500 drop-shadow-2xl -mt-10 -mb-8 md:-mt-14 md:-mb-12 md:-mr-7 shrink-0"
                />
                <div className="flex flex-col items-center md:items-start md:gap-0 md:-ml-7">
                    <h1 className="mx-auto md:mx-0 md:max-w-xl text-3xl md:text-5xl font-extrabold text-center md:text-left text-neutral-900 leading-tight tracking-tight">
                        {language === "en" ? (
                            <>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600">
                                    Get the perfect emote{" "}
                                </span>
                                <span className="text-[#9146FF] block">
                                    in a flash!
                                </span>
                            </>
                        ) : (
                            <>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600">
                                    ¡Consigue el emote{" "}
                                </span>
                                <span className="block md:inline">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600">
                                        perfecto{" "}
                                    </span>
                                    <span className="text-[#9146FF]">
                                        al instante!
                                    </span>
                                </span>
                            </>
                        )}
                    </h1>
                </div>
            </div>

            {/* Search */}
            <div className="sticky top-0 z-10 bg-white py-4 border-b border-neutral-200">
                <div className="relative">
                    <input
                        type="text"
                        placeholder={language === "en" ? "Search emotes..." : "Buscar emotes..."}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-neutral-300 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-[#9146FF] transition-all text-neutral-900"
                    />
                </div>
            </div>

            {/* Emotes Grid */}
            <section>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-4">
                    {filteredEmotes.map((emote) => {
                        const isCopied = copiedEmote === emote.name;
                        return (
                            <div
                                key={emote.name}
                                className="relative flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-neutral-50 transition-all group border border-transparent hover:border-neutral-200"
                            >
                                <button
                                    onClick={() => handleCopy(emote)}
                                    className="flex flex-col items-center gap-2 cursor-pointer bg-transparent border-none p-0 w-full"
                                >
                                    <div className="w-14 h-14 flex items-center justify-center">
                                        {isCopied ? (
                                            <Check className="w-8 h-8 text-green-500 animate-in zoom-in duration-200" />
                                        ) : (
                                            <img
                                                src={emote.file}
                                                alt={emote.name}
                                                className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-200"
                                            />
                                        )}
                                    </div>
                                    <span className={`text-xs font-medium text-center transition-colors ${isCopied ? "text-green-600" : "text-neutral-700"}`}>
                                        {isCopied
                                            ? (language === "en" ? "Copied!" : "¡Copiado!")
                                            : emote.twitchName}
                                    </span>
                                </button>
                                <a
                                    href={`https://twitch.tv/${emote.channel}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-1 text-[10px] text-[#9146FF] hover:underline font-medium"
                                >
                                    {emote.channel}
                                    <ExternalLink className="w-2.5 h-2.5" />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* No results */}
            {filteredEmotes.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-neutral-500 space-y-4">
                    <div className="bg-neutral-100 p-4 rounded-full">
                        <SearchX className="w-8 h-8 text-neutral-400" />
                    </div>
                    <div className="text-center text-neutral-500">
                        <p className="font-bold text-lg mb-1">
                            {language === "en" ? "No emotes found" : "No se encontraron emotes"}
                        </p>
                        <p className="text-lg">&quot;{search}&quot;</p>
                    </div>
                </div>
            )}
        </div>
    );
}
