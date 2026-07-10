import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useAuth } from "../hooks/useAuth";

// Mock supabase client
vi.mock("@/utils/supabase/client", () => ({
    createClient: () => ({
        auth: {
            getUser: vi.fn(),
            onAuthStateChange: vi.fn(() => ({
                data: { subscription: { unsubscribe: vi.fn() } },
            })),
        },
    }),
}));

describe("useAuth hook", () => {
    it("returns user as null initially", () => {
        const { result } = renderHook(() => useAuth());
        expect(result.current.user).toBeNull();
    });

    it("returns loading as false", () => {
        const { result } = renderHook(() => useAuth());
        expect(result.current.loading).toBe(false);
    });

    it("returns supabase client instance", () => {
        const { result } = renderHook(() => useAuth());
        expect(result.current.supabase).toBeDefined();
    });

    it("supabase client has auth property", () => {
        const { result } = renderHook(() => useAuth());
        expect(result.current.supabase.auth).toBeDefined();
    });
});
