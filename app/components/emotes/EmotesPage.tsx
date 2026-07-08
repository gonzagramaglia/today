"use client";

import { useLanguage, LanguageProvider } from "../../contexts/language-context";
import { useEffect } from "react";
import { EmoteBrowser } from "./EmoteBrowser";
import Footer from "../footer";

function EmotesContent() {
    return (
        <div className="max-w-4xl lg:max-w-[860px] mx-4 mt-2 lg:mx-auto">
            <main className="flex-auto min-w-0 mt-2 flex flex-col px-8 lg:px-0 relative z-10">
                <EmoteBrowser />
                <div className="mt-12">
                    <Footer />
                </div>
            </main>
        </div>
    );
}

function EmotesPageInner({ lang }: { lang: "es" | "en" }) {
    const { setLanguage } = useLanguage();

    useEffect(() => {
        setLanguage(lang);
    }, [lang, setLanguage]);

    return <EmotesContent />;
}

export default function EmotesPage({ lang }: { lang: "es" | "en" }) {
    return (
        <LanguageProvider>
            <EmotesPageInner lang={lang} />
        </LanguageProvider>
    );
}
