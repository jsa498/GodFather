import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GodFather Renovations | Premier Renovation Services in Surrey, BC',
  description: 'Transform your space with expert renovation services in Surrey and the Lower Mainland. Specializing in custom renovations, basements, and home improvements.',
  keywords: 'renovation, home renovation, basement renovation, custom renovation, Surrey renovation, home improvement, BC renovation, GodFather Renovations, kitchen renovation Surrey, bathroom renovation Surrey, home remodeling Surrey',
  authors: [{ name: 'GodFather Renovations' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google verification code
    yandex: 'your-yandex-verification', // Add your Yandex verification code
    yahoo: 'your-yahoo-verification', // Add your Yahoo verification code
  },
  metadataBase: new URL('https://god-father.ca'),
  alternates: {
    canonical: 'https://god-father.ca',
  },
  openGraph: {
    title: 'GodFather Renovations | Premier Renovation Services in Surrey, BC',
    description: 'Transform your space with expert renovation services in Surrey and the Lower Mainland. Specializing in custom renovations, basements, and home improvements.',
    url: 'https://god-father.ca',
    siteName: 'GodFather Renovations',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: 'https://god-father.ca/God_processed.jpg',
        width: 500,
        height: 500,
        alt: 'GodFather Renovations Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'GodFather Renovations | Premier Renovation Services in Surrey, BC',
    description: 'Transform your space with expert renovation services in Surrey and the Lower Mainland. Specializing in custom renovations, basements, and home improvements.',
    images: ['https://god-father.ca/God_processed.jpg'],
    creator: '@GodFatherReno',
  },
  other: {
    'msapplication-TileColor': '#000000',
    'theme-color': '#ffffff',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black',
    'format-detection': 'telephone=no',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 