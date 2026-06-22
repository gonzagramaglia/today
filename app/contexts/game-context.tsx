"use client";
import { createContext, useContext, ReactNode, useState } from 'react'

export type GameMode = 'classic' | 'insane'

interface GameContextType {
    gameMode: GameMode
    setGameMode: (mode: GameMode) => void
    showAds: boolean
    toggleAds: () => void
}

const GameContext = createContext<GameContextType | undefined>(undefined)

export function GameProvider({ children }: { children: ReactNode }) {
    const [gameMode, setGameMode] = useState<GameMode>('classic')
    const [showAds, setShowAds] = useState(false)

    const toggleAds = () => setShowAds(prev => !prev)

    return (
        <GameContext.Provider value={{ gameMode, setGameMode, showAds, toggleAds }}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame() {
    const context = useContext(GameContext)
    if (context === undefined) {
        throw new Error('useGame must be used within a GameProvider')
    }
    return context
}
