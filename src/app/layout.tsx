import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import propertyData from '@/data/property.json';

const SITE_URL = 'https://luculuc.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'LUCULUC Garden & Forest | Cabaña en La Tigra, San Carlos',
    template: '%s | LUCULUC Garden & Forest',
  },
  description:
    'LUCULUC Garden & Forest — una cabaña inmersa en la naturaleza tropical de San Carlos, Costa Rica. Verde, relajante, vivo. Reserva directa cerca del Volcán Arenal y La Fortuna.',
  keywords: [
    'cabaña San Carlos',
    'LUCULUC',
    'hospedaje La Tigra',
    'cabaña Costa Rica',
    'alojamiento Arenal',
    'turismo La Fortuna',
    'eco lodge Costa Rica',
  ],
  authors: [{ name: 'LUCULUC Garden & Forest' }],
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: SITE_URL,
    siteName: 'LUCULUC Garden & Forest',
    title: 'LUCULUC Garden & Forest | Verde Relajante Vivo',
    description:
      'Cabaña inmersa en la naturaleza tropical de San Carlos, Costa Rica. Tu refugio entre volcanes, bosque y jardines.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LUCULUC Garden & Forest',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUCULUC Garden & Forest | Verde Relajante Vivo',
    description:
      'Cabaña inmersa en la naturaleza tropical de San Carlos, Costa Rica.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'LUCULUC Garden & Forest',
  description:
    'Cabaña inmersa en la naturaleza tropical de La Tigra, San Carlos, Costa Rica.',
  slogan: 'Verde Relajante Vivo',
  url: SITE_URL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'La Lucha, La Tigra',
    addressLocality: 'San Carlos',
    addressRegion: 'Alajuela',
    postalCode: '21008',
    addressCountry: 'CR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: propertyData.location.latitude,
    longitude: propertyData.location.longitude,
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Jacuzzi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Aire acondicionado', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Cocina equipada', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Estacionamiento', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Jardín', value: true },
  ],
  sameAs: [
    propertyData.contact.socialMedia.instagram,
    propertyData.contact.socialMedia.facebook,
    propertyData.contact.socialMedia.tiktok,
    propertyData.contact.socialMedia.airbnb,
    propertyData.contact.socialMedia.linktree,
  ],
  petsAllowed: true,
  smokingAllowed: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06160e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-forest-950 text-cream antialiased">
        <Header />
        {children}
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
