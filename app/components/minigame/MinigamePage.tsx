"use client";

import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "../../contexts/language-context";
import { GameProvider } from "../../contexts/game-context";
import { GameView } from "./GameView";
import FloatingLinks from "../FloatingLinks";
import Footer from "../footer";

interface MinigamePageProps {
    lang: "en" | "es";
}

function MinigameContent({ lang }: { lang: "en" | "es" }) {
    const { setLanguage } = useLanguage();

    useEffect(() => {
        setLanguage(lang);
    }, [lang, setLanguage]);

    return (
        <div className="max-w-4xl mx-4 lg:mx-auto">
            <div
                className="fixed inset-0 z-[-1] bg-cover bg-center bg-fixed bg-no-repeat opacity-5"
                style={{ backgroundImage: "url('/wallpaper.png')" }}
            />
            <main className="flex-auto min-w-0 flex flex-col px-4 md:px-8 lg:px-0">
                <GameView />
                <Footer />
            </main>
            <FloatingLinks lang={lang} />
        </div>
    );
}

export default function MinigamePage({ lang }: MinigamePageProps) {
    return (
        <LanguageProvider>
            <GameProvider>
                <MinigameContent lang={lang} />
            </GameProvider>
        </LanguageProvider>
    );
}
