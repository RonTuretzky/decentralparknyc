"use client"

import { Calendar, Users, MapPin, ArrowLeft, Star } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const meetups = [
  {
    date: "June 24, 2026",
    day: "Wed",
    registrations: 24,
    title: "Novel Digital Affordances in Labor Rights and Organizing",
    location: "29 Nassau Ave, Brooklyn, NY",
    description:
      "What if we made work more humane instead of less? An evening imagining worker-first technology: aligned monitoring without surveillance, verifiable anonymous whistleblowing, hierarchy mitigation, handling of mental load and invisible labor, augmented conflict resolution, and real sovereignty over our own labor and outputs. Brought curiosity and skepticism in equal measure.",
  },
  {
    date: "April 14, 2026",
    day: "Tue",
    registrations: 23,
    title: "Ron's Crash Course in Post-Capitalist / Imperialist Crypto",
    location: "Kings County, New York",
    description:
      "Ron Turetzky led a crash course on how stateless economic mechanisms are already resilient to the interests of empires — covering p2p sanctions, post-capitalist vending machines, and inter-judiciary transient utopian socialism. Followed the Chatham House Rule.",
    featured: "Ron Turetzky",
  },
  {
    date: "February 19, 2026",
    day: "Thu",
    registrations: 25,
    title: "Participatory Budgeting NYC — DCP x RadicalxChange Workshop",
    location: "New York, NY",
    description:
      "A hands-on workshop exploring NYC's quadratic voting pilot in Harlem's District 9, where residents allocated real funds to community projects. Breakout sessions on what worked, what broke, and how participatory budgeting can scale citywide.",
  },
  {
    date: "January 23, 2026",
    day: "Fri",
    registrations: 33,
    title: "Decentral Park Meetup: Zucity Edition",
    location: "New York, NY",
    description:
      "Kiba Gateaux presented on Zucity, a community project in Japan's Nagano prefecture exploring the intersection of collectivism, science, crypto, and underground raves.",
    featured: "Kiba Gateaux (Zucity)",
  },
  {
    date: "December 10, 2025",
    day: "Wed",
    registrations: 48,
    title: "Decentralized Tech for a Progressive NYC",
    location: "New York, NY",
    description:
      "Our largest gathering yet. A strategy session exploring how decentralized tech can support a progressive municipal agenda — housing affordability, public transit, and wealth redistribution.",
    featured: "Josh Davila (The Blockchain Socialist), Beth McCarthy (web3privacy now)",
  },
  {
    date: "November 19, 2025",
    day: "Wed",
    registrations: 16,
    title: "Community Ownership with Poa",
    location: "New York, NY",
    description:
      "Co-hosted with Hudson Headley, founder of Poa — a no-code platform for building democratically-run organizations where voting power is earned through contribution, not capital. Discussion on worker and community ownership, and how web3 can aid collective coordination and action.",
    featured: "Hudson Headley (Poa)",
  },
  {
    date: "September 17, 2025",
    day: "Wed",
    registrations: 32,
    title: "Blockchain Radicals Book Club",
    location: "New York, NY",
    description:
      'Reading and discussing excerpts from Joshua Davila\'s "Blockchain Radicals: How Capitalism Ruined Crypto and How to Fix It." Book copies were given away.',
  },
  {
    date: "July 28, 2025",
    day: "Mon",
    registrations: 31,
    title: "Traditional Dream Factory",
    location: "New York, NY",
    description:
      "Ani Anca shared how TDF is transforming a former farm in Portugal into a 25-hectare ecovillage using blockchain for token-holder access and decentralized voting. Topics: regenerative living, biochar carbon sequestration, agroforestry, solar energy, and circular resource management.",
    featured: "Ani Anca (Traditional Dream Factory)",
  },
]

const totalRegistrations = meetups.reduce((sum, m) => sum + m.registrations, 0)

