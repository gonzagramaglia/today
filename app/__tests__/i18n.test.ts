import { describe, it, expect } from "vitest";
import { dictionary } from "../data/i18n";
import type { Language, Dictionary } from "../data/i18n";

describe("i18n dictionary", () => {
    it("exports both languages", () => {
        expect(dictionary).toHaveProperty("es");
        expect(dictionary).toHaveProperty("en");
    });

    it("has the same keys in both languages", () => {
        const esKeys = Object.keys(dictionary.es).sort();
        const enKeys = Object.keys(dictionary.en).sort();
        expect(esKeys).toEqual(enKeys);
    });

    it("has no empty string values in es", () => {
        Object.entries(dictionary.es).forEach(([key, value]) => {
            expect(value, `es.${key} should not be empty`).not.toBe("");
        });
    });

    it("has no empty string values in en", () => {
        Object.entries(dictionary.en).forEach(([key, value]) => {
            expect(value, `en.${key} should not be empty`).not.toBe("");
        });
    });

    it("contains required keys for the app", () => {
        const requiredKeys: (keyof Dictionary)[] = [
            "title",
            "subtitle",
            "copy",
            "copied",
            "edit",
            "save",
            "delete",
            "confirmDelete",
            "placeholder",
            "goToHome",
            "goToEmojis",
        ];
        requiredKeys.forEach((key) => {
            expect(dictionary.es[key]).toBeDefined();
            expect(dictionary.en[key]).toBeDefined();
        });
    });

    it("Language type supports es and en", () => {
        const lang: Language = "es";
        expect(dictionary[lang]).toBeDefined();
        const lang2: Language = "en";
        expect(dictionary[lang2]).toBeDefined();
    });
});
