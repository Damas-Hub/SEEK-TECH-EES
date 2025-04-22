"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

// Mock user data
const userData = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 234 567 890",
  address: "123 Main St, City, Country",
}

// Mock order history
const orderHistory = [
  {
    id: "ORD-001",
    date: "2023-04-15",
    items: ["Smartphone Screen Protector", "USB-C to HDMI Adapter"],
    status: "Completed",
    total: 28.98,
  },
  {
    id: "ORD-002",
    date: "2023-03-22",
    items: ["External Hard Drive"],
    status: "Completed",
    total: 59.99,
  },
]

// Mock repair history
const repairHistory = [
  {
    id: "REP-001",
    date: "2023-04-10",
    service: "Smartphone Screen Repair",
    status: "Completed",
    cost: 49.99,
  },
  {
    id: "REP-002",
    date: "2023-02-18",
    service: "Laptop Battery Replacement",
    status: "Completed",
    cost: 59.99,
  },
]

export default function ProfilePage() {
  const { toast } = useToast()
  const [profile, setProfile] = useState(userData)
  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    // In a real app, you would save the profile to an API
    setIsEditing(false)
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-blue-800">My Profile</h1>

      <Tabs defaultValue="profile">
        <TabsList className="mb-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Order History</TabsTrigger>
          <TabsTrigger value="repairs">Repair History</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Manage your personal information and contact details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                {isEditing ? (
                  <Input id="name" name="name" value={profile.name} onChange={handleChange} />
                ) : (
                  <div className="p-2 border rounded-md">{profile.name}</div>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                {isEditing ? (
                  <Input id="email" name="email" type="email" value={profile.email} onChange={handleChange} />
                ) : (
                  <div className="p-2 border rounded-md">{profile.email}</div>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                {isEditing ? (
                  <Input id="phone" name="phone" value={profile.phone} onChange={handleChange} />
                ) : (
                  <div className="p-2 border rounded-md">{profile.phone}</div>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                {isEditing ? (
                  <Input id="address" name="address" value={profile.address} onChange={handleChange} />
                ) : (
                  <div className="p-2 border rounded-md">{profile.address}</div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              {isEditing ? (
                <div className="flex gap-2">
                  <Button onClick={handleSave}>Save Changes</Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setProfile(userData)
                      setIsEditing(false)
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              )}
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>View your past orders and their status.</CardDescription>
            </CardHeader>
            <CardContent>
              {orderHistory.length === 0 ? (
                <p className="text-center py-4 text-gray-500">You haven't placed any orders yet.</p>
              ) : (
                <div className="space-y-4">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-blue-800">{order.id}</h3>
                          <p className="text-sm text-gray-500">{new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <div
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            order.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : order.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {order.status}
                        </div>
                      </div>
                      <div className="space-y-1 mb-2">
                        {order.items.map((item, index) => (
                          <p key={index} className="text-sm">
                            • {item}
                          </p>
                        ))}
                      </div>
                      <div className="text-right font-medium">Total: GH₵{order.total.toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="repairs">
          <Card>
            <CardHeader>
              <CardTitle>Repair History</CardTitle>
              <CardDescription>View your past repair services and their status.</CardDescription>
            </CardHeader>
            <CardContent>
              {repairHistory.length === 0 ? (
                <p className="text-center py-4 text-gray-500">You haven't requested any repairs yet.</p>
              ) : (
                <div className="space-y-4">
                  {repairHistory.map((repair) => (
                    <div key={repair.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-blue-800">{repair.id}</h3>
                          <p className="text-sm text-gray-500">{new Date(repair.date).toLocaleDateString()}</p>
                        </div>
                        <div
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            repair.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : repair.status === "In Progress"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {repair.status}
                        </div>
                      </div>
                      <p className="mb-2">{repair.service}</p>
                      <div className="text-right font-medium">Cost: GH₵{repair.cost.toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
