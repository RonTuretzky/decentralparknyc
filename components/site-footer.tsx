import Image from "next/image"

export function SiteFooter({ tagline }: { tagline?: string }) {
  return (
    <footer className="bg-surface-ink py-12 text-paper-1">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-5 flex items-center justify-center">
          <Image
            src="/images/decentralpark-logo.png"
            alt="Decentral Park Logo"
            width={500}
            height={113}
            className="h-14 w-auto grayscale invert"
          />
        </div>
        <p className="mx-auto mb-5 max-w-2xl text-body text-paper-1/70">
          {tagline ??
            "NYC-based progressive tech collective convening organizers, professionals, and civic stakeholders to advance cooperative economics and implement civic tools."}
        </p>
        <p className="font-parkDisplay text-caption uppercase tracking-widest text-paper-1/50">
          &copy; 2026 Decentral Park Collective
        </p>
      </div>
    </footer>
  )
}
