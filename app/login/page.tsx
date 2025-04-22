"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // In a real app, you would handle login with an API
    console.log("Login data:", formData)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)

      // Check user role based on email (for demo purposes)
      if (formData.email === "admin@repairpro.com") {
        // Admin user
        toast({
          title: "Login Successful",
          description: "Welcome back, Admin!",
        })
        router.push("/admin/dashboard")
      } else {
        // Regular user
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        })
        router.push("/client/repairs")
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-blue-800 dark:text-blue-400">
            Login to RepairPro
          </CardTitle>
          <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="text-right">
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </div>
          <div className="text-xs text-center text-gray-400 mt-4">
            <p>Demo accounts:</p>
            <p>Admin: admin@repairpro.com / password</p>
            <p>Client: client@example.com / password</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
