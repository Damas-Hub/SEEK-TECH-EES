"use client"

import type React from "react"

import { useState } from "react"
import { StoreItemCard } from "@/components/store-item-card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SearchBar } from "@/components/search-bar"

// Mock data for store items
const storeItems = [
  {
    id: "1",
    title: "Smartphone Screen Protector",
    description: "Tempered glass screen protector for all smartphone models. 9H hardness, anti-scratch.",
    price: 12.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "Laptop Cooling Pad",
    description: "USB powered cooling pad with 5 fans. Compatible with laptops up to 17 inches.",
    price: 29.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "Wireless Mouse",
    description: "Ergonomic wireless mouse with 1600 DPI. Compatible with Windows and Mac.",
    price: 19.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    title: "USB-C to HDMI Adapter",
    description: "Connect your USB-C device to any HDMI display. 4K@60Hz support.",
    price: 15.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "5",
    title: "External Hard Drive",
    description: "1TB portable external hard drive. USB 3.0, compatible with Windows and Mac.",
    price: 59.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "6",
    title: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with 10-hour battery life. Water-resistant.",
    price: 39.99,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function StorePage() {
  const router = useRouter()
  const [cart, setCart] = useState<string[]>([])
  const [loginDialogOpen, setLoginDialogOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // In a real app, this would come from auth state
  const [loginForm, setLoginForm] = useState({ email: "", password: "" })
  const [searchQuery, setSearchQuery] = useState("")

  const addToCart = (itemId: string) => {
    if (!cart.includes(itemId)) {
      setCart([...cart, itemId])
    }
  }

  const removeFromCart = (itemId: string) => {
    setCart(cart.filter((id) => id !== itemId))
  }

  const isInCart = (itemId: string) => cart.includes(itemId)

  const handleViewCart = () => {
    if (isLoggedIn) {
      router.push("/client/cart")
    } else {
      setLoginDialogOpen(true)
    }
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login data:", loginForm)
    // In a real app, you would handle login with an API
    setIsLoggedIn(true)
    setLoginDialogOpen(false)

    // After login, redirect to cart
    if (cart.length > 0) {
      router.push("/client/cart")
    }
  }

  // Filter items based on search query
  const filteredItems = storeItems.filter((item) => {
    if (!searchQuery.trim()) return true

    const query = searchQuery.toLowerCase()
    return item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
  })

  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold text-blue-800">Store Items</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <SearchBar
              placeholder="Search store items..."
              onSearch={setSearchQuery}
              initialQuery={searchQuery}
              className="w-full md:w-64"
            />
            {cart.length > 0 && (
              <Button onClick={handleViewCart} className="flex items-center gap-2 whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-cart"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                View Cart ({cart.length})
              </Button>
            )}
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <h2 className="text-xl font-medium mb-2">No items found</h2>
            <p className="text-gray-500 dark:text-gray-400">
              We couldn't find any items matching "{searchQuery}". Try a different search term.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <StoreItemCard
                key={item.id}
                item={item}
                isInCart={isInCart(item.id)}
                onAddToCart={() => addToCart(item.id)}
                onRemoveFromCart={() => removeFromCart(item.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Login Dialog */}
      <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login Required</DialogTitle>
            <DialogDescription>Please login to view your cart and checkout</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              />
            </div>
            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={() => setLoginDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Login</Button>
            </div>
            <div className="text-sm text-center text-gray-500">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Register
              </a>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
