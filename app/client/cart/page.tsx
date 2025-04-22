"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

// Mock data for store items (in a real app, this would come from an API or state management)
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

// Mock cart data (in a real app, this would come from a state management solution)
const mockCartItems = ["1", "3", "5"]

export default function CartPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [cartItems, setCartItems] = useState<string[]>(mockCartItems)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const removeFromCart = (itemId: string) => {
    setCartItems(cartItems.filter((id) => id !== itemId))
  }

  const cartItemsData = storeItems.filter((item) => cartItems.includes(item.id))

  const totalPrice = cartItemsData.reduce((total, item) => total + item.price, 0)

  const handleCheckout = () => {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Request Submitted",
        description: "We'll contact you soon to complete your purchase.",
      })

      // Clear cart and redirect
      setCartItems([])
      router.push("/client/repairs")
    }, 1500)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <Card className="text-center p-8">
          <CardContent className="pt-6">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart text-gray-400"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-4">Browse our store to find products you'd like to purchase.</p>
            <Button onClick={() => router.push("/client/store")}>Continue Shopping</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cartItemsData.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative h-48 sm:h-auto sm:w-1/3">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-lg text-blue-800">{item.title}</h3>
                        <p className="text-blue-600 font-medium">GH₵{item.price.toFixed(2)}</p>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trash-2"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          <path d="M10 11v6" />
                          <path d="M14 11v6" />
                        </svg>
                      </Button>
                    </div>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {cartItemsData.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="text-gray-600">{item.title}</span>
                      <span>GH₵{item.price.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 mt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>GH₵{totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={handleCheckout} disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Submit Request"}
                </Button>
              </CardFooter>
              <CardContent className="pt-0">
                <p className="text-xs text-gray-500">
                  Note: This will submit a request to the store. The repairer will contact you to arrange payment and
                  delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
