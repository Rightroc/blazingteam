"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Smartphone } from "lucide-react"

export default function PaymentMethodPage() {
  const router = useRouter()

  const handleCardPayment = () => {
    router.push("/payment/card")
  }

  const handleTransferPayment = () => {
    router.push("/payment/transfer")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">Choose Payment Method</h1>
          <p className="text-gray-600">Select how you'd like to complete your payment</p>
        </div>

        <div className="grid gap-4">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Pay with Card</CardTitle>
              <p className="text-sm text-gray-600">Secure online payment with your debit or credit card</p>
            </CardHeader>
            <CardContent>
              <Button onClick={handleCardPayment} className="w-full" size="lg">
                Continue with Card
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <Smartphone className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Pay via Transfer</CardTitle>
              <p className="text-sm text-gray-600">Bank transfer with WhatsApp support for quick assistance</p>
            </CardHeader>
            <CardContent>
              <Button
                onClick={handleTransferPayment}
                variant="outline"
                className="w-full bg-green-600 text-white hover:bg-green-700"
                size="lg"
              >
                Continue with Transfer
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
