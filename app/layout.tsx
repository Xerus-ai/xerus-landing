import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Lora } from 'next/font/google';
import Providers from '@/components/Providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Xerus — Your Virtual Office',
  description:
    'Hire AI agents. Give them tools. Watch them work. Build your virtual office with Xerus.',
  icons: {
    icon: '/images/favicons/favicon-32x32.png',
    apple: '/images/favicons/apple-icon-180x180.png',
  },
  openGraph: {
    title: 'Xerus — Your Virtual Office',
    description:
      'Hire AI agents. Give them tools. Watch them work.',
    type: 'website',
    url: 'https://www.xerus.ai',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-336JKQX2GY"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-336JKQX2GY');
          `}
        </Script>
      </head>
      <body className="bg-cream-base text-text-primary font-body antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {/* Global SVG filter for liquid glass distortion */}
        <svg aria-hidden="true" width="0" height="0" style={{ position: 'absolute' }}>
          <filter id="lg-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.01"
              numOctaves={1}
              seed={5}
              result="turbulence"
            />
            <feGaussianBlur in="turbulence" stdDeviation={3} result="softMap" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="softMap"
              scale={30}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
