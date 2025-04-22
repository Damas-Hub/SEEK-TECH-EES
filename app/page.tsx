"use client"

import { RepairCard } from "@/components/repair-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { FiTool, FiMenu } from "react-icons/fi"

// Mock data for repair services
const repairs = [
  {
    id: "1",
    title: "Smartphone Screen Repair",
    description: "Professional screen replacement for all smartphone models. Quick service with quality parts.",
    price: "From $49.99",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "Computer Diagnostics",
    description: "Complete system check to identify hardware and software issues. Detailed report included.",
    price: "From $29.99",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "Laptop Battery Replacement",
    description: "Extend your laptop's life with a new battery. Compatible with all major brands.",
    price: "From $59.99",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    title: "Data Recovery",
    description: "Recover lost or deleted files from hard drives, SSDs, and memory cards. Confidential service.",
    price: "From $79.99",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "5",
    title: "Virus Removal",
    description:
      "Complete malware and virus removal with system optimization. Includes security software installation.",
    price: "From $39.99",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "6",
    title: "Game Console Repair",
    description: "Fix for PlayStation, Xbox, and Nintendo consoles. HDMI ports, disc drives, and more.",
    price: "From $49.99",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/repairs"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Repairs
            </Link>
            <Link
              href="/store"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
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
                <FiMenu />
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
                    className="text-lg font-medium px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
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
                    className="text-lg font-medium px-4 py-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
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

      {/* Hero Section */}
      <div className="bg-blue-600 text-white dark:bg-blue-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Professional Repair Services & Quality Products</h1>
            <p className="text-xl mb-8">
              Expert repair services for all your devices and quality accessories to enhance your tech experience.
            </p>
            <div className="flex gap-4">
              <Link href="/repairs">
                <Button className="bg-white text-blue-600 hover:bg-gray-100">Browse Repair Services</Button>
              </Link>
              <Link href="/store">
                <Button variant="outline" className="border-white text-white bg-blue-700/50 hover:bg-blue-700">
                  Visit Our Store
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Repair Services */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-8">Featured Repair Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repairs.slice(0, 3).map((repair) => (
            <RepairCard key={repair.id} repair={repair} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/repairs">
            <Button variant="outline">View All Repair Services</Button>
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-4">Need Help With Your Device?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Our expert technicians are ready to help you with any repair needs. Contact us today for a free
            consultation.
          </p>
          <Link href="/login">
            <Button>Contact Us Now</Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
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
