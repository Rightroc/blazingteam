"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Mail, Download, Home } from "lucide-react"

export default function PaymentSuccessPage() {
  const [receiptData] = useState({
    transactionId: "TXN" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    pinCode: Math.random().toString(36).substr(2, 6).toUpperCase(),
    amount: "₦175,000",
    propertyName: "Luxury Downtown Apartment",
    bookingDate: new Date().toLocaleDateString(),
    checkInDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
  })

  useEffect(() => {
    // Simulate sending email receipt
    console.log("Sending receipt to email...")
  }, [])

  const downloadReceipt = () => {
    // Create a simple text receipt
    const receiptText = `
iEC Estate & Accommodations - Booking Receipt

Transaction ID: ${receiptData.transactionId}
PIN Code: ${receiptData.pinCode}
Property: ${receiptData.propertyName}
Amount Paid: ${receiptData.amount}
Booking Date: ${receiptData.bookingDate}
Check-in Date: ${receiptData.checkInDate}

Please present this PIN code upon arrival for verification.
Thank you for choosing iEC!
    `

    const blob = new Blob([receiptText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `iEC-Receipt-${receiptData.transactionId}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-green-800">Payment Successful!</CardTitle>
            <p className="text-gray-600">Your accommodation has been booked successfully</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold">Booking Details</h3>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Transaction ID:</span>
                  <span className="font-mono">{receiptData.transactionId}</span>
                </div>
                <div className="flex justify-between">
                  <span>PIN Code:</span>
                  <span className="font-mono font-bold text-blue-600">{receiptData.pinCode}</span>
                </div>
                <div className="flex justify-between">
                  <span>Property:</span>
                  <span>{receiptData.propertyName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-semibold">{receiptData.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-in:</span>
                  <span>{receiptData.checkInDate}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Mail className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-medium text-blue-800">Receipt Sent!</span>
              </div>
              <p className="text-sm text-blue-700">
                A detailed receipt with your PIN code has been sent to your email address. Please present this PIN code
                upon arrival for verification.
              </p>
            </div>

            <div className="space-y-3">
              <Button onClick={downloadReceipt} variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download Receipt
              </Button>

              <Link href="/home">
                <Button className="w-full">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>

            <div className="text-xs text-gray-500">
              Keep your PIN code safe. You'll need it for check-in verification.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
