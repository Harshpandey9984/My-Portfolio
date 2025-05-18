import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Harsh Pandey - Full Stack Developer',
  description: 'Full Stack Developer specializing in UI design and design systems',
  openGraph: {
    title: 'Harsh Pandey - Full Stack Developer',
    description: 'Full Stack Developer specializing in UI design and design systems',
    url: 'http://localhost:3000',
    siteName: 'Harsh Pandey Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Harsh Pandey',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
} 