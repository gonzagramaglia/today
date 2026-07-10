import { describe, it, expect } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { GameProvider, useGame } from "../contexts/game-context";
import type { GameMode } from "../contexts/game-context";

function TestConsumer() {
    const { gameMode, setGameMode, showAds, toggleAds } = useGame();
    return (
        <div>
            <span data-testid="mode">{gameMode}</span>
            <span data-testid="ads">{String(showAds)}</span>
            <button onClick={() => setGameMode("insane")}>set-insane</button>
            <button onClick={() => setGameMode("classic")}>set-classic</button>
            <button onClick={toggleAds}>toggle-ads</button>
        </div>
    );
}

describe("GameContext", () => {
    it("provides default game mode as classic", () => {
        render(
            <GameProvider>
                <TestConsumer />
            </GameProvider>
        );
        expect(screen.getByTestId("mode").textContent).toBe("classic");
    });

    it("provides default showAds as false", () => {
        render(
            <GameProvider>
                <TestConsumer />
            </GameProvider>
        );
        expect(screen.getByTestId("ads").textContent).toBe("false");
    });

    it("allows changing game mode to insane", () => {
        render(
            <GameProvider>
                <TestConsumer />
            </GameProvider>
        );
        act(() => {
            screen.getByText("set-insane").click();
        });
        expect(screen.getByTestId("mode").textContent).toBe("insane");
    });

    it("allows changing game mode back to classic", () => {
        render(
            <GameProvider>
                <TestConsumer />
            </GameProvider>
        );
        act(() => {
            screen.getByText("set-insane").click();
        });
        act(() => {
            screen.getByText("set-classic").click();
        });
        expect(screen.getByTestId("mode").textContent).toBe("classic");
    });

    it("toggles ads on and off", () => {
        render(
            <GameProvider>
                <TestConsumer />
            </GameProvider>
        );
        act(() => {
            screen.getByText("toggle-ads").click();
        });
        expect(screen.getByTestId("ads").textContent).toBe("true");
        act(() => {
            screen.getByText("toggle-ads").click();
        });
        expect(screen.getByTestId("ads").textContent).toBe("false");
    });

    it("throws when useGame is used outside provider", () => {
        expect(() => {
            render(<TestConsumer />);
        }).toThrow("useGame must be used within a GameProvider");
    });

    it("GameMode type accepts classic and insane", () => {
        const mode1: GameMode = "classic";
        const mode2: GameMode = "insane";
        expect(mode1).toBe("classic");
        expect(mode2).toBe("insane");
    });
});
