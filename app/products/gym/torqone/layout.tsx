import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '../../../../src/styles/torqone.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-interTorqone',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://torqone.creogrid.com'),
  title: 'TorqOne — Enterprise AI Operating System for Gyms',
  description:
    'TorqOne is the full-stack AI platform for modern gym operators. Manage members, automate operations, acquire more clients, retain them longer, and grow revenue with enterprise-grade intelligence.',
  keywords: [
    'gym management software',
    'ai gym platform',
    'fitness business automation',
    'gym member retention',
    'gym revenue growth',
    'enterprise gym software',
    'creogrid',
  ],
  authors: [{ name: 'CreoGrid', url: 'https://creogrid.com' }],
  openGraph: {
    title: 'TorqOne — Enterprise AI Operating System for Gyms',
    description:
      'TorqOne is the full-stack AI platform that helps gym operators manage, automate, grow, and scale their business with enterprise-grade intelligence.',
    siteName: 'TorqOne by CreoGrid',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TorqOne Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TorqOne — Enterprise AI Operating System for Gyms',
    description: 'The enterprise AI platform for gym operators. Manage, automate, grow and scale.',
    images: [{ url: '/og-image.png' }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className={`torqone-page ${inter.variable} font-sans bg-torqone-background text-torqone-text antialiased`}>
        {children}
      </div>
  );
}
