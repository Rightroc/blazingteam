import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Home, Shield, Star, Users, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">iEC Estate & Accommodations</h1>
          <p className="text-center mt-2 text-blue-100">Your trusted partner in finding the perfect place</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Find Your Perfect Accommodation</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            iEC connects you with quality apartments, lodges, and rental properties across multiple locations. We make
            finding and booking your ideal accommodation simple, secure, and affordable.
          </p>
        </div>
      </section>

      {/* Company Aims & Feasibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to revolutionizing the accommodation booking experience through innovation, reliability,
              and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Trusted & Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All properties are verified and transactions are secured with advanced encryption technology.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Quality Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every accommodation meets our high standards for comfort, cleanliness, and amenities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Customer First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  24/7 support and personalized service to ensure your accommodation experience is perfect.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rental Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Accommodation Type</h3>
            <p className="text-gray-600">Select from our wide range of accommodation options</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <Link href="/search?type=apartment">
                <CardHeader className="text-center pb-4">
                  <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-2xl">Rent Apartment</CardTitle>
                  <CardDescription className="text-base">
                    Modern apartments with full amenities, perfect for long-term stays and families
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Multiple locations available
                    </li>
                    <li className="flex items-center">
                      <Home className="w-4 h-4 mr-2" />
                      Fully furnished options
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 mr-2" />
                      Secure and verified properties
                    </li>
                  </ul>
                  <Button className="w-full" size="lg">
                    Browse Apartments
                  </Button>
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <Link href="/search?type=lodge">
                <CardHeader className="text-center pb-4">
                  <Home className="w-16 h-16 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-2xl">Book Lodge</CardTitle>
                  <CardDescription className="text-base">
                    Cozy lodges and guest houses, ideal for short stays and travelers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Tourist-friendly locations
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Rated accommodations
                    </li>
                    <li className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Personalized service
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full bg-green-600 text-white hover:bg-green-700" size="lg">
                    Browse Lodges
                  </Button>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
