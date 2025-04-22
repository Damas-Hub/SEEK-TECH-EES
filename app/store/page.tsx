"use client"

import { useState } from "react"
import { StoreItemCard } from "@/components/store-item-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { FiTool } from "react-icons/fi"

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
  const [cart, setCart] = useState<string[]>([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const addToCart = (itemId: string) => {
    if (!cart.includes(itemId)) {
      setCart([...cart, itemId])
    }
  }

  const removeFromCart = (itemId: string) => {
    setCart(cart.filter((id) => id !== itemId))
  }

  const isInCart = (itemId: string) => cart.includes(itemId)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1.5 rounded-full">
              <FiTool size={20} />
            </div>
            <h1 className="text-xl font-bold text-blue-800 dark:text-blue-400">RepairPro</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/repairs"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Repairs
            </Link>
            <Link href="/store" className="text-blue-600 dark:text-blue-400 font-medium">
              Store
            </Link>
            <Link
              href="/register"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Register
            </Link>
            <Link href="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex flex-col gap-4 mt-8">
                  <Link
                    href="/repairs"
                    className="text-lg font-medium px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Repairs
                  </Link>
                  <Link
                    href="/store"
                    className="text-lg font-medium px-4 py-2 rounded-md bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Store
                  </Link>
                  <Link
                    href="/register"
                    className="text-lg font-medium px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                  <Link
                    href="/login"
                    className="text-lg font-medium px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                </div>
                <div className="mt-auto mb-8 flex justify-center">
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-400">Store Items</h1>
          {cart.length > 0 && (
            <Link href="/login">
              <Button className="flex items-center gap-2">
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
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {storeItems.map((item) => (
            <StoreItemCard
              key={item.id}
              item={{
                ...item,
                price: item.price, // Keep the numeric value the same
              }}
              isInCart={isInCart(item.id)}
              onAddToCart={() => addToCart(item.id)}
              onRemoveFromCart={() => removeFromCart(item.id)}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 text-white p-1.5 rounded-full">
                  <FiTool size={20} />
                </div>
                <h3 className="text-lg font-bold">RepairPro</h3>
              </Link>
              <p className="text-gray-300">
                Professional repair services and quality tech accessories for all your needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/repairs" className="text-gray-300 hover:text-white">
                    Repair Services
                  </Link>
                </li>
                <li>
                  <Link href="/store" className="text-gray-300 hover:text-white">
                    Store
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="text-gray-300 hover:text-white">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="text-gray-300 hover:text-white">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <address className="text-gray-300 not-italic">
                <p>123 Repair Street</p>
                <p>Tech City, TC 12345</p>
                <p className="mt-2">Phone: (123) 456-7890</p>
                <p>Email: info@repairpro.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} RepairPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