export default function PastMeetups() {
  return (
    <div className="min-h-screen bg-paper-main text-surface-ink">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-paper-2 bg-paper-0">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 font-parkDisplay text-xs font-medium uppercase tracking-widest text-surface-ink/60 transition-colors hover:text-primary-green"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <span className="font-parkDisplay text-caption font-bold uppercase tracking-[0.2em] text-primary-green">
              The Archive
            </span>
            <h1 className="mt-3 text-h1 text-balance text-surface-ink">Past Meetups</h1>
            <p className="mt-5 max-w-2xl text-h5 text-pretty text-surface-ink/70">
              A look back at our community gatherings exploring post-capitalist futures.
            </p>
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="font-parkDisplay text-h2 text-primary-green">{meetups.length}</p>
                <p className="font-parkDisplay text-caption uppercase tracking-widest text-surface-ink/60">
                  Gatherings
                </p>
              </div>
              <div>
                <p className="font-parkDisplay text-h2 text-primary-green">{totalRegistrations}</p>
                <p className="font-parkDisplay text-caption uppercase tracking-widest text-surface-ink/60">
                  Registrations
                </p>
              </div>
              <div>
                <p className="font-parkDisplay text-h2 text-primary-green">NYC</p>
                <p className="font-parkDisplay text-caption uppercase tracking-widest text-surface-ink/60">
                  Home Base
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline list */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-6">
              {meetups.map((meetup, index) => {
                const [month, dayNum] = meetup.date.replace(",", "").split(" ")
                return (
                  <article
                    key={meetup.title}
                    className="group flex flex-col gap-6 rounded-2xl border border-paper-2 bg-paper-0 p-6 transition-all hover:border-primary-green hover:shadow-lg sm:flex-row sm:p-8"
                  >
                    {/* Date block */}
                    <div className="flex shrink-0 flex-row items-center gap-4 sm:flex-col sm:items-center sm:gap-1">
                      <div className="flex h-20 w-20 flex-col items-center justify-center rounded-xl bg-surface-ink text-paper-0 transition-colors group-hover:bg-primary-green">
                        <span className="font-parkDisplay text-caption font-bold uppercase tracking-widest text-green-0 group-hover:text-white">
                          {month.slice(0, 3)}
                        </span>
                        <span className="font-parkDisplay text-h3 leading-none text-paper-0">{dayNum}</span>
                      </div>
                      <span className="font-parkDisplay text-caption uppercase tracking-widest text-surface-ink/50">
                        {meetup.day} · {meetup.date.split(" ").pop()}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {index < 2 && (
                        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-paper-1 px-3 py-1 font-parkDisplay text-[0.65rem] font-bold uppercase tracking-widest text-primary-green">
                          <Star className="h-3 w-3 fill-current" />
                          Latest
                        </span>
                      )}
                      <h3 className="text-h4 text-balance text-surface-ink">{meetup.title}</h3>
                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-caption text-surface-ink/60">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-primary-green" />
                          {meetup.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-primary-green" />
                          {meetup.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="h-4 w-4 text-primary-green" />
                          {meetup.registrations} registered
                        </span>
                      </div>
                      <p className="mt-4 text-body text-surface-ink/70">{meetup.description}</p>
                      {meetup.featured && (
                        <p className="mt-4 font-parkDisplay text-caption font-medium uppercase tracking-wider text-primary-pine">
                          Featured — {meetup.featured}
                        </p>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>

            {/* CTA */}
            <div className="mt-14 rounded-2xl border border-paper-2 bg-surface-ink p-10 text-center">
              <h2 className="text-h3 text-paper-0">Don&apos;t miss the next one</h2>
              <p className="mx-auto mt-3 max-w-xl text-body text-paper-1/80">
                Join our community of organizers, dreamers, and experimenters building toward a post-capitalist world.
              </p>
              <a
                href="https://lu.ma/user/usr-WzTqp46PMChk8Xl"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-primary-green px-8 py-3 font-parkDisplay text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-green-1"
              >
                Join Our Next Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter tagline="Imagining a post-capitalist world in NYC, one experiment at a time." />
    </div>
  )
}
