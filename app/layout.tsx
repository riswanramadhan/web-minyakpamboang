import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInit from "./components/AOSInit";

const siteUrl = "https://minyakpamboang.dekatlokal.com";
const siteName = "minyakpamboang";
const brandName = "minyak pamboang";
const siteDescription =
  "Minyak Pamboang Pusaka Mandar adalah minyak herbal tradisional dari Tanah Mandar untuk membantu merawat luka ringan, iritasi kulit, dan kebutuhan perawatan keluarga secara alami.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Minyak Pamboang Pusaka Mandar",
    template: "%s | Minyak Pamboang",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Minyak Pamboang Pusaka Mandar",
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Minyak Pamboang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brandName,
    description: siteDescription,
    images: ["/logo.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    alternateName: brandName,
    url: siteUrl,
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes subtleWave {
              0% { background-position: 0% 50%; }
              25% { background-position: 50% 25%; }
              50% { background-position: 100% 50%; }
              75% { background-position: 50% 75%; }
              100% { background-position: 0% 50%; }
            }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.history.scrollRestoration) {
                window.history.scrollRestoration = 'manual';
              }
            `,
          }}
        />
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
