"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const NAV_LINKS: [string, string][] = [
  ["Partners", "/#partners"],
  ["About", "/#about"],
  ["Meetings", "/#meetings"],
  ["Past Meetups", "/past-meetups"],
  ["Contact", "/#contact"],
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-paper-2 bg-paper-main/85 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Decentral Park home">
          <Image
            src="/images/decentralpark-logo.png"
            alt="Decentral Park Logo"
            width={450}
            height={102}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="group relative px-3 py-2 font-parkDisplay text-xs font-medium uppercase tracking-widest text-surface-ink/70 transition-colors hover:text-primary-green"
            >
              {label}
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-primary-green transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden rounded-full bg-primary-green px-5 font-parkDisplay text-xs font-semibold uppercase tracking-widest text-white hover:bg-green-1 sm:inline-flex"
          >
            <a href="https://lu.ma/user/usr-WzTqp46PMChk8Xl" target="_blank" rel="noopener noreferrer">
              Join
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-surface-ink transition-colors hover:bg-paper-2 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-paper-2 bg-paper-main md:hidden">
          <div className="container mx-auto flex flex-col px-4 py-2">
            {NAV_LINKS.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-paper-2 py-3 font-parkDisplay text-sm font-medium uppercase tracking-widest text-surface-ink/80 transition-colors hover:text-primary-green"
              >
                {label}
              </Link>
            ))}
            <Button
              asChild
              className="my-3 rounded-full bg-primary-green font-parkDisplay text-xs font-semibold uppercase tracking-widest text-white hover:bg-green-1"
            >
              <a href="https://lu.ma/user/usr-WzTqp46PMChk8Xl" target="_blank" rel="noopener noreferrer">
                Join Our Next Meeting
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
