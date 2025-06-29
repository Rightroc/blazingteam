import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, LogIn } from "lucide-react"

export default function AuthOptionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">Join iEC</h1>
          <p className="text-gray-600">Choose how you'd like to continue</p>
        </div>

        <div className="grid gap-4">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/auth/signup">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <UserPlus className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Create a new account to get started</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg">
                  Create Account
                </Button>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/auth/signin">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <LogIn className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Already have an account? Welcome back!</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-white text-gray-800" size="lg">
                  Sign In
                </Button>
              </CardContent>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
