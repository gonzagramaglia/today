import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../components/footer";

describe("Footer", () => {
    it("renders the copyright notice", () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear();
        expect(screen.getByText(`© ${currentYear} | Mens sana in corpore sano`)).toBeInTheDocument();
    });

    it("displays current year dynamically", () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear().toString();
        expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
    });
});
