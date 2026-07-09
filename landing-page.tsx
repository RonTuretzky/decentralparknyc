"use client"

import { Calendar, MapPin, Users, Github, Twitter, Mail, ExternalLink, Send, Copy, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const SignalIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

const navLinks = [
  { href: "#partners", label: "Partners" },
  { href: "#about", label: "About" },
  { href: "#meetings", label: "Meetings" },
  { href: "#contact", label: "Contact" },
]

const socials = [
  { href: "https://x.com/decentralparkny", label: "X (Twitter)", icon: Twitter },
  { href: "https://www.instagram.com/decentralparknyc/", label: "Instagram", icon: Instagram },
  { href: "https://www.linkedin.com/company/decentral-park/", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/RonTuretzky/decentralparknyc", label: "GitHub", icon: Github },
  { href: "mailto:nycryptoleft@gmail.com", label: "Email", icon: Mail },
  { href: "https://t.me/+guHaqo9XXpk5ZmNk", label: "Telegram", icon: Send },
  {
    href: "https://signal.group/#CjQKILyEmoyg-stu3sGG7Aa5pXE3mFi-xp5SheISn8qTMjUuEhBylsAec35xCR-_vDaRg-9u",
    label: "Signal",
    icon: SignalIcon,
  },
]

const partners = [
  { href: "https://ethereum.foundation", name: "Ethereum Foundation", logo: "/ethereum-foundation-logo.png" },
  { href: "https://www.radicalxchange.org", name: "RadicalxChange", logo: "/radicalxchange-rxc-logo.jpg" },
  { href: "https://greenpill.network", name: "GreenPill Network", logo: "/greenpill-network-logo-green-pill.jpg" },
]

export default function Component() {
  const multisigAddress = "0xe6FA00D3aB17C619bC6A2CFc24994fB844aBdF96"

  return (
    <div className="min-h-screen bg-paper-main text-surface-ink">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-surface-ink/10 bg-paper-main/90 backdrop-blur">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center">
            <Image
              src="/images/decentralpark-logo.png"
              alt="Decentral Park"
              width={360}
              height={82}
              className="h-14 w-auto md:h-16"
              priority
            />
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-parkDisplay text-sm font-medium uppercase tracking-wide text-surface-ink/70 transition-colors hover:text-primary-green"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Button
            asChild
            className="hidden rounded-md bg-primary-green font-parkDisplay uppercase tracking-wide text-white hover:bg-green-1 md:inline-flex"
          >
            <a href="https://lu.ma/user/usr-WzTqp46PMChk8Xl" target="_blank" rel="noopener noreferrer">
              Join a Meeting
            </a>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-green/30 bg-paper-1 px-4 py-1.5 font-parkDisplay text-xs font-medium uppercase tracking-widest text-green-2">
              <MapPin className="h-3.5 w-3.5" />
              Based in New York City
            </span>
            <h1 className="text-h1 text-surface-ink text-balance">Decentral Park</h1>
            <p className="mt-3 font-parkBody text-base font-bold italic text-surface-ink md:text-lg">*not the VCs</p>
            <p className="mx-auto mt-6 max-w-2xl font-parkBody text-lg leading-relaxed text-surface-ink/70 md:text-xl">
              Imagining a post-capitalist world in the heart of NYC.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-md bg-primary-green px-8 font-parkDisplay uppercase tracking-wide text-white hover:bg-green-1"
              >
                <a href="https://lu.ma/user/usr-WzTqp46PMChk8Xl" target="_blank" rel="noopener noreferrer">
                  Join Our Next Meeting
                </a>
              </Button>
              <Button
                asChild
                size="icon"
                className="h-11 w-11 rounded-md bg-surface-ink text-white hover:bg-primary-green"
              >
                <a href="https://t.me/+guHaqo9XXpk5ZmNk" target="_blank" rel="noopener noreferrer" title="Join Telegram">
                  <Send className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="icon"
                className="h-11 w-11 rounded-md bg-surface-ink text-white hover:bg-primary-green"
              >
                <a
                  href="https://signal.group/#CjQKILyEmoyg-stu3sGG7Aa5pXE3mFi-xp5SheISn8qTMjUuEhBylsAec35xCR-_vDaRg-9u"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Join Signal"
                >
                  <SignalIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="icon"
                className="h-11 w-11 rounded-md bg-surface-ink text-white hover:bg-primary-green"
              >
                <a
                  href="https://www.instagram.com/decentralparknyc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-parkDisplay text-sm uppercase tracking-wide text-surface-ink/60">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-green" />
                <span>New York City</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary-green" />
                <span>Regular Meetings</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary-green" />
                <span>Open Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="border-y border-surface-ink/10 bg-paper-0 py-14">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center font-parkDisplay text-sm font-medium uppercase tracking-[0.3em] text-surface-ink/50">
            Partners
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {partners.map((partner) => (
              <a
                key={partner.href}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-surface-ink/10 bg-paper-main p-3 transition-colors group-hover:border-primary-green/40">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="font-parkDisplay text-xs font-medium uppercase tracking-wide text-surface-ink/60 transition-colors group-hover:text-primary-green">
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-h2 text-surface-ink text-balance">
              Reimagining finance for the people
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-surface-ink/10 bg-paper-0 p-8">
                <span className="font-parkDisplay text-xs font-medium uppercase tracking-widest text-primary-green">
                  01 — Our Mission
                </span>
                <p className="mt-4 font-parkBody leading-relaxed text-surface-ink/75">
                  We explore alternatives to capitalism through community organizing, cooperative economics, and radical
                  imagination. Together, we envision and build systems that prioritize people and planet over profit.
                </p>
              </div>
              <div className="rounded-2xl border border-surface-ink/10 bg-paper-0 p-8">
                <span className="font-parkDisplay text-xs font-medium uppercase tracking-widest text-primary-green">
                  02 — What We Do
                </span>
                <p className="mt-4 font-parkBody leading-relaxed text-surface-ink/75">
                  Through regular gatherings, we discuss post-capitalist theory, organize mutual aid initiatives, and
                  experiment with cooperative models that prioritize community ownership over corporate profit.
                </p>
              </div>
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-center font-parkBody text-lg leading-relaxed text-surface-ink/70">
              From worker cooperatives to community land trusts, we&apos;re building the infrastructure for a more
              democratic and sustainable economy—one experiment at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Park Activities Section */}
      <section className="bg-paper-1 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <img
              src="/images/park-activities.jpg"
              alt="Let's go to the park! - An illustration showing activities like de-centering capitalism, basking in the sun, wisdom sharing, financial inclusion, doing nothing, ecosystem repair, giggling, and resting"
              className="mx-auto h-auto max-w-full rounded-2xl"
              style={{ maxHeight: "500px" }}
            />
            <p className="mt-4 font-parkBody text-sm text-surface-ink/50">
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
            <p className="mx-auto mt-8 max-w-2xl font-parkBody text-lg leading-relaxed text-surface-ink/70">
              At Decentral Park, we believe in the power of community, rest, and radical imagination. From deep
              conversations to simple moments of joy, we&apos;re creating space for all the ways we can build a better
              world together.
            </p>
          </div>
        </div>
      </section>

      {/* Meetings Section */}
      <section id="meetings" className="bg-surface-ink py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-h2 text-paper-main text-balance">Regular gatherings</h2>
            <p className="mx-auto mt-6 max-w-2xl font-parkBody text-lg leading-relaxed text-paper-main/70">
              Check out our calendar for upcoming events, workshops, and community calls.
            </p>
            <div className="mx-auto mt-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white">
              <iframe
                title="Decentral Park events calendar"
                src="https://lu.ma/embed/calendar/cal-LTmdzQUVscVHodG/events"
                className="h-[600px] w-full"
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-h2 text-surface-ink text-balance">Get involved</h2>
            <p className="mx-auto mt-6 max-w-2xl font-parkBody text-lg leading-relaxed text-surface-ink/70">
              Join our community of organizers, dreamers, and experimenters working toward a post-capitalist world
              rooted in justice and sustainability.
            </p>
            <div className="mt-10 flex justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-md border-2 border-primary-green bg-transparent px-8 font-parkDisplay uppercase tracking-wide text-primary-green hover:bg-primary-green hover:text-white"
              >
                <a href="https://github.com/RonTuretzky/decentralparknyc" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Contribute on GitHub
                </a>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    title={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-md border border-surface-ink/15 text-surface-ink/70 transition-colors hover:border-primary-green hover:bg-primary-green hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="bg-paper-1 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md rounded-2xl border border-surface-ink/10 bg-paper-0 p-8 text-center">
            <h2 className="text-h3 text-surface-ink">Support our work</h2>
            <p className="mt-4 font-parkBody leading-relaxed text-surface-ink/70">
              Your contributions help us fund community projects and organize events. Donate to our multisig wallet.
            </p>
            <div className="mt-6 flex justify-center">
              <Image
                src="/images/multisig-qr-code.png"
                alt="Multisig Wallet QR Code"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </div>
            <p className="mt-6 font-parkDisplay text-xs uppercase tracking-widest text-surface-ink/50">
              Or copy the address
            </p>
            <div className="mt-3 flex items-center justify-between gap-2 rounded-md bg-paper-main px-3 py-2">
              <code className="break-all font-parkBody text-sm text-surface-ink/80">{multisigAddress}</code>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 text-surface-ink/60 hover:text-primary-green"
                onClick={() => navigator.clipboard.writeText(multisigAddress)}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy wallet address</span>
              </Button>
            </div>
            <div className="mt-2 flex items-center justify-between gap-2 rounded-md bg-paper-main px-3 py-2">
              <code className="font-parkBody text-sm text-surface-ink/80">decentralparknyc.eth</code>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 text-surface-ink/60 hover:text-primary-green"
                onClick={() => navigator.clipboard.writeText("decentralparknyc.eth")}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy ENS name</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-ink py-12 text-paper-main">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 text-center">
            <Image
              src="/images/decentralpark-logo.png"
              alt="Decentral Park"
              width={420}
              height={95}
              className="h-20 w-auto brightness-0 invert"
            />
            <p className="max-w-xl font-parkBody text-paper-main/70">
              Imagining a post-capitalist world in NYC, one experiment at a time.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    title={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-paper-main/70 transition-colors hover:border-green-0 hover:text-green-0"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                )
              })}
            </div>
            <p className="font-parkBody text-sm text-paper-main/40">
              © {new Date().getFullYear()} Decentral Park Collective. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
