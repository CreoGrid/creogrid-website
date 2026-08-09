import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../../../../src/styles/torqone.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-interTorqone",
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://creogrid.co.in"),

    title: {
        default: "TorqOne — AI Gym Management & Business Growth Platform",
        template: "%s | TorqOne",
    },

    description:
        "TorqOne is an AI-powered gym management and business growth platform for modern gyms. Manage members, automate operations, capture leads, improve retention, and grow revenue from one intelligent platform.",

    authors: [
        {
            name: "CreoGrid",
            url: "https://creogrid.co.in",
        },
    ],

    creator: "CreoGrid",
    publisher: "CreoGrid",

    category: "Gym Management Software",

    classification: "AI-powered gym management, business automation and business growth platform",

    keywords: [
        "gym management software",
        "gym management software India",
        "gym management software Kerala",
        "gym management software Thrissur",
        "AI gym management software",
        "AI gym software",
        "gym business management software",
        "gym software India",
        "gym software Kerala",
        "gym software Thrissur",
        "gym CRM software",
        "gym lead management software",
        "gym marketing automation",
        "gym business automation",
        "gym member retention software",
        "gym revenue growth software",
        "fitness business software",
        "fitness business automation",
        "enterprise gym software",
        "TorqOne",
        "CreoGrid",
    ],

    alternates: {
        canonical: "/products/gym/torqone",
    },

    openGraph: {
        title: "TorqOne — AI Gym Management & Business Growth Platform",

        description:
            "Manage members, automate operations, capture leads, improve retention, and grow gym revenue with one intelligent platform.",

        siteName: "TorqOne by CreoGrid",

        type: "website",

        url: "https://creogrid.co.in/products/gym/torqone",

        locale: "en_IN",

        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "TorqOne — AI Gym Management & Growth Platform",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: "TorqOne — AI Gym Management & Growth Platform",

        description:
            "AI-powered gym management, automation, member retention, lead management and business growth for modern gyms.",

        images: ["/og-image.png"],
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
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className={`torqone-page ${inter.variable} font-sans bg-torqone-background text-torqone-text antialiased`}
        >
            {children}
        </div>
    );
}
