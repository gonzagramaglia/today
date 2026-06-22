"use client";
import { createContext, useContext, ReactNode, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

type Language = 'es' | 'en'

interface LanguageContextType {
    language: Language
    t: (key: string) => string
    setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname() || '/'
    const [language, setLanguage] = useState<Language>('es')

    useEffect(() => {
        if (pathname.startsWith('/en')) {
            setLanguage('en')
        } else if (pathname === '/import' || pathname === '/export') {
            setLanguage('en')
        } else if (pathname === '/importar' || pathname === '/exportar') {
            setLanguage('es')
        } else {
            setLanguage('es')
        }
    }, [pathname])

    const translations: Record<Language, Record<string, string>> = {
        es: {
            ariaHome: "Ir a Hoy & Today",
            ariaEmojis: "Ir a Emojis",
            ariaMusic: "Ir a Playlist",
            ariaMinigame: "¡Ya estás aquí!",
            ariaMoovimiento: "Ir a Moovimiento",
            gameScore: "Puntaje",
            gameHighScore: "Puntaje máximo de la semana",
            gameHighScoreMobile: "Récord de la semana",
            gameHighScoreReset: "Se resetea los viernes a las 23:59",
            gameStart: "PRESIONA CUALQUIER TECLA PARA EMPEZAR",
            gameOver: "FIN DEL JUEGO",
            gameNewHighScore: "¡NUEVO PUNTAJE MÁXIMO!",
            gameRestart: "PRESIONA CUALQUIER TECLA PARA REINICIAR",
            gameJump: "para saltar",
            gameMove: 'para mover',
            gameStartMobile: "TOCA PARA EMPEZAR",
            gameRestartMobile: "TOCA PARA REINICIAR",
            gameJumpMobile: "Toca para saltar",
            gameKeySpace: 'Barra Espaciadora',
            gameModeClassic: "Clásico",
            gameModeInsane: 'Insano',
            gameShoot: 'Cargar y Tirar',
            "search.placeholder": "Buscar emoji o etiqueta...",
            "search.no_results": "No hay resultados para",
            "copy.feedback": "¡Copiado!",
            "config.edit": "Editar",
            "link.more_emojis": "Más emojis:",
            "config.title": "Configurar Emojis",
            "config.edit_emoji.title": "Editar Emoji",
            "config.add_emoji.title": "Agregar Nuevo Emoji",
            "config.form.emoji": "Emoji",
            "config.form.emoji.placeholder": "✨",
            "config.form.name": "Nombre",
            "config.form.name.placeholder": "Destello",
            "config.form.tags": "Etiquetas (separadas por comas)",
            "config.form.tags.placeholder": "brillo, estrella",
            "config.form.save": "Guardar",
            "config.form.add": "Agregar",
            "config.form.cancel": "Cancelar",
            "config.my_emojis": "Mis Emojis",
            "config.delete": "Eliminar",
            "config.import_backup": "Importar Backup",
            "config.export_backup": "Exportar Backup",
        },
        en: {
            ariaHome: "Go to Hoy & Today",
            ariaEmojis: "Go to Emojis",
            ariaMusic: "Go to Playlist",
            ariaMinigame: "You are here!",
            ariaMoovimiento: "Go to Moovimiento",
            gameScore: "Score",
            gameHighScore: "Best score of the week",
            gameHighScoreMobile: "Record of the week",
            gameHighScoreReset: "Resets every Friday at 23:59",
            gameStart: "PRESS ANY KEY TO START",
            gameOver: "GAME OVER",
            gameNewHighScore: "NEW HIGH SCORE!",
            gameRestart: "PRESS ANY KEY TO RESTART",
            gameJump: "to jump",
            gameMove: 'to move',
            gameStartMobile: "TOUCH TO START",
            gameRestartMobile: "TOUCH TO RESTART",
            gameJumpMobile: "Touch to jump",
            gameKeySpace: 'Space',
            gameModeClassic: 'Classic',
            gameModeInsane: 'Insane',
            gameShoot: 'Charge & Shoot',
            "search.placeholder": "Search emoji or tag...",
            "search.no_results": "No results for",
            "copy.feedback": "Copied!",
            "config.edit": "Edit",
            "link.more_emojis": "More emojis:",
            "config.title": "Emoji Configuration",
            "config.edit_emoji.title": "Edit Emoji",
            "config.add_emoji.title": "Add New Emoji",
            "config.form.emoji": "Emoji",
            "config.form.emoji.placeholder": "✨",
            "config.form.name": "Name",
            "config.form.name.placeholder": "Sparkles",
            "config.form.tags": "Tags (comma separated)",
            "config.form.tags.placeholder": "shiny, star",
            "config.form.save": "Save",
            "config.form.add": "Add",
            "config.form.cancel": "Cancel",
            "config.my_emojis": "My Emojis",
            "config.delete": "Delete",
            "config.import_backup": "Import Backup",
            "config.export_backup": "Export Backup",
        }
    }

    const t = (key: string) => {
        return translations[language][key] || key
    }

    return (
        <LanguageContext.Provider value={{ language, t, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
