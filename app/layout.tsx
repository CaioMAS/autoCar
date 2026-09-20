import type { Metadata, Viewport } from "next";
import "./globals.css";
import { contactInfo } from "@/data/siteData";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://autocarmg.com.br"),
  title: "Auto Car Bosch Car Service | Oficina Mecânica Especializada em Montes Claros - MG",
  description:
    "Oficina mecânica especializada e centro automotivo Bosch Car Service em Montes Claros - MG. Injeção eletrônica computadorizada, alinhamento 3D, ar-condicionado, mecânica geral e garantia total de para-choque a para-choque.",
  keywords: [
    "Auto Car Montes Claros",
    "oficina mecânica montes claros",
    "bosch car service montes claros",
    "injeção eletrônica montes claros",
    "alinhamento 3d montes claros",
    "ar condicionado automotivo montes claros",
    "auto elétrica montes claros",
    "mecânica geral montes claros mg",
    "revisão automotiva preventiva montes claros",
    "freios e suspensão montes claros",
    "peças bosch montes claros",
  ],
  authors: [{ name: "Auto Car Bosch Car Service" }],
  creator: "Auto Car",
  publisher: "Auto Car",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Auto Car Bosch Car Service | Oficina Mecânica em Montes Claros - MG",
    description:
      "Tecnologia de ponta, diagnóstico computadorizado oficial Bosch e precisão alemã para o seu veículo em Montes Claros.",
    url: "https://autocarmg.com.br",
    siteName: "Auto Car Bosch Car Service",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero-workshop.jpg",
        width: 1200,
        height: 630,
        alt: "Oficina Mecânica Auto Car Bosch Car Service Montes Claros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Car Bosch Car Service | Montes Claros - MG",
    description: "Centro automotivo multimarca de alta precisão em Montes Claros - MG.",
    images: ["/images/hero-workshop.jpg"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "geo.region": "BR-MG",
    "geo.placename": "Montes Claros",
    "geo.position": "-16.731771;-43.864178",
    ICBM: "-16.731771, -43.864178",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Auto Car Bosch Car Service",
  image: "https://autocarmg.com.br/images/hero-workshop.jpg",
  "@id": "https://autocarmg.com.br",
  url: "https://autocarmg.com.br",
  telephone: "+55-38-3214-7590",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Itamar Caldeira Brant, 50",
    addressLocality: "Montes Claros",
    addressRegion: "MG",
    postalCode: "39400-701",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -16.731771,
    longitude: -43.864178,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "148",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços Mecânicos Bosch Car Service",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Injeção Eletrônica e Diagnóstico Computadorizado",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Alinhamento 3D Laser e Balanceamento",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Climatização e Ar-Condicionado Automotivo",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mecânica Geral e Revisão de Motores",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Auto Elétrica e Eletrônica Embarcada",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Freios ABS e Suspensão",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
