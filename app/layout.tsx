import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import AOSInit from "./components/AOSInit";

const siteUrl = "https://minyakpamboang.dekatlokal.com";
const canonicalUrl = `${siteUrl}/`;
const brandName = "Minyak Pamboang Pusaka Mandar";
const siteName = `${brandName} - DekatLokal`;
const title = `${brandName} | Minyak Herbal Tradisional - DekatLokal`;
const siteDescription =
  "Minyak Pamboang Pusaka Mandar adalah minyak herbal tradisional warisan keluarga dari Tanah Mandar, tersedia ukuran 70 ml dan dapat dipesan online.";
const socialDescription =
  "Minyak herbal tradisional warisan keluarga dari Tanah Mandar, tersedia ukuran 70 ml dan dapat dipesan melalui Shopee atau WhatsApp.";
const heroImage = `${siteUrl}/hero.jpg`;
const heroAlt =
  "Minyak Pamboang Pusaka Mandar minyak herbal tradisional warisan Tanah Mandar";
const logoImage = `${siteUrl}/icon-512.png`;
const productImage = `${siteUrl}/produk/utama.png`;
const phoneNumber = "+6281341263588";
const shopeeStoreUrl = "https://shopee.co.id/minyak.pamboang2020bpom";
const facebookUrl =
  "https://www.facebook.com/p/Minyak-Pamboang-Pusaka-Mandar-100090603210553/";
const instagramUrl = "https://www.instagram.com/minyak.pamboang2020bpom/";
const tiktokUrl = "https://www.tiktok.com/@minyak.pamboang2020bpom";

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
  applicationName: brandName,
  title,
  description: siteDescription,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
  keywords: [
    "Minyak Pamboang Pusaka Mandar",
    "minyak herbal tradisional",
    "minyak tradisional Mandar",
    "produk herbal Makassar",
    "DekatLokal",
  ],
  openGraph: {
    title: `${brandName} | Minyak Herbal Tradisional`,
    description: socialDescription,
    siteName,
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: heroImage,
        width: 1305,
        height: 816,
        alt: heroAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandName} | Minyak Herbal Tradisional`,
    description:
      "Minyak herbal tradisional warisan Tanah Mandar dengan pemesanan online melalui Shopee dan WhatsApp.",
    images: [
      {
        url: heroImage,
        alt: heroAlt,
      },
    ],
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
  category: "produk herbal tradisional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${canonicalUrl}#website`,
        name: brandName,
        alternateName: "Minyak Pamboang",
        url: canonicalUrl,
        inLanguage: "id-ID",
        publisher: {
          "@id": `${canonicalUrl}#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        name: `${brandName} | Minyak Herbal Tradisional`,
        url: canonicalUrl,
        description: siteDescription,
        inLanguage: "id-ID",
        isPartOf: {
          "@id": `${canonicalUrl}#website`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          "@id": `${canonicalUrl}#primaryimage`,
          url: heroImage,
          contentUrl: heroImage,
          width: 1305,
          height: 816,
          caption: heroAlt,
        },
        breadcrumb: {
          "@id": `${canonicalUrl}#breadcrumb`,
        },
        mainEntity: [
          {
            "@id": `${canonicalUrl}#product-minyak-pamboang-pusaka`,
          },
          {
            "@id": `${canonicalUrl}#faq`,
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": `${canonicalUrl}#organization`,
        name: brandName,
        url: canonicalUrl,
        logo: {
          "@type": "ImageObject",
          url: logoImage,
          width: 512,
          height: 512,
        },
        image: heroImage,
        sameAs: [facebookUrl, instagramUrl, tiktokUrl, shopeeStoreUrl],
      },
      {
        "@type": "Store",
        "@id": `${canonicalUrl}#localbusiness`,
        name: brandName,
        url: canonicalUrl,
        description:
          "Minyak Pamboang Pusaka Mandar adalah produk minyak herbal tradisional berbasis warisan keluarga dari Tanah Mandar.",
        telephone: phoneNumber,
        image: [heroImage, productImage],
        logo: logoImage,
        priceRange: "Rp75.000 - Rp135.000",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Jl. Rappocini Raya Lr. 9E No. 18, Kec. Rappocini",
          addressLocality: "Makassar",
          addressRegion: "Sulawesi Selatan",
          addressCountry: "ID",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Makassar",
          },
          {
            "@type": "AdministrativeArea",
            name: "Sulawesi Selatan",
          },
          {
            "@type": "Place",
            name: "Tanah Mandar",
          },
          {
            "@type": "Country",
            name: "Indonesia",
          },
        ],
        sameAs: [facebookUrl, instagramUrl, tiktokUrl, shopeeStoreUrl],
        hasOfferCatalog: {
          "@id": `${canonicalUrl}#offer-catalog`,
        },
      },
      {
        "@type": "Product",
        "@id": `${canonicalUrl}#product-minyak-pamboang-pusaka`,
        name: "Minyak Pamboang Pusaka",
        description:
          "Minyak Pamboang Pusaka adalah minyak herbal tradisional ukuran 70 ml berbasis warisan keluarga dari Tanah Mandar dan dapat dipesan melalui Shopee atau WhatsApp.",
        image: [productImage],
        brand: {
          "@id": `${canonicalUrl}#organization`,
        },
        size: "70 ml",
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Ukuran",
            value: "70 ml",
          },
        ],
        url: `${canonicalUrl}#produk`,
        offers: {
          "@type": "Offer",
          url: `${canonicalUrl}#produk`,
          priceCurrency: "IDR",
          price: "75000",
          seller: {
            "@id": `${canonicalUrl}#localbusiness`,
          },
        },
      },
      {
        "@type": "OfferCatalog",
        "@id": `${canonicalUrl}#offer-catalog`,
        name: "Katalog Produk Minyak Pamboang Pusaka Mandar",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@id": `${canonicalUrl}#product-minyak-pamboang-pusaka`,
            },
            priceCurrency: "IDR",
            price: "75000",
            url: `${canonicalUrl}#produk`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Bagaimana cara memesan Minyak Pamboang Pusaka Mandar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pemesanan Minyak Pamboang Pusaka Mandar dapat dilakukan melalui Shopee, TikTok Shop jika tersedia, atau langsung melalui WhatsApp untuk informasi pemesanan.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <html lang="id">
      <head>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes subtleWave {
              0% { background-position: 0% 50%; }
              25% { background-position: 50% 25%; }
              50% { background-position: 100% 50%; }
              75% { background-position: 50% 75%; }
              100% { background-position: 0% 50%; }
            }
          `,
          }}
        />
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
