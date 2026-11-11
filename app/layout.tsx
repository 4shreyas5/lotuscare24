import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/motion/motion-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "variable",
});

const siteDescription =
  "Lotus Vitaal biedt thuiszorg, persoonlijke verzorging, verpleging en begeleiding met een vast, klein team dat u écht leert kennen.";

export const metadata: Metadata = {
  metadataBase: new URL("https://lotusvitaal.com"),
  title: {
    default: "Lotus Vitaal — Thuiszorg met persoonlijke aandacht",
    template: "%s — Lotus Vitaal",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Lotus Vitaal",
    title: "Lotus Vitaal — Thuiszorg met persoonlijke aandacht",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus Vitaal — Thuiszorg met persoonlijke aandacht",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <MotionProvider>
          <a
            href="#main-content"
            className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-50 focus-visible:rounded-lg focus-visible:bg-primary focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-primary-foreground"
          >
            Ga naar de inhoud
          </a>
          <Header />
          <main id="main-content" className="flex flex-1 flex-col">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
