import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// src/app/layout.tsx
export const metadata = {
  title: { default: "Nirantara Trading", template: "%s | Nirantara Trading" },
  description: "Trusted exporter of healthcare products.",
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable}`}>
        <ThemeProvider>
          <Header />
          <main className="container py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
