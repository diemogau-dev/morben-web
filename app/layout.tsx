import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { poppins, inter, mono } from './fonts'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      'Morben — Automatizamos operaciones sobre los sistemas que ya tenés',
    template: '%s — Morben',
  },
  description: site.description,
  openGraph: {
    type: 'website',
    locale: 'es_PY',
    siteName: site.name,
    url: site.url,
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={cn(poppins.variable, inter.variable, mono.variable)}
    >
      <body className="bg-carbon text-offwhite antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-orange focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
