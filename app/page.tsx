import Component from "../landing-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Decentral Park - Imagining a Post-Capitalist World in NYC",
  description:
    "A collective imagining a post-capitalist world in the heart of NYC. Join our monthly gatherings to explore alternatives to capitalism through community organizing and cooperative economics.",
  keywords: [
    "post-capitalism",
    "NYC",
    "collective",
    "cooperative economics",
    "community organizing",
    "mutual aid",
    "solidarity economy",
  ],
  authors: [{ name: "Decentral Park Collective" }],
  creator: "Decentral Park Collective",
  publisher: "Decentral Park Collective",
  openGraph: {
    title: "Decentral Park - Imagining a Post-Capitalist World in NYC",
    description:
      "A collective imagining a post-capitalist world in the heart of NYC. Join our monthly gatherings to explore alternatives to capitalism through community organizing and cooperative economics.",
    url: "https://decentralpark.org",
    siteName: "Decentral Park",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Decentral Park - Post-Capitalist Collective in NYC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decentral Park - Imagining a Post-Capitalist World in NYC",
    description: "A collective imagining a post-capitalist world in the heart of NYC. Join our monthly gatherings.",
    images: ["/og-image.jpg"],
    creator: "@decentralpark",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function Page() {
  return <Component />
}
