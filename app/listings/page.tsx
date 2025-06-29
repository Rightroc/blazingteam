"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Wifi, Car, Coffee, Users } from "lucide-react"

// Mock data for listings
const mockListings = [
  {
    id: 1,
    name: "Luxury Downtown Apartment",
    type: "apartment",
    location: "Victoria Island, Lagos",
    price: 150000,
    rating: 4.8,
    reviews: 24,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["WiFi", "Parking", "Kitchen", "AC"],
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 2,
    name: "Cozy Garden Lodge",
    type: "lodge",
    location: "Ikeja, Lagos",
    price: 75000,
    rating: 4.6,
    reviews: 18,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["WiFi", "Garden", "Breakfast", "Parking"],
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    id: 3,
    name: "Modern Studio Apartment",
    type: "apartment",
    location: "Lekki, Lagos",
    price: 120000,
    rating: 4.7,
    reviews: 31,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["WiFi", "Gym", "Pool", "Security"],
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    id: 4,
    name: "Family Guest House",
    type: "lodge",
    location: "Surulere, Lagos",
    price: 95000,
    rating: 4.5,
    reviews: 12,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["WiFi", "Kitchen", "Laundry", "Parking"],
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 5,
    name: "Executive Penthouse",
    type: "apartment",
    location: "Ikoyi, Lagos",
    price: 250000,
    rating: 4.9,
    reviews: 8,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["WiFi", "Balcony", "Concierge", "Gym"],
    bedrooms: 3,
    bathrooms: 3,
  },
  {
    id: 6,
    name: "Budget Friendly Lodge",
    type: "lodge",
    location: "Yaba, Lagos",
    price: 45000,
    rating: 4.2,
    reviews: 15,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["WiFi", "Shared Kitchen", "Lounge"],
    bedrooms: 1,
    bathrooms: 1,
  },
]

export default function ListingsPage() {
  const searchParams = useSearchParams()
  const accommodationType = searchParams.get("accommodationType")

  // Filter listings based on search params
  const filteredListings = accommodationType
    ? mockListings.filter((listing) => listing.type === accommodationType)
    : mockListings

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wifi":
        return <Wifi className="w-4 h-4" />
      case "parking":
        return <Car className="w-4 h-4" />
      case "kitchen":
      case "breakfast":
        return <Coffee className="w-4 h-4" />
      default:
        return <Users className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Available Accommodations</h1>
          <p className="text-gray-600">
            Found {filteredListings.length} accommodation{filteredListings.length !== 1 ? "s" : ""} matching your search
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <Card key={listing.id} className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-2 right-2 bg-blue-600">
                  {listing.type === "apartment" ? "Apartment" : "Lodge"}
                </Badge>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{listing.name}</CardTitle>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  {listing.location}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{listing.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({listing.reviews} reviews)</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">₦{listing.price.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">per month</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <span>
                    {listing.bedrooms} bed{listing.bedrooms !== 1 ? "s" : ""}
                  </span>
                  <span className="mx-2">•</span>
                  <span>
                    {listing.bathrooms} bath{listing.bathrooms !== 1 ? "s" : ""}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {listing.amenities.slice(0, 3).map((amenity, index) => (
                    <div key={index} className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                      {getAmenityIcon(amenity)}
                      <span className="ml-1">{amenity}</span>
                    </div>
                  ))}
                  {listing.amenities.length > 3 && (
                    <div className="text-xs bg-gray-100 px-2 py-1 rounded">+{listing.amenities.length - 3} more</div>
                  )}
                </div>

                <Link href={`/property/${listing.id}`}>
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No accommodations found matching your criteria.</p>
            <Link href="/search">
              <Button className="mt-4">Modify Search</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
