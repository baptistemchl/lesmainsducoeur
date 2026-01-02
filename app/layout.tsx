import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Les Mains du Cœur - Magnétiseur et Soins Énergétiques',
  description: 'Magnétisme et soins énergétiques à Rennes. Prenez rendez-vous en ligne pour retrouver votre équilibre et votre bien-être.',
  keywords: 'magnétiseur, soins énergétiques, bien-être, Rennes, guérison, équilibre',
  authors: [{ name: 'Les Mains du Cœur' }],
  openGraph: {
    title: 'Les Mains du Cœur - Magnétiseur et Soins Énergétiques',
    description: 'Magnétisme et soins énergétiques pour retrouver votre équilibre',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="font-sans">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
