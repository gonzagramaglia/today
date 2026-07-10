import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: ["./vitest.setup.ts"],
        include: ["**/*.test.{ts,tsx}"],
        coverage: {
            provider: "v8",
            reporter: ["text", "lcov"],
            include: ["app/**/*.{ts,tsx}"],
            exclude: [
                "app/**/page.tsx",
                "app/**/layout.tsx",
                "app/**/route.ts",
                "app/**/*.d.ts",
            ],
            thresholds: {
                statements: 80,
                branches: 80,
                functions: 80,
                lines: 80,
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "."),
        },
    },
});
