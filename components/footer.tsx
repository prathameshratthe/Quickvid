import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"

export const Footer = () => {
    return (
        <div className="container my-10 flex flex-col items-center justify-start gap-5 md:flex-row">
            <ThemeToggle />
        </div>
    )
}
