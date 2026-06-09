import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cookies from "./components/Cookies";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://foamix.com.ua";
const BRAND = "Foamix";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${BRAND} — утеплення пінополіуретаном по всій Україні`,
    template: `%s | ${BRAND}`,
  },

  description:
    "Foamix — професійне ППУ утеплення будинків, дахів, ангарів, складів і промислових об'єктів по всій Україні. Економія на опаленні до 50%. Ціна від 345 грн/м².",

  applicationName: BRAND,
  category: "construction",
  generator: "Next.js",

  keywords: [
    "Foamix",
    "пінополіуретан",
    "ППУ утеплення",
    "утеплення пінополіуретаном",
    "утеплення даху",
    "утеплення будинку",
    "утеплення ангарів",
    "утеплення складів",
    "енергоефективне утеплення",
    "напилення ППУ",
  ],

  authors: [{ name: BRAND }],
  creator: BRAND,
  publisher: BRAND,

  alternates: {
    canonical: "/",
    languages: {
      uk: "/",
    },
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: BRAND,
    locale: "uk_UA",
    title: `${BRAND} — утеплення пінополіуретаном по всій Україні`,
    description:
      "Енергоефективне ППУ утеплення будинків, дахів, ангарів, складів і промислових об'єктів. Економія на опаленні до 50%. Ціна від 345 грн/м².",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${BRAND} — енергоефективне утеплення пінополіуретаном`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${BRAND} — утеплення пінополіуретаном по всій Україні`,
    description:
      "Професійне ППУ утеплення будинків, дахів, ангарів і складів. Економія на опаленні до 50%.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/favicon/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0d87c4",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Cookies />

        <GoogleTagManager gtmId="GTM-MHVG38B3" />
      </body>
    </html>
  );
}
