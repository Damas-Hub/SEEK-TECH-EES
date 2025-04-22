"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export default function AddRepairPage() {
  const { toast } = useToast()
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Repair Service Added",
        description: "The repair service has been added successfully.",
      })
      router.push("/admin/repairs")
    }, 1000)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Add New Repair Service</CardTitle>
          <CardDescription>Create a new repair service to offer to your clients.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Service Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g. Smartphone Screen Repair"
                required
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe the repair service..."
                required
                value={formData.description}
                onChange={handleChange}
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                placeholder="e.g. $49.99 or From $29.99"
                required
                value={formData.price}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                name="image"
                placeholder="https://example.com/image.jpg"
                value={formData.image}
                onChange={handleChange}
              />
              <p className="text-sm text-gray-500">Leave empty to use a placeholder image</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={() => router.push("/admin/repairs")}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Adding..." : "Add Repair Service"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
