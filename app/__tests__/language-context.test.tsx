import { describe, it, expect, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { LanguageProvider, useLanguage } from "../contexts/language-context";

// Mock next/navigation
vi.mock("next/navigation", () => ({
    usePathname: () => "/",
}));

function TestConsumer() {
    const { language, t, setLanguage } = useLanguage();
    return (
        <div>
            <span data-testid="language">{language}</span>
            <span data-testid="translation">{t("search.placeholder")}</span>
            <button onClick={() => setLanguage("en")}>switch-en</button>
            <button onClick={() => setLanguage("es")}>switch-es</button>
        </div>
    );
}

function renderConsumer() {
    return render(
        <LanguageProvider>
            <TestConsumer />
        </LanguageProvider>
    );
}

describe("LanguageContext", () => {
    it("provides default language as es", () => {
        renderConsumer();
        expect(screen.getByTestId("language").textContent).toBe("es");
    });

    it("translates keys correctly in es", () => {
        renderConsumer();
        expect(screen.getByTestId("translation").textContent).toBe(
            "Buscar emoji o etiqueta..."
        );
    });

    it("allows switching language to en", () => {
        renderConsumer();
        act(() => {
            screen.getByText("switch-en").click();
        });
        expect(screen.getByTestId("language").textContent).toBe("en");
        expect(screen.getByTestId("translation").textContent).toBe(
            "Search emoji or tag..."
        );
    });

    it("allows switching back to es", () => {
        renderConsumer();
        act(() => {
            screen.getByText("switch-en").click();
        });
        act(() => {
            screen.getByText("switch-es").click();
        });
        expect(screen.getByTestId("language").textContent).toBe("es");
    });

    it("returns key if translation not found", () => {
        function KeyMissConsumer() {
            const { t } = useLanguage();
            return <span data-testid="missing">{t("nonexistent.key")}</span>;
        }
        render(
            <LanguageProvider>
                <KeyMissConsumer />
            </LanguageProvider>
        );
        expect(screen.getByTestId("missing").textContent).toBe("nonexistent.key");
    });

    it("throws when useLanguage is used outside provider", () => {
        expect(() => {
            render(<TestConsumer />);
        }).toThrow("useLanguage must be used within a LanguageProvider");
    });
});
