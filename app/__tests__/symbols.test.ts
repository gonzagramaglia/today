import { describe, it, expect } from "vitest";
import { symbols } from "../data/symbols";
import type { SymbolItem } from "../data/symbols";

describe("symbols data", () => {
    it("exports a non-empty array", () => {
        expect(Array.isArray(symbols)).toBe(true);
        expect(symbols.length).toBeGreaterThan(0);
    });

    it("each symbol has required fields", () => {
        symbols.forEach((item: SymbolItem, index: number) => {
            expect(item.symbol, `symbol at index ${index} should have a symbol`).toBeDefined();
            expect(item.symbol.length).toBeGreaterThan(0);
            expect(item.description).toBeDefined();
            expect(item.description.es).toBeDefined();
            expect(item.description.en).toBeDefined();
            expect(item.description.es.main).toBeDefined();
            expect(item.description.en.main).toBeDefined();
        });
    });

    it("descriptions have non-empty main field", () => {
        symbols.forEach((item, index) => {
            expect(item.description.es.main.length, `es.main at index ${index}`).toBeGreaterThan(0);
            expect(item.description.en.main.length, `en.main at index ${index}`).toBeGreaterThan(0);
        });
    });

    it("tags when present have both languages", () => {
        symbols.forEach((item, index) => {
            if (item.tags) {
                expect(item.tags.es, `tags.es at index ${index}`).toBeDefined();
                expect(item.tags.en, `tags.en at index ${index}`).toBeDefined();
                expect(Array.isArray(item.tags.es)).toBe(true);
                expect(Array.isArray(item.tags.en)).toBe(true);
            }
        });
    });

    it("contains common symbols like rocket and laptop", () => {
        const rocketSymbol = symbols.find((s) => s.symbol === "🚀");
        expect(rocketSymbol).toBeDefined();
        expect(rocketSymbol?.description.en.main).toBe("Rocket");

        const laptopSymbol = symbols.find((s) => s.symbol === "💻");
        expect(laptopSymbol).toBeDefined();
    });

    it("no duplicate symbols exist", () => {
        const seen = new Map<string, number>();
        const duplicates: string[] = [];
        symbols.forEach((s, i) => {
            if (seen.has(s.symbol)) {
                duplicates.push(`"${s.symbol}" at index ${seen.get(s.symbol)} and ${i}`);
            } else {
                seen.set(s.symbol, i);
            }
        });
        expect(duplicates, `Duplicates found: ${duplicates.join(", ")}`).toHaveLength(0);
    });
});
