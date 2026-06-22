"use client";

import { useLanguage, LanguageProvider } from "../../contexts/language-context";
import { useEffect } from "react";
import { SymbolBrowser } from "./symbol-browser";
import Footer from "../footer";
import FloatingLinks from "../FloatingLinks";

function EmojisContent() {
    const { language, t } = useLanguage();

    return (
        <div className="max-w-4xl lg:max-w-[860px] mx-4 mt-2 lg:mx-auto">
            <main className="flex-auto min-w-0 mt-2 flex flex-col px-8 lg:px-0 relative z-10">
                <SymbolBrowser />
                <div className="mt-12">
                    <Footer />
                </div>
                <FloatingLinks lang={language as "es" | "en"} />
            </main>

        </div>
    );
}

function EmojisPageInner({ lang }: { lang: "es" | "en" }) {
    const { setLanguage } = useLanguage();

    useEffect(() => {
        setLanguage(lang);
    }, [lang, setLanguage]);

    return (
        <EmojisContent />
    );
}

export default function EmojisPage({ lang }: { lang: "es" | "en" }) {
    return (
        <LanguageProvider>
            <EmojisPageInner lang={lang} />
        </LanguageProvider>
    );
}
