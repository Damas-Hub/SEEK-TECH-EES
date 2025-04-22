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
import { FiMessageCircle, FiMessageSquare } from "react-icons/fi"

interface RepairCardProps {
  repair: {
    id: string
    title: string
    description: string
    price: string
    image: string
  }
}

export function RepairCard({ repair }: RepairCardProps) {
  const router = useRouter()
  const [loginDialogOpen, setLoginDialogOpen] = useState(false)
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // In a real app, this would come from auth state
  const [loginForm, setLoginForm] = useState({ email: "", password: "" })
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" })

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login data:", loginForm)
    // In a real app, you would handle login with an API
    setIsLoggedIn(true)
    setLoginDialogOpen(false)
    setContactDialogOpen(true)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact data:", contactForm)
    // In a real app, you would send this to your backend
    setContactDialogOpen(false)
    alert("Your message has been sent! The repairer will contact you soon.")
  }

  const handleMessageClick = () => {
    if (isLoggedIn) {
      setContactDialogOpen(true)
    } else {
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
          <Image src={repair.image || "/placeholder.svg"} alt={repair.title} fill className="object-cover" />
        </div>
        <CardHeader>
          <CardTitle className="text-blue-800 dark:text-blue-400">{repair.title}</CardTitle>
          <CardDescription className="text-blue-600 dark:text-blue-300 font-medium">
            {repair.price.replace("$", "GH₵")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300">{repair.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={handleMessageClick}>
            <FiMessageCircle size={16} />
            Message
          </Button>
          <Button
            size="sm"
            className="flex items-center gap-1"
            onClick={() => window.open(`https://wa.me/1234567890?text=I'm interested in ${repair.title}`, "_blank")}
          >
            <FiMessageSquare size={16} />
            WhatsApp
          </Button>
        </CardFooter>
      </Card>

      {/* Login Dialog */}
      <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login Required</DialogTitle>
            <DialogDescription>Please login to contact the repairer about {repair.title}</DialogDescription>
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

      {/* Contact Dialog */}
      <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact About {repair.title}</DialogTitle>
            <DialogDescription>Send a message to the repairer about this service</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                required
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                required
                placeholder={`I'm interested in ${repair.title}...`}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              />
            </div>
            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={() => setContactDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
