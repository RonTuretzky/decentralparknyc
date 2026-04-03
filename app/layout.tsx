import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
