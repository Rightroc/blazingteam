"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Copy, MessageCircle, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function TransferPaymentPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [transferCompleted, setTransferCompleted] = useState(false)

  const bankDetails = {
    bankName: "First Bank of Nigeria",
    accountName: "iEC Estate & Accommodations Ltd",
    accountNumber: "2087654321",
    amount: "₦175,000",
  }

  const whatsappNumber = "+234 901 234 5678"

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    })
  }

  const handleWhatsAppContact = () => {
    const message = `Hello! I'm making a payment for my accommodation booking. Account: ${bankDetails.accountNumber}, Amount: ${bankDetails.amount}`
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s+/g, "").replace("+", "")}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleTransferComplete = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to receive the receipt",
        variant: "destructive",
      })
      return
    }
    setTransferCompleted(true)
    // Simulate sending receipt
    setTimeout(() => {
      router.push("/payment/success")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="mb-6">
          <Button variant="outline" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Bank Transfer Payment</CardTitle>
            <CardDescription>Transfer to the account below and get instant WhatsApp support</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Bank Details */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <h3 className="font-semibold text-lg">Bank Details</h3>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Bank Name:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{bankDetails.bankName}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(bankDetails.bankName, "Bank name")}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Account Name:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{bankDetails.accountName}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(bankDetails.accountName, "Account name")}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Account Number:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-blue-600">{bankDetails.accountNumber}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(bankDetails.accountNumber, "Account number")}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="text-sm text-gray-600">Amount:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-green-600">{bankDetails.amount}</span>
                    <Button variant="ghost" size="sm" onClick={() => copyToClipboard(bankDetails.amount, "Amount")}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Support */}
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
                WhatsApp Support
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Need help or want to confirm your payment? Contact us on WhatsApp for instant support.
              </p>
              <Button onClick={handleWhatsAppContact} className="w-full bg-green-600 hover:bg-green-700">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact on WhatsApp: {whatsappNumber}
              </Button>
            </div>

            {/* Confirmation Form */}
            <form onSubmit={handleTransferComplete} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address (for receipt)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {transferCompleted ? (
                <div className="flex items-center justify-center text-green-600 py-4">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  <span className="font-medium">Transfer confirmation received! Redirecting...</span>
                </div>
              ) : (
                <Button type="submit" className="w-full" size="lg">
                  I've Completed the Transfer
                </Button>
              )}
            </form>

            <div className="text-xs text-gray-500 text-center">
              After completing your transfer, you'll receive a confirmation receipt via email with your booking PIN code
              for verification on arrival.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
