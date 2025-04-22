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

export default function AddStoreItemPage() {
  const { toast } = useToast()
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    stock: "1",
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
        title: "Store Item Added",
        description: "The store item has been added successfully.",
      })
      router.push("/admin/store")
    }, 1000)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Add New Store Item</CardTitle>
          <CardDescription>Create a new product to sell in your store.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Product Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g. Smartphone Screen Protector"
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
                placeholder="Describe the product..."
                required
                value={formData.description}
                onChange={handleChange}
                rows={4}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price (GH₵)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="29.99"
                  required
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stock">Stock Quantity</Label>
                <Input
                  id="stock"
                  name="stock"
                  type="number"
                  min="0"
                  placeholder="10"
                  required
                  value={formData.stock}
                  onChange={handleChange}
                />
              </div>
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
            <Button type="button" variant="outline" onClick={() => router.push("/admin/store")}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Adding..." : "Add Store Item"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
