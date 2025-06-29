import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function IECLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blazing Team
          </Link>
        </div>

        <div className="space-y-6">
          <Image src="/iec-logo.png" alt="iEC Logo" width={300} height={200} className="mx-auto" priority />
          <h1 className="text-4xl font-bold text-gray-800">Welcome to iEC</h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Your trusted partner for estate and accommodation solutions
          </p>
        </div>

        <div className="pt-8">
          <Link href="/iec/auth-options">
            <Button size="lg" className="px-8 py-3 text-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
