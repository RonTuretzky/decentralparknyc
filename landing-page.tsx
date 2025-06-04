import { Calendar, MapPin, Users, Github, Twitter, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          {/* Replace the header logo section */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 relative">
                  {/* Tree/Network icon representing growth and connection */}
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
                    <path
                      d="M12 2L8 6h3v4H8l-2 2h3v4H6l-2 2h4v4h4v-4h4l-2-2h-3v-4h3l-2-2h-3V6h3l-4-4z"
                      fill="currentColor"
                      opacity="0.9"
                    />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="8" cy="8" r="1" fill="currentColor" opacity="0.7" />
                    <circle cx="16" cy="8" r="1" fill="currentColor" opacity="0.7" />
                    <circle cx="8" cy="16" r="1" fill="currentColor" opacity="0.7" />
                    <circle cx="16" cy="16" r="1" fill="currentColor" opacity="0.7" />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-green-800 leading-tight">Decentral Park</span>
              <span className="text-xs text-green-600 font-medium">NYC Collective</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-6">
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
              <span>Monthly Meetings</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Open Community</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Monthly Gatherings</h2>
            <Card className="border-green-200 mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                  <div className="text-left mb-4 md:mb-0">
                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Next Meeting</h3>
                    <p className="text-gray-600">First Saturday of every month</p>
                    <p className="text-gray-600">7:00 PM - 9:00 PM</p>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600 mb-2">Location varies</p>
                    <p className="text-gray-600">Brooklyn & Manhattan</p>
                    <p className="text-sm text-green-600 font-medium">RSVP for exact location</p>
                  </div>
                </div>
                <div className="border-t border-green-200 pt-6">
                  <h4 className="font-semibold text-gray-800 mb-3">What to Expect:</h4>
                  <ul className="text-left text-gray-600 space-y-2 max-w-2xl mx-auto">
                    <li>• Discussions on post-capitalist theory and practice</li>
                    <li>• Workshops on cooperative organizing and solidarity economy</li>
                    <li>• Community building and mutual aid planning</li>
                    <li>• Guest speakers exploring alternatives to capitalism</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3" asChild>
              <a href="https://lu.ma/user/usr-WzTqp46PMChk8Xl" target="_blank" rel="noopener noreferrer">
                RSVP for Next Meeting
              </a>
            </Button>
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
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                <Mail className="w-5 h-5 mr-2" />
                Join Our Mailing List
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
                asChild
              >
                <a href="https://github.com/RonTuretzky/decentralparknyc" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  Contribute on GitHub
                </a>
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-green-600 hover:text-green-800 transition-colors">
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
              <a href="#" className="text-green-600 hover:text-green-800 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          {/* Replace the footer logo section */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-white to-green-50 rounded-lg flex items-center justify-center shadow-lg">
                <div className="w-5 h-5 relative">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-green-800">
                    <path
                      d="M12 2L8 6h3v4H8l-2 2h3v4H6l-2 2h4v4h4v-4h4l-2-2h-3v-4h3l-2-2h-3V6h3l-4-4z"
                      fill="currentColor"
                      opacity="0.9"
                    />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="8" cy="8" r="1" fill="currentColor" opacity="0.7" />
                    <circle cx="16" cy="8" r="1" fill="currentColor" opacity="0.7" />
                    <circle cx="8" cy="16" r="1" fill="currentColor" opacity="0.7" />
                    <circle cx="16" cy="16" r="1" fill="currentColor" opacity="0.7" />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-yellow-400 rounded-full border border-green-800 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-white">Decentral Park</span>
              <span className="text-xs text-green-200">NYC Collective</span>
            </div>
          </div>
          <p className="text-green-200 mb-4">Imagining a post-capitalist world in NYC, one experiment at a time.</p>
          <p className="text-sm text-green-300">© 2024 Decentral Park Collective. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
