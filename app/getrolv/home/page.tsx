"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Menu,
  Home,
  Video,
  Users,
  MessageCircle,
  Heart,
  Share,
  Bookmark,
  CreditCard,
  Shield,
  Crown,
  CheckCircle,
  MoreHorizontal,
  Play,
} from "lucide-react"

export default function GetRolvHomePage() {
  const [showFloatingMenu, setShowFloatingMenu] = useState(false)
  const [showSideMenu, setShowSideMenu] = useState(false)
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })

  const handleScreenTap = (e: React.MouseEvent) => {
    if (showFloatingMenu) {
      setShowFloatingMenu(false)
    } else {
      const rect = e.currentTarget.getBoundingClientRect()
      setMenuPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      setShowFloatingMenu(true)
    }
  }

  const mockPosts = [
    {
      id: 1,
      user: "John Doe",
      username: "@johndoe",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Just discovered this amazing new feature on Getrolv! The trust contract system is revolutionary 🚀",
      image: "/placeholder.svg?height=300&width=500",
      likes: 124,
      comments: 23,
      shares: 12,
      time: "2h ago",
      type: "post",
    },
    {
      id: 2,
      user: "Sarah Wilson",
      username: "@sarahw",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Check out this amazing sunset! 🌅",
      video: "/placeholder.svg?height=400&width=300",
      likes: 89,
      comments: 15,
      shares: 8,
      time: "4h ago",
      type: "reel",
    },
    {
      id: 3,
      user: "Tech Insider",
      username: "@techinsider",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "The future of social media is here with Getrolv's integrated payment system! #Innovation #Tech",
      likes: 256,
      comments: 45,
      shares: 32,
      time: "6h ago",
      type: "post",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative" onClick={handleScreenTap}>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="text-red-600 hover:text-red-800">
            <ArrowLeft className="w-6 h-6" />
          </Link>

          <h1 className="text-xl font-bold text-red-600">Getrolv</h1>

          <div className="flex items-center space-x-4">
            <div className="text-xs">
              <div className="flex space-x-2">
                <Badge variant="outline" className="text-xs">
                  RID: GR123456
                </Badge>
                <Badge variant="outline" className="text-xs">
                  UID: U789012
                </Badge>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                setShowSideMenu(!showSideMenu)
              }}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Side Menu */}
      {showSideMenu && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setShowSideMenu(false)}>
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-6" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Menu</h2>

              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Saved
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Upay
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Trust Contract Agreement
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Crown className="w-4 h-4 mr-2" />
                  Premium Subscription
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Virtual Business Space
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Get Verified
                </Button>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-medium mb-2">Upay Settings</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>Base Currency: USD</div>
                  <div>Auxiliary Currency: NGN</div>
                  <div>Auto Conversion: Enabled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Menu */}
      {showFloatingMenu && (
        <div
          className="fixed z-30 bg-white rounded-full shadow-lg p-2 flex space-x-2"
          style={{
            left: `${menuPosition.x - 100}px`,
            top: `${menuPosition.y - 30}px`,
            transform: "translate(-50%, -50%)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Button size="sm" variant="ghost" className="rounded-full p-2">
            <Users className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost" className="rounded-full p-2">
            <Home className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost" className="rounded-full p-2">
            <Video className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost" className="rounded-full p-2">
            <MessageCircle className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Main Content */}
      <main className="pb-20">
        <div className="max-w-2xl mx-auto">
          {mockPosts.map((post) => (
            <Card key={post.id} className="mb-4 mx-4">
              <CardContent className="p-4">
                {/* Post Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <img src={post.avatar || "/placeholder.svg"} alt={post.user} className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="font-semibold text-sm">{post.user}</div>
                      <div className="text-xs text-gray-500">
                        {post.username} • {post.time}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>

                {/* Post Content */}
                <div className="mb-3">
                  <p className="text-sm mb-3">{post.content}</p>

                  {post.image && (
                    <img src={post.image || "/placeholder.svg"} alt="Post content" className="w-full rounded-lg" />
                  )}

                  {post.video && (
                    <div className="relative">
                      <img src={post.video || "/placeholder.svg"} alt="Video thumbnail" className="w-full rounded-lg" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button size="lg" className="rounded-full bg-black bg-opacity-50 hover:bg-opacity-70">
                          <Play className="w-6 h-6 text-white" />
                        </Button>
                      </div>
                      {post.type === "reel" && <Badge className="absolute top-2 left-2 bg-red-600">Reel</Badge>}
                    </div>
                  )}
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">{post.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs">{post.comments}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                      <Share className="w-4 h-4" />
                      <span className="text-xs">{post.shares}</span>
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="flex items-center justify-around py-2">
          <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
            <Home className="w-5 h-5" />
            <span className="text-xs mt-1">Home</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
            <Video className="w-5 h-5" />
            <span className="text-xs mt-1">Reels</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
            <Users className="w-5 h-5" />
            <span className="text-xs mt-1">Friends</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs mt-1">Channels</span>
          </Button>
        </div>
      </nav>
    </div>
  )
}
