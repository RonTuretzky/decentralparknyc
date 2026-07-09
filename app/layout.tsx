import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const parkDisplay = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-parkDisplay',
  display: 'swap',
})

const parkBody = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-parkBody',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Decentral Park',
  description: 'Decentral Park is a NYC-based progressive tech collective.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${parkDisplay.variable} ${parkBody.variable} bg-paper-main`}>
      <body className="font-parkBody">{children}</body>
    </html>
  )
}
