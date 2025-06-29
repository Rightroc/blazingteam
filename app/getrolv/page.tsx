import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function GetRolvLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-800 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blazing Team
          </Link>
        </div>

        <div className="space-y-6">
          <Image src="/getrolv-logo.png" alt="Getrolv Logo" width={300} height={200} className="mx-auto" priority />
          <h1 className="text-4xl font-bold text-gray-800">Welcome to Getrolv</h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            The revolutionary social media platform with integrated payment solutions and trust contracts
          </p>
        </div>

        <div className="pt-8">
          <Link href="/getrolv/auth-options">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8 py-3 text-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
