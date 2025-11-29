import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Twain AS | Premium bilutleie i Oslo",
    template: "%s | Twain AS",
  },
  description:
    "Lei Tesla eller varebil enkelt via Getaround. Fullt digitalt, null stress. Premium bilutleie i Oslo.",
  keywords: ["bilutleie", "Oslo", "Tesla", "varebil", "Getaround", "elektrisk bil"],
  authors: [{ name: "Twain AS" }],
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "Twain AS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
