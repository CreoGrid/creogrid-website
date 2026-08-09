import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { Providers } from "@/components/providers/Providers";
import { Footer } from "@/components/site/Footer";

import "../src/styles.css";

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-plus-jakarta-sans",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "CreoGrid — Custom Software & AI Solutions Company in Kerala, India",
        template: "%s | CreoGrid",
    },

    description:
        "CreoGrid is a custom software and AI solutions company in Kerala, India, building ERP, CRM, business automation, dashboards, and intelligent systems for growing businesses.",

    metadataBase: new URL("https://creogrid.co.in"),

    applicationName: "CreoGrid",

    authors: [{ name: "CreoGrid" }],

    keywords: [
        "custom software development company Kerala",
        "software development company Kerala",
        "software company Kerala",
        "custom software development India",
        "software development company India",
        "AI solutions Kerala",
        "AI solutions India",
        "business automation Kerala",
        "business automation India",
        "automation Kerala",
        "automation solutions Kerala",
        "ERP software Kerala",
        "CRM software Kerala",
        "custom ERP development",
        "custom CRM development",
        "business software Kerala",
        "software company Thrissur",
        "software development Thrissur",
        "custom software Thrissur",
        "AI solutions Thrissur",
        "business automation Thrissur",
        "CreoGrid",
        "ai kerala",
        "software kerala",
        "custom software kerala",
        "kerala software company",
        "kerala software",
    ],

    category: "Business technology services",

    classification:
        "Custom software development, AI solutions, business automation and enterprise technology",

    alternates: {
        canonical: "/",
    },

    openGraph: {
        title: "CreoGrid — Custom Software & AI Solutions Company in Kerala, India",

        description:
            "Custom software, AI, ERP, CRM, automation, and intelligent business systems engineered by CreoGrid for growing businesses in Kerala, India and beyond.",

        type: "website",

        url: "https://creogrid.co.in/",

        siteName: "CreoGrid",

        locale: "en_IN",
    },

    twitter: {
        card: "summary_large_image",

        title: "CreoGrid — Custom Software & AI Solutions Company in Kerala, India",

        description:
            "Custom software, AI, ERP, CRM, automation, and intelligent business systems for growing businesses in Kerala, India and beyond.",
    },

    robots: {
        index: true,
        follow: true,

        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-video-preview": -1,
            "max-snippet": -1,
        },
    },

    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.ico",
    },

    manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#3A5DE2",
};


export default function RootLayout({ children }: { children: ReactNode }) {
    
    return (
        <html lang="en" suppressHydrationWarning className={``}>
            <body>
                <Providers>
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
