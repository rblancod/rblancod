import type { Metadata } from 'next';
import { DefaultSeo } from 'next-seo';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Cabaña Tropical Premium | Reserva Tu Escapada de Lujo',
  description:
    'Descubre nuestra exclusiva cabaña turística en Costa Rica. Naturaleza, privacidad y comodidad en un solo lugar. Reserva directa, sin intermediarios.',
  keywords:
    'cabaña tropical, alojamiento Costa Rica, casa de descanso, turismo, eco-lodge, lujo natural',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://cabanatropical.com',
    siteName: 'Cabaña Tropical Premium',
    images: [
      {
        url: 'https://cabanatropical.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body className="bg-white text-forest-900 antialiased">
        <Header />
        {children}
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
