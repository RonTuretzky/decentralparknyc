"use client"

import { Calendar, Users, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const meetups = [
  {
    date: "February 19, 2026",
    registrations: 25,
    title: "Participatory Budgeting NYC — DCP x RadicalxChange Workshop",
    description:
      "A hands-on workshop exploring NYC's quadratic voting pilot in Harlem's District 9, where residents allocated real funds to community projects. Breakout sessions on what worked, what broke, and how participatory budgeting can scale citywide.",
  },
  {
    date: "January 23, 2026",
    registrations: 33,
    title: "Decentral Park Meetup: Zucity Edition",
    description:
      "Kiba Gateaux presented on Zucity, a community project in Japan's Nagano prefecture exploring the intersection of collectivism, science, crypto, and underground raves.",
    featured: "Kiba Gateaux (Zucity)",
  },
  {
    date: "December 10, 2025",
    registrations: 48,
    title: "Decentralized Tech for a Progressive NYC",
    description:
      "Our largest gathering yet. A strategy session exploring how decentralized tech can support a progressive municipal agenda — housing affordability, public transit, and wealth redistribution.",
    featured: "Josh Davila (The Blockchain Socialist), Beth McCarthy (web3privacy now)",
  },
  {
    date: "November 19, 2025",
    registrations: 16,
    title: "Community Ownership with Poa",
    description:
      "Co-hosted with Hudson Headley, founder of Poa — a no-code platform for building democratically-run organizations where voting power is earned through contribution, not capital. Discussion on worker and community ownership, and how web3 can aid collective coordination and action.",
    featured: "Hudson Headley (Poa)",
  },
  {
    date: "September 17, 2025",
    registrations: 32,
    title: "Blockchain Radicals Book Club",
    description:
      'Reading and discussing excerpts from Joshua Davila\'s "Blockchain Radicals: How Capitalism Ruined Crypto and How to Fix It." Book copies were given away.',
  },
  {
    date: "July 28, 2025",
    registrations: 31,
    title: "Traditional Dream Factory",
    description:
      "Ani Anca shared how TDF is transforming a former farm in Portugal into a 25-hectare ecovillage using blockchain for token-holder access and decentralized voting. Topics: regenerative living, biochar carbon sequestration, agroforestry, solar energy, and circular resource management.",
    featured: "Ani Anca (Traditional Dream Factory)",
  },
]

export default function PastMeetups() {
  return (
    <div className="min-h-screen bg-paper-main text-surface-ink">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-paper-2 bg-paper-main/80 backdrop-blur-md">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/decentralpark-logo.png"
              alt="Decentral Park Logo"
              width={450}
              height={102}
              className="h-14 w-auto"
            />
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {[
              ["Home", "/"],
              ["About", "/#about"],
              ["Meetings", "/#meetings"],
              ["Contact", "/#contact"],
              ["Donate", "/#donate"],
              ["Partners", "/#partners"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="font-parkBody text-sm font-medium text-surface-ink/70 transition-colors hover:text-primary-green"
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Past Meetups */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-body font-medium text-surface-ink/70 transition-colors hover:text-primary-green"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-h2 text-center text-surface-ink">Past Meetups</h1>
            <p className="mx-auto mb-12 mt-4 max-w-2xl text-center text-h5 text-surface-ink/70">
              A look back at our community gatherings exploring post-capitalist futures.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {meetups.map((meetup) => (
                <article
                  key={meetup.title}
                  className="rounded-lg border border-paper-2 bg-paper-0 p-6 transition-colors hover:border-primary-green"
                >
                  <div className="mb-3 flex items-center gap-2 text-caption text-primary-green">
                    <Calendar className="h-4 w-4" />
                    <span>{meetup.date}</span>
                    <span className="ml-auto flex items-center gap-1 text-surface-ink/60">
                      <Users className="h-4 w-4" />
                      {meetup.registrations} registrations
                    </span>
                  </div>
                  <h3 className="mb-3 text-h4 text-surface-ink">{meetup.title}</h3>
                  <p className="text-body text-surface-ink/70">{meetup.description}</p>
                  {meetup.featured && (
                    <p className="mt-3 text-caption font-medium text-primary-pine">Featured: {meetup.featured}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-ink py-10 text-paper-1">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 flex items-center justify-center">
            <Image
              src="/images/decentralpark-logo.png"
              alt="Decentral Park Logo"
              width={500}
              height={113}
              className="h-16 w-auto grayscale invert"
            />
          </div>
          <p className="mx-auto mb-4 max-w-2xl text-body text-paper-1/70">
            Imagining a post-capitalist world in NYC, one experiment at a time.
          </p>
          <p className="text-caption text-paper-1/50">&copy; 2026 Decentral Park Collective. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
