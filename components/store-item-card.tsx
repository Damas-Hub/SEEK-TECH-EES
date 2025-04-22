"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { FiMessageCircle, FiShoppingCart, FiX } from "react-icons/fi"

interface StoreItemCardProps {
  item: {
    id: string
    title: string
    description: string
    price: number
    image: string
  }
  isInCart?: boolean
  onAddToCart?: () => void
  onRemoveFromCart?: () => void
}

export function StoreItemCard({
  item,
  isInCart = false,
  onAddToCart = () => {},
  onRemoveFromCart = () => {},
}: StoreItemCardProps) {
  const router = useRouter()
  const [loginDialogOpen, setLoginDialogOpen] = useState(false)
  const [inquireDialogOpen, setInquireDialogOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // In a real app, this would come from auth state
  const [loginForm, setLoginForm] = useState({ email: "", password: "" })
  const [inquireForm, setInquireForm] = useState({ name: "", email: "", message: "" })

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login data:", loginForm)
    // In a real app, you would handle login with an API
    setIsLoggedIn(true)
    setLoginDialogOpen(false)

    // If they were trying to add to cart, do that now
    if (addToCartAfterLogin) {
      onAddToCart()
      setAddToCartAfterLogin(false)
    } else {
      // They were trying to inquire
      setInquireDialogOpen(true)
    }
  }

  const handleInquireSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Inquire data:", inquireForm)
    // In a real app, you would send this to your backend
    setInquireDialogOpen(false)
    alert("Your inquiry has been sent! The repairer will contact you soon.")
  }

  const [addToCartAfterLogin, setAddToCartAfterLogin] = useState(false)

  const handleInquireClick = () => {
    if (isLoggedIn) {
      setInquireDialogOpen(true)
    } else {
      setAddToCartAfterLogin(false)
      setLoginDialogOpen(true)
    }
  }

  const handleAddToCartClick = () => {
    if (isLoggedIn) {
      onAddToCart()
    } else {
      setAddToCartAfterLogin(true)
      setLoginDialogOpen(true)
    }
  }

  const handleRegisterClick = () => {
    router.push("/register")
  }

  return (
    <>
      <Card className="overflow-hidden dark:border-gray-700">
        <div className="relative h-48 w-full">
          <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
        </div>
        <CardHeader>
          <CardTitle className="text-blue-800 dark:text-blue-400">{item.title}</CardTitle>
          <CardDescription className="text-blue-600 dark:text-blue-300 font-medium">
            GH₵{item.price.toFixed(2)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={handleInquireClick}>
            <FiMessageCircle size={16} />
            Inquire
          </Button>
          {isInCart ? (
            <Button variant="destructive" size="sm" className="flex items-center gap-1" onClick={onRemoveFromCart}>
              <FiX size={16} />
              Remove
            </Button>
          ) : (
            <Button size="sm" className="flex items-center gap-1" onClick={handleAddToCartClick}>
              <FiShoppingCart size={16} />
              Add to Cart
            </Button>
          )}
        </CardFooter>
      </Card>

      {/* Login Dialog */}
      <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login Required</DialogTitle>
            <DialogDescription>
              Please login to {addToCartAfterLogin ? "add items to your cart" : "contact the repairer"}
            </DialogDescription>
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
              <Button variant="link" className="p-0" onClick={handleRegisterClick}>
                Register
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Inquire Dialog */}
      <Dialog open={inquireDialogOpen} onOpenChange={setInquireDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Inquire About {item.title}</DialogTitle>
            <DialogDescription>Send a message to the repairer about this item</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleInquireSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                required
                value={inquireForm.name}
                onChange={(e) => setInquireForm({ ...inquireForm, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={inquireForm.email}
                onChange={(e) => setInquireForm({ ...inquireForm, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                required
                placeholder={`I'm interested in ${item.title}...`}
                value={inquireForm.message}
                onChange={(e) => setInquireForm({ ...inquireForm, message: e.target.value })}
              />
            </div>
            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={() => setInquireDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Send Inquiry</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
