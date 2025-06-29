import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Target, Building2, Zap, Leaf, Atom } from "lucide-react"

export default function BlazingTeamHome() {
  const subsidiaries = [
    {
      name: "iEC",
      description: "Estate & Accommodations Platform",
      icon: Building2,
      color: "bg-blue-600",
      href: "/iec",
      logo: "/iec-logo.png",
    },
    {
      name: "Getrolv",
      description: "Social Media & Payment Platform",
      icon: Target,
      color: "bg-red-600",
      href: "/getrolv",
      logo: "/getrolv-logo.png",
    },
    {
      name: "Agro Blaze",
      description: "Agricultural Innovation",
      icon: Leaf,
      color: "bg-green-600",
      href: "#",
      logo: null,
    },
    {
      name: "Quantum Blaze",
      description: "Quantum Technology Solutions",
      icon: Atom,
      color: "bg-purple-600",
      href: "#",
      logo: null,
    },
    {
      name: "Itch",
      description: "Creative Solutions",
      icon: Zap,
      color: "bg-yellow-600",
      href: "#",
      logo: null,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/blazing-team-logo.png"
              alt="Blazing Team Logo"
              width={400}
              height={300}
              className="mx-auto mb-8"
              priority
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Meet the Blazing Team
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              The trailblazing pioneers behind Getrolv, iEC - a revolutionary innovation that's setting the stage
              ablaze! With their fearless approach and groundbreaking expertise, this team is redefining the boundaries
              of what's possible. Get ready to witness the future unfold with Getrolv, iEC, led by the visionary Blazing
              Team!
            </p>

            <div className="pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg"
              >
                Explore Our Innovation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidiaries Section */}
      <section className="py-20 px-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Subsidiaries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our diverse portfolio of innovative companies, each blazing trails in their respective industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsidiaries.map((subsidiary, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-200"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`mx-auto w-16 h-16 ${subsidiary.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {subsidiary.logo ? (
                      <Image
                        src={subsidiary.logo || "/placeholder.svg"}
                        alt={`${subsidiary.name} Logo`}
                        width={40}
                        height={40}
                      />
                    ) : (
                      <subsidiary.icon className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <CardTitle className="text-2xl">{subsidiary.name}</CardTitle>
                  <CardDescription className="text-base">{subsidiary.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {subsidiary.href !== "#" ? (
                    <Link href={subsidiary.href}>
                      <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all">
                        Explore {subsidiary.name}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled className="w-full" variant="outline">
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg opacity-90">
                To revolutionize industries through innovative technology solutions that empower individuals and
                businesses to achieve unprecedented success.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Our Goal</h3>
              <p className="text-lg opacity-90">
                To become the leading force in technological innovation, creating platforms that connect, protect, and
                empower users worldwide.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">About Us</h3>
              <p className="text-lg opacity-90">
                We are visionary pioneers committed to pushing boundaries and creating solutions that shape the future
                of digital interaction and commerce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Blaze Your Trail?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the revolution and experience the future of digital innovation with our cutting-edge platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iec">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4">
                Explore iEC Platform
              </Button>
            </Link>
            <Link href="/getrolv">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4"
              >
                Discover Getrolv
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
