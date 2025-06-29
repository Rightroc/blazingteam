"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Star, Wifi, Car, Coffee, Users, Bed, Bath, ArrowLeft, Palette } from "lucide-react"

// Mock property data
const mockProperty = {
  id: 1,
  name: "Luxury Downtown Apartment",
  type: "apartment",
  location: "Victoria Island, Lagos",
  price: 150000,
  rating: 4.8,
  reviews: 24,
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  amenities: ["WiFi", "Parking", "Kitchen", "AC", "Balcony", "Security", "Elevator", "Laundry"],
  bedrooms: 2,
  bathrooms: 2,
  description:
    "Experience luxury living in this beautifully furnished downtown apartment. Located in the heart of Victoria Island, this modern space offers stunning city views and premium amenities. Perfect for professionals and families looking for comfort and convenience.",
  features: [
    "Fully furnished with modern appliances",
    "24/7 security and concierge service",
    "High-speed internet included",
    "Prime location with easy access to business district",
    "Balcony with city views",
    "In-unit laundry facilities",
  ],
}

export default function PropertyDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(0)
  const [decorationOption, setDecorationOption] = useState("")
  const [paintingOption, setPaintingOption] = useState("")

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wifi":
        return <Wifi className="w-4 h-4" />
      case "parking":
        return <Car className="w-4 h-4" />
      case "kitchen":
        return <Coffee className="w-4 h-4" />
      default:
        return <Users className="w-4 h-4" />
    }
  }

  const handleBookNow = () => {
    const bookingData = {
      propertyId: params.id,
      decorationOption,
      paintingOption,
      price: mockProperty.price,
    }

    // Store booking data in sessionStorage for the payment page
    sessionStorage.setItem("bookingData", JSON.stringify(bookingData))
    router.push("/payment-method")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="outline" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Listings
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={mockProperty.images[selectedImage] || "/placeholder.svg"}
                    alt={mockProperty.name}
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-blue-600">
                    {mockProperty.type === "apartment" ? "Apartment" : "Lodge"}
                  </Badge>
                </div>
                <div className="flex gap-2 p-4">
                  {mockProperty.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? "border-blue-600" : "border-gray-200"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Property Details */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">{mockProperty.name}</CardTitle>
                    <div className="flex items-center text-gray-600 mt-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {mockProperty.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">₦{mockProperty.price.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 font-medium">{mockProperty.rating}</span>
                    <span className="ml-1 text-gray-500">({mockProperty.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      {mockProperty.bedrooms} bed{mockProperty.bedrooms !== 1 ? "s" : ""}
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      {mockProperty.bathrooms} bath{mockProperty.bathrooms !== 1 ? "s" : ""}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p className="text-gray-600">{mockProperty.description}</p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3">Features</h3>
                    <ul className="space-y-2">
                      {mockProperty.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold mb-3">Amenities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {mockProperty.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center text-sm bg-gray-100 px-3 py-2 rounded-lg">
                          {getAmenityIcon(amenity)}
                          <span className="ml-2">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="w-5 h-5 mr-2" />
                  Customization Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Decoration Style</label>
                  <Select onValueChange={setDecorationOption}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose decoration style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="modern">Modern (+₦25,000)</SelectItem>
                      <SelectItem value="classic">Classic (+₦20,000)</SelectItem>
                      <SelectItem value="minimalist">Minimalist (+₦15,000)</SelectItem>
                      <SelectItem value="traditional">Traditional (+₦18,000)</SelectItem>
                      <SelectItem value="none">No additional decoration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Painting Option</label>
                  <Select onValueChange={setPaintingOption}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose painting option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fresh-paint">Fresh Paint (+₦30,000)</SelectItem>
                      <SelectItem value="accent-wall">Accent Wall (+₦20,000)</SelectItem>
                      <SelectItem value="custom-color">Custom Color (+₦35,000)</SelectItem>
                      <SelectItem value="none">Keep current paint</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Base rent</span>
                    <span>₦{mockProperty.price.toLocaleString()}</span>
                  </div>
                  {decorationOption && decorationOption !== "none" && (
                    <div className="flex justify-between text-sm">
                      <span>Decoration</span>
                      <span>
                        +₦
                        {decorationOption === "modern"
                          ? "25,000"
                          : decorationOption === "classic"
                            ? "20,000"
                            : decorationOption === "minimalist"
                              ? "15,000"
                              : "18,000"}
                      </span>
                    </div>
                  )}
                  {paintingOption && paintingOption !== "none" && (
                    <div className="flex justify-between text-sm">
                      <span>Painting</span>
                      <span>
                        +₦
                        {paintingOption === "fresh-paint"
                          ? "30,000"
                          : paintingOption === "accent-wall"
                            ? "20,000"
                            : "35,000"}
                      </span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-blue-600">
                      ₦
                      {(
                        mockProperty.price +
                        (decorationOption === "modern"
                          ? 25000
                          : decorationOption === "classic"
                            ? 20000
                            : decorationOption === "minimalist"
                              ? 15000
                              : decorationOption === "traditional"
                                ? 18000
                                : 0) +
                        (paintingOption === "fresh-paint"
                          ? 30000
                          : paintingOption === "accent-wall"
                            ? 20000
                            : paintingOption === "custom-color"
                              ? 35000
                              : 0)
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>

                <Button onClick={handleBookNow} className="w-full" size="lg">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
