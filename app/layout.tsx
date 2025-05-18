import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Providers } from '../components/Providers'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AnimatedBackground from '../components/AnimatedBackground'
import BackgroundAnimation from '../components/BackgroundAnimation'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export { metadata } from './metadata'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased relative min-h-screen`}>
        <AnimatedBackground />
        <BackgroundAnimation />
        <Providers>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
} 