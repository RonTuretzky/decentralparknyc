"use client"

import { Calendar, Users, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function PastMeetups() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/decentralpark-logo.png"
              alt="Decentral Park Logo"
              width={450}
              height={102}
              className="h-24 w-auto"
            />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-green-700 hover:text-green-900 transition-colors">
              Home
            </Link>
            <Link href="/#about" className="text-green-700 hover:text-green-900 transition-colors">
              About
            </Link>
            <Link href="/#meetings" className="text-green-700 hover:text-green-900 transition-colors">
              Meetings
            </Link>
            <Link href="/#contact" className="text-green-700 hover:text-green-900 transition-colors">
              Contact
            </Link>
            <Link href="/#donate" className="text-green-700 hover:text-green-900 transition-colors">
              Donate
            </Link>
            <Link href="/#partners" className="text-green-700 hover:text-green-900 transition-colors">
              Partners
            </Link>
          </div>
        </nav>
      </header>

      {/* Past Meetups */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Link href="/" className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Past Meetups</h1>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
              A look back at our community gatherings exploring post-capitalist futures.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>February 19, 2026</span>
                    <span className="ml-auto flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      25 registrations
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Participatory Budgeting NYC — DCP x RadicalxChange Workshop</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A hands-on workshop exploring NYC&apos;s quadratic voting pilot in Harlem&apos;s District 9, where
                    residents allocated real funds to community projects. Breakout sessions on what worked, what
                    broke, and how participatory budgeting can scale citywide.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>January 23, 2026</span>
                    <span className="ml-auto flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      33 registrations
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Decentral Park Meetup: Zucity Edition</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Kiba Gateaux presented on Zucity, a community project in Japan&apos;s Nagano prefecture exploring
                    the intersection of collectivism, science, crypto, and underground raves.
                  </p>
                  <div className="text-xs text-green-700 font-medium">
                    Featured: Kiba Gateaux (Zucity)
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>December 10, 2025</span>
                    <span className="ml-auto flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      48 registrations
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Decentralized Tech for a Progressive NYC</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Our largest gathering yet. A strategy session exploring how decentralized tech can support a
                    progressive municipal agenda — housing affordability, public transit, and wealth redistribution.
                  </p>
                  <div className="text-xs text-green-700 font-medium">
                    Featured: Josh Davila (The Blockchain Socialist), Beth McCarthy (web3privacy now)
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>November 19, 2025</span>
                    <span className="ml-auto flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      16 registrations
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Community Ownership with Poa</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Co-hosted with Hudson Headley, founder of Poa — a no-code platform for building
                    democratically-run organizations where voting power is earned through contribution, not capital.
                    Discussion on worker and community ownership, and how web3 can aid collective coordination and action.
                  </p>
                  <div className="text-xs text-green-700 font-medium">
                    Featured: Hudson Headley (Poa)
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>September 17, 2025</span>
                    <span className="ml-auto flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      32 registrations
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Blockchain Radicals Book Club</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Reading and discussing excerpts from Joshua Davila&apos;s &quot;Blockchain Radicals: How
                    Capitalism Ruined Crypto and How to Fix It.&quot; Book copies were given away.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>July 28, 2025</span>
                    <span className="ml-auto flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      31 registrations
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Traditional Dream Factory</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Ani Anca shared how TDF is transforming a former farm in Portugal into a 25-hectare ecovillage
                    using blockchain for token-holder access and decentralized voting. Topics: regenerative living,
                    biochar carbon sequestration, agroforestry, solar energy, and circular resource management.
                  </p>
                  <div className="text-xs text-green-700 font-medium">
                    Featured: Ani Anca (Traditional Dream Factory)
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/images/decentralpark-logo.png"
              alt="Decentral Park Logo"
              width={500}
              height={113}
              className="h-28 w-auto grayscale contrast-200 invert"
            />
          </div>
          <p className="text-green-200 mb-4">Imagining a post-capitalist world in NYC, one experiment at a time.</p>
          <p className="text-sm text-green-300">&copy; 2024 Decentral Park Collective. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
