"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { SymbolItem, symbols } from "../data/symbols";

interface CustomSymbolsContextType {
    customSymbols: SymbolItem[];
    addCustomSymbol: (symbol: CustomSymbolInput) => void;
    editCustomSymbol: (id: string, symbol: CustomSymbolInput) => void;
    removeCustomSymbol: (symbol: string) => void;
}

export interface CustomSymbolInput {
    symbol: string;
    description: string;
    tags?: string; // Comma separated tags
}

const CustomSymbolsContext = createContext<CustomSymbolsContextType | undefined>(undefined);

export function CustomSymbolsProvider({ children }: { children: ReactNode }) {
    const generateId = () => {
        if (typeof crypto !== 'undefined' && crypto.randomUUID) {
            return crypto.randomUUID();
        }
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    };

    const [customSymbols, setCustomSymbols] = useState<SymbolItem[]>(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("custom_emojis");
            if (stored) {
                try {
                    return JSON.parse(stored);
                } catch {
                    return [];
                }
            }
        }
        return [];
    });

    // Migrate legacy symbols (add IDs if missing)
    useEffect(() => {
        setCustomSymbols(prev => {
            let changed = false;
            const migrated = prev.map(s => {
                if (!s.id) {
                    changed = true;
                    // Try to find matching static symbol to inherit ID
                    const staticMatch = symbols.find(staticS => staticS.symbol === s.symbol);
                    const newId = staticMatch?.id || generateId();
                    return { ...s, id: newId };
                }
                return s;
            });
            return changed ? migrated : prev;
        });
    }, []);

    useEffect(() => {
        localStorage.setItem("custom_emojis", JSON.stringify(customSymbols));
    }, [customSymbols]);

    const addCustomSymbol = (input: CustomSymbolInput) => {
        const newSymbol: SymbolItem = {
            id: generateId(),
            symbol: input.symbol,
            description: {
                es: { main: input.description },
                en: { main: input.description },
            },
            tags: {
                es: input.tags ? input.tags.split(",").map(t => t.trim()).filter(Boolean) : [],
                en: input.tags ? input.tags.split(",").map(t => t.trim()).filter(Boolean) : [],
            },
        };

        setCustomSymbols(prev => {
            const filtered = prev.filter(s => s.symbol !== newSymbol.symbol);
            return [...filtered, newSymbol];
        });
    };

    const editCustomSymbol = (id: string, input: CustomSymbolInput) => {
        setCustomSymbols(prev => {
            const targetSymbol = input.symbol;
            const filtered = prev.filter(s => s.id !== id && s.symbol !== targetSymbol);

            const updatedSymbol: SymbolItem = {
                id: id,
                symbol: input.symbol,
                description: {
                    es: { main: input.description },
                    en: { main: input.description },
                },
                tags: {
                    es: input.tags ? input.tags.split(",").map(t => t.trim()).filter(Boolean) : [],
                    en: input.tags ? input.tags.split(",").map(t => t.trim()).filter(Boolean) : [],
                }
            };

            return [...filtered, updatedSymbol];
        });
    };

    const removeCustomSymbol = (symbol: string) => {
        setCustomSymbols(prev => prev.filter(s => s.symbol !== symbol));
    };

    return (
        <CustomSymbolsContext.Provider value={{ customSymbols, addCustomSymbol, editCustomSymbol, removeCustomSymbol }}>
            {children}
        </CustomSymbolsContext.Provider>
    );
}

export function useCustomSymbols() {
    const context = useContext(CustomSymbolsContext);
    if (context === undefined) {
        throw new Error("useCustomSymbols must be used within a CustomSymbolsProvider");
    }
    return context;
}
