"use client"

import { Calendar, MapPin, Users, Github, Twitter, Mail, ExternalLink, Send, Copy, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const partners = [
  { name: "Ethereum Foundation", href: "https://ethereum.foundation", logo: "/ethereum-foundation-logo.png" },
  { name: "RadicalxChange", href: "https://www.radicalxchange.org", logo: "/radicalxchange-rxc-logo.jpg" },
  { name: "GreenPill Network", href: "https://greenpill.network", logo: "/greenpill-network-logo-green-pill.jpg" },
]

const SignalIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

export default function Component() {
  const multisigAddress = "0xe6FA00D3aB17C619bC6A2CFc24994fB844aBdF96"

  return (
    <div className="min-h-screen bg-paper-main text-surface-ink">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-paper-2 bg-paper-main/80 backdrop-blur-md">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center">
            <Image
              src="/images/decentralpark-logo.png"
              alt="Decentral Park Logo"
              width={450}
              height={102}
              className="h-14 w-auto"
            />
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {[
              ["Partners", "#partners"],
              ["About", "#about"],
              ["Meetings", "#meetings"],
              ["Past Meetups", "/past-meetups"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="font-parkBody text-sm font-medium text-surface-ink/70 transition-colors hover:text-primary-green"
              >
                {label}
              </a>
            ))}
          </div>
          <Button asChild size="sm" className="bg-primary-green text-white hover:bg-green-1">
            <a href="https://lu.ma/user/usr-WzTqp46PMChk8Xl" target="_blank" rel="noopener noreferrer">
              Join
            </a>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-paper-2">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-paper-2 bg-paper-0 px-4 py-1.5 text-caption font-medium uppercase tracking-widest text-primary-green">
              <span className="h-2 w-2 rounded-full bg-primary-green" />
              NYC Progressive Tech Collective
            </span>
            <h1 className="text-h1 text-balance text-surface-ink">Decentral Park</h1>
            <p className="mx-auto mt-6 max-w-2xl text-h5 text-pretty text-surface-ink/70">
              Imagining a post-capitalist world in the heart of NYC.
            </p>
            <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-primary-green px-8 text-white hover:bg-green-1">
                <a href="https://lu.ma/user/usr-WzTqp46PMChk8Xl" target="_blank" rel="noopener noreferrer">
                  Join Our Next Meeting
                </a>
              </Button>
              <Button asChild size="icon" className="h-12 w-12 rounded-full bg-primary-pine text-white hover:bg-pine-1">
                <a href="https://t.me/+guHaqo9XXpk5ZmNk" target="_blank" rel="noopener noreferrer" title="Join Telegram">
                  <Send className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="icon" className="h-12 w-12 rounded-full bg-primary-pine text-white hover:bg-pine-1">
                <a href="https://signal.group/#CjQKILyEmoyg-stu3sGG7Aa5pXE3mFi-xp5SheISn8qTMjUuEhBylsAec35xCR-_vDaRg-9u" target="_blank" rel="noopener noreferrer" title="Join Signal">
                  <SignalIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="icon" className="h-12 w-12 rounded-full bg-primary-sky text-white hover:bg-sky-1">
                <a href="https://www.instagram.com/decentralparknyc/" target="_blank" rel="noopener noreferrer" title="Follow on Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-surface-ink/60">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary-green" />
                <span className="text-body">New York City</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary-green" />
                <span className="text-body">Regular Meetings</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary-green" />
                <span className="text-body">Open Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="bg-paper-0 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-caption font-bold uppercase tracking-widest text-primary-green">Partners</h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-10">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center transition-transform hover:scale-105"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-paper-main p-3 ring-1 ring-paper-2 transition-colors group-hover:ring-primary-green">
                    <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-full w-full object-contain" />
                  </div>
                  <span className="mt-3 text-caption font-medium text-surface-ink/70 group-hover:text-primary-green">
                    {partner.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-paper-main py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-h2 text-balance text-center text-surface-ink">Reimagining Finance for the People</h2>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-paper-2 bg-paper-0 p-8">
                <span className="text-caption font-bold uppercase tracking-widest text-primary-pine">About Us</span>
                <p className="mt-4 text-body text-surface-ink/70">
                  Decentral Park is a NYC-based progressive tech collective convening organizers, professionals, and
                  civic stakeholders to advance cooperative economics and implement civic tools.
                </p>
              </div>
              <div className="rounded-lg border border-paper-2 bg-paper-0 p-8">
                <span className="text-caption font-bold uppercase tracking-widest text-primary-pine">Our Mission</span>
                <p className="mt-4 text-body text-surface-ink/70">
                  We build alternatives to capitalism through community organizing, concrete tools, and radical
                  imagination. Together, we create social and digital infrastructure that prioritizes people and planet
                  over profit.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-lg border border-paper-2 bg-surface-ink p-8">
              <span className="text-caption font-bold uppercase tracking-widest text-green-0">What We Do</span>
              <p className="mt-4 text-body text-paper-1">
                We work across three areas: developing progressive policy frameworks that reframe how technology can
                serve the public good; building tools for grassroots organizations; and fostering community through
                regular events, monthly in-person workshops, and coalition building.
              </p>
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-center text-h5 text-surface-ink/70">
              We work directly with NYC mutual aid and grassroots organizations to build tools that protect sensitive
              information and coordinate action.
            </p>
          </div>
        </div>
      </section>

      {/* Park Activities Section */}
      <section className="bg-paper-0 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <img
              src="/images/park-activities.jpg"
              alt="Let's go to the park! - An illustration showing various activities like de-centering capitalism, basking in the sun, wisdom sharing, financial inclusion, doing nothing, ecosystem repair, giggling, and resting"
              className="mx-auto h-auto max-w-full rounded-lg border border-paper-2"
              style={{ maxHeight: "500px" }}
            />
            <p className="mt-6 text-caption text-surface-ink/50">
              Artwork by{" "}
              <a
                href="https://zora.co/collect/zora:0x7c6035dcf9846074dd5e18af1a36fd88651ba892/1?referrer=0x1eff547e423a315d75f490c6b3a481bec8389648"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary-green underline hover:text-green-1"
              >
                Mia Winther Tamaki
                <ExternalLink className="h-3 w-3" />
              </a>
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-h5 text-surface-ink/70">
              At Decentral Park, we believe in the power of community, rest, and radical imagination. From deep
              conversations to simple moments of joy, we&apos;re creating space for all the ways we can build a better
              world together.
            </p>
          </div>
        </div>
      </section>

      {/* Meetings Section */}
      <section id="meetings" className="bg-paper-main py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-h2 text-surface-ink">Regular Gatherings</h2>
            <p className="mx-auto mt-4 max-w-2xl text-h5 text-surface-ink/70">
              Check out our calendar for upcoming events, workshops, and community calls.
            </p>
            <div className="mx-auto mt-10 w-full max-w-3xl">
              <iframe
                src="https://lu.ma/embed/calendar/cal-LTmdzQUVscVHodG/events"
                className="h-[600px] w-full rounded-lg border border-paper-2 bg-paper-0"
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
                title="Decentral Park events calendar"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-paper-0 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-h2 text-surface-ink">Get Involved</h2>
            <p className="mx-auto mt-4 max-w-2xl text-h5 text-surface-ink/70">
              Join our community of organizers, dreamers, and experimenters working toward a post-capitalist world
              rooted in justice and sustainability.
            </p>
            <div className="mt-10 flex justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-green bg-transparent px-8 text-primary-green hover:bg-paper-1 hover:text-green-1"
              >
                <a href="https://github.com/RonTuretzky/decentralparknyc" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Contribute on GitHub
                </a>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {[
                { href: "https://x.com/decentralparkny", title: "X", icon: <Twitter className="h-5 w-5" /> },
                { href: "https://www.instagram.com/decentralparknyc/", title: "Instagram", icon: <Instagram className="h-5 w-5" /> },
                { href: "https://www.linkedin.com/company/decentral-park/", title: "LinkedIn", icon: <Linkedin className="h-5 w-5" /> },
                { href: "https://github.com/RonTuretzky/decentralparknyc", title: "GitHub", icon: <Github className="h-5 w-5" /> },
                { href: "mailto:nycryptoleft@gmail.com", title: "Email", icon: <Mail className="h-5 w-5" /> },
                { href: "https://t.me/+guHaqo9XXpk5ZmNk", title: "Telegram", icon: <Send className="h-5 w-5" /> },
                { href: "https://signal.group/#CjQKILyEmoyg-stu3sGG7Aa5pXE3mFi-xp5SheISn8qTMjUuEhBylsAec35xCR-_vDaRg-9u", title: "Signal", icon: <SignalIcon className="h-5 w-5" /> },
                {
                  href: "https://farcaster.xyz/decentralpark",
                  title: "Farcaster",
                  icon: (
                    <svg className="h-5 w-5" viewBox="0 0 1000 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M257.778 155.556H742.222V844.445H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.445H257.778V155.556Z" />
                      <path d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.445H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z" />
                      <path d="M693.333 746.667C681.06 746.667 671.111 756.616 671.111 768.889V795.556H666.667C654.394 795.556 644.444 805.505 644.444 817.778V844.445H893.333V817.778C893.333 805.505 883.384 795.556 871.111 795.556H866.667V768.889C866.667 756.616 856.717 746.667 844.444 746.667V351.111H868.889L897.778 253.333H720V746.667H693.333Z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.title}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-paper-2 bg-paper-main text-surface-ink/70 transition-colors hover:border-primary-green hover:text-primary-green"
                >
                  <span className="sr-only">{social.title}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="bg-paper-main py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md rounded-lg border border-paper-2 bg-paper-0 p-8 text-center">
            <h2 className="text-h3 text-surface-ink">Support Our Work</h2>
            <p className="mt-3 text-body text-surface-ink/70">
              Your contributions help us fund community projects and organize events. Donate to our multisig wallet.
            </p>
            <div className="mt-6 flex justify-center">
              <Image
                src="/images/multisig-qr-code.png"
                alt="Multisig Wallet QR Code"
                width={200}
                height={200}
                className="rounded-lg border border-paper-2"
              />
            </div>
            <div className="mt-6">
              <p className="text-caption text-surface-ink/50">Or copy the address:</p>
              <div className="mt-2 flex items-center justify-center rounded-md bg-paper-main p-2">
                <code className="break-all font-parkBody text-xs text-surface-ink/80">{multisigAddress}</code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 shrink-0 text-surface-ink/60 hover:text-primary-green"
                  onClick={() => navigator.clipboard.writeText(multisigAddress)}
                >
                  <span className="sr-only">Copy multisig address</span>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-2 flex items-center justify-center rounded-md bg-paper-main p-2">
                <code className="font-parkBody text-xs text-surface-ink/80">decentralparknyc.eth</code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 shrink-0 text-surface-ink/60 hover:text-primary-green"
                  onClick={() => navigator.clipboard.writeText("decentralparknyc.eth")}
                >
                  <span className="sr-only">Copy ENS name</span>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
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
            NYC-based progressive tech collective convening organizers, professionals, and civic stakeholders to advance
            cooperative economics and implement civic tools.
          </p>
          <p className="text-caption text-paper-1/50">&copy; 2026 Decentral Park Collective. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
