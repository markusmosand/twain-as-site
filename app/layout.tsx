import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebsiteSchema,
  getVehicleListSchema,
} from "@/lib/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://twain.no";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Twain AS | Premium bilutleie i Oslo",
    template: "%s | Twain AS",
  },
  description:
    "Lei Tesla eller varebil enkelt via Getaround. Fullt digitalt, null stress. Premium bilutleie i Oslo.",
  keywords: [
    "bilutleie",
    "Oslo",
    "Tesla",
    "varebil",
    "Getaround",
    "elektrisk bil",
    "leiebil",
    "Tesla Model 3",
    "Tesla Model Y",
    "Opel Vivaro",
  ],
  authors: [{ name: "Twain AS" }],
  creator: "Twain AS",
  publisher: "Twain AS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: SITE_URL,
    siteName: "Twain AS",
    title: "Twain AS | Premium bilutleie i Oslo",
    description: "Lei Tesla eller varebil enkelt via Getaround. Fullt digitalt, null stress.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twain AS | Premium bilutleie i Oslo",
    description: "Lei Tesla eller varebil enkelt via Getaround. Fullt digitalt, null stress.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getVehicleListSchema()),
          }}
        />
      </head>
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
