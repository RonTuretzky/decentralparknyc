"use client"

import { Calendar, MapPin, Users, Github, Twitter, Mail, ExternalLink, Send, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Component() {
  const multisigAddress = "0xe6FA00D3aB17C619bC6A2CFc24994fB844aBdF96" // Placeholder address

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Image
              src="/images/decentralpark-logo.png"
              alt="Decentral Park Logo"
              width={450}
              height={102}
              className="h-24 w-auto"
            />
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#partners" className="text-green-700 hover:text-green-900 transition-colors">
              Partners
            </a>
            <a href="#about" className="text-green-700 hover:text-green-900 transition-colors">
              About
            </a>
            <a href="#meetings" className="text-green-700 hover:text-green-900 transition-colors">
              Meetings
            </a>
            <a href="#contact" className="text-green-700 hover:text-green-900 transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-1">Decentral Park</h1>
          <p className="text-base italic text-black font-bold mb-6">*not the VCs</p>
          <p className="text-xl md:text-2xl text-green-700 mb-8 leading-relaxed">
            Imagining a post-capitalist world in the heart of NYC
          </p>
          <div className="flex justify-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3" asChild>
              <a href="https://lu.ma/user/usr-WzTqp46PMChk8Xl" target="_blank" rel="noopener noreferrer">
                Join Our Next Meeting
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-6 text-green-600">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>New York City</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Regular Meetings</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Open Community</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Partners</h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <a
                href="https://ethereum.foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center transition-transform hover:scale-105"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-green-50 rounded-full p-2 group-hover:bg-green-100 transition-colors">
                  <img
                    src="/ethereum-foundation-logo.png"
                    alt="Ethereum Foundation"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-2 text-sm text-green-700 font-medium group-hover:text-green-900">
                  Ethereum Foundation
                </span>
              </a>
              <a
                href="https://www.radicalxchange.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center transition-transform hover:scale-105"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-green-50 rounded-full p-2 group-hover:bg-green-100 transition-colors">
                  <img
                    src="/radicalxchange-rxc-logo.jpg"
                    alt="RadicalxChange"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-2 text-sm text-green-700 font-medium group-hover:text-green-900">
                  RadicalxChange
                </span>
              </a>
              <a
                href="https://greenpill.network"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center transition-transform hover:scale-105"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-green-50 rounded-full p-2 group-hover:bg-green-100 transition-colors">
                  <img
                    src="/greenpill-network-logo-green-pill.jpg"
                    alt="GreenPill Network"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-2 text-sm text-green-700 font-medium group-hover:text-green-900">
                  GreenPill Network
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Reimagining Finance for the People
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We explore alternatives to capitalism through community organizing, cooperative economics, and
                    radical imagination. Together, we envision and build systems that prioritize people and planet over
                    profit.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">What We Do</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Through monthly gatherings, we discuss post-capitalist theory, organize mutual aid initiatives, and
                    experiment with cooperative models that prioritize community ownership over corporate profit.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                From worker cooperatives to community land trusts, we're building the infrastructure for a more
                democratic and sustainable economy—one experiment at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Park Activities Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <img
                src="/images/park-activities.jpg"
                alt="Let's go to the park! - An illustration showing various activities like de-centering capitalism, basking in the sun, wisdom sharing, financial inclusion, doing nothing, ecosystem repair, giggling, and resting"
                className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
                style={{ maxHeight: "500px" }}
              />
            </div>
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-2">
                Artwork by{" "}
                <a
                  href="https://zora.co/collect/zora:0x7c6035dcf9846074dd5e18af1a36fd88651ba892/1?referrer=0x1eff547e423a315d75f490c6b3a481bec8389648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 underline inline-flex items-center gap-1"
                >
                  Mia Winther Tamaki
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              At Decentral Park, we believe in the power of community, rest, and radical imagination. From deep
              conversations to simple moments of joy, we're creating space for all the ways we can build a better world
              together.
            </p>
          </div>
        </div>
      </section>

      {/* Meetings Section */}
      <section id="meetings" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Regular Gatherings</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Check out our calendar for upcoming events, workshops, and community calls.
            </p>
            <div className="w-full max-w-3xl mx-auto">
              <iframe
                src="https://lu.ma/embed/calendar/cal-LTmdzQUVscVHodG/events"
                className="w-full h-[600px] border border-gray-300/50 rounded-lg"
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Get Involved</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our community of organizers, dreamers, and experimenters working toward a post-capitalist world
              rooted in justice and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3" asChild>
                <a href="https://t.me/+guHaqo9XXpk5ZmNk" target="_blank" rel="noopener noreferrer">
                  <Send className="w-5 h-5 mr-2" />
                  Join Our Telegram
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 bg-transparent"
                asChild
              >
                <a href="https://github.com/RonTuretzky/decentralparknyc" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  Contribute on GitHub
                </a>
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="https://x.com/decentralparkny"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/RonTuretzky/decentralparknyc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:nycryptoleft@gmail.com" className="text-green-600 hover:text-green-800 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Support Our Work</h2>
            <p className="text-gray-600 mb-6">
              Your contributions help us fund community projects and organize events. Donate to our multisig wallet.
            </p>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/multisig-qr-code.png"
                alt="Multisig Wallet QR Code"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Or copy the address:</p>
              <div className="flex items-center justify-center bg-gray-100 p-2 rounded-md">
                <code className="text-sm text-gray-700 break-all">{multisigAddress}</code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2"
                  onClick={() => navigator.clipboard.writeText(multisigAddress)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center justify-center bg-gray-100 p-2 rounded-md mt-2">
                <code className="text-sm text-gray-700">decentralparknyc.eth</code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2"
                  onClick={() => navigator.clipboard.writeText("decentralparknyc.eth")}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
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
          <p className="text-sm text-green-300">© 2024 Decentral Park Collective. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
