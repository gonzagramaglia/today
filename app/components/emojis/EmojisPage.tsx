"use client";

import { useLanguage, LanguageProvider } from "../../contexts/language-context";
import { useState, useEffect, Suspense } from "react";
import { Loader2 } from "lucide-react";
import ConfigModal from "./config-modal";
import { CustomSymbolsProvider } from "../../contexts/custom-symbols-context";
import ExportModal from "./export-modal";
import ImportModal from "./import-modal";
import { SymbolBrowser } from "./symbol-browser";
import Footer from "../footer";
import FloatingLinks from "../FloatingLinks";
import { useSearchParams } from "next/navigation";

function EmojisContent() {
    const { language, t } = useLanguage();
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [editingEmoji, setEditingEmoji] = useState(null);

    const handleEditEmoji = (emoji: any) => {
        setEditingEmoji(emoji);
        setIsSettingsOpen(true);
    };

    const handleCloseSettings = () => {
        setIsSettingsOpen(false);
        setEditingEmoji(null);
    };

    const isEnglish = language === "en";
    const basePath = isEnglish ? "/en/emojis" : "/emojis";
    const exportPath = `${basePath}?modal=export`;
    const importPath = `${basePath}?modal=import`;

    return (
        <div className="max-w-4xl lg:max-w-[860px] mx-4 mt-2 lg:mx-auto">
            <main className="flex-auto min-w-0 mt-2 flex flex-col px-8 lg:px-0 relative z-10">
                <SymbolBrowser onEdit={handleEditEmoji} />
                <div className="mt-12">
                    <Footer />
                </div>
                <FloatingLinks lang={language as "es" | "en"} />
            </main>



            {/* Modal de Configuración */}
            {isSettingsOpen && (
                <ConfigModal
                    lang={language}
                    onClose={handleCloseSettings}
                    exportPath={exportPath}
                    importPath={importPath}
                    initialData={editingEmoji}
                />
            )}

            <Suspense fallback={null}>
                <QueryModals />
            </Suspense>
        </div>
    );
}

function QueryModals() {
    const searchParams = useSearchParams();
    const modal = searchParams.get('modal');
    
    return (
        <>
            {modal === 'export' && <ExportModal />}
            {modal === 'import' && <ImportModal />}
        </>
    );
}

function EmojisPageInner({ lang }: { lang: "es" | "en" }) {
    const { setLanguage } = useLanguage();

    useEffect(() => {
        setLanguage(lang);
    }, [lang, setLanguage]);

    return (
        <CustomSymbolsProvider>
            <EmojisContent />
        </CustomSymbolsProvider>
    );
}

export default function EmojisPage({ lang }: { lang: "es" | "en" }) {
    return (
        <LanguageProvider>
            <EmojisPageInner lang={lang} />
        </LanguageProvider>
    );
}
