import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { Providers } from "@/components/providers/Providers"
import { SiteNav } from "@/components/site/SiteNav";
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
    default: "CreoGrid — Tailored Intelligent Systems for Stronger Business",
    template: "%s | CreoGrid",
  },
  description:
    "CreoGrid engineers custom software, automation, AI, ERP, CRM, and dashboards that organize operations, connect teams, and help businesses scale.",
  metadataBase: new URL("https://creogrid.com"),
  applicationName: "CreoGrid",
  authors: [{ name: "CreoGrid" }],
  keywords: [
    "custom software",
    "business automation",
    "AI solutions",
    "ERP systems",
    "CRM systems",
    "intelligent systems",
  ],
  category: "technology",
  classification: "Business technology services",
  alternates: { canonical: "/" },
  openGraph: {
    title: "CreoGrid — Tailored Intelligent Systems for Stronger Business",
    description:
      "CreoGrid engineers custom software, automation, AI, ERP, CRM, and dashboards that organize operations, connect teams, and help businesses scale.",
    type: "website",
    url: "https://creogrid.com/",
    siteName: "CreoGrid",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CreoGrid — Tailored Intelligent Systems for Stronger Business",
    description:
      "CreoGrid engineers custom software, automation, AI, ERP, CRM, and dashboards that organize operations, connect teams, and help businesses scale.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={``}
    >
      <body>
        <Providers>
            {children}
            <Footer />
        </Providers>
      </body>
    </html>
  );
}
