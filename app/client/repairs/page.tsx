"use client"

import { useState } from "react"
import { RepairCard } from "@/components/repair-card"
import { SearchBar } from "@/components/search-bar"

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

export default function RepairsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter repairs based on search query
  const filteredRepairs = repairs.filter((repair) => {
    if (!searchQuery.trim()) return true

    const query = searchQuery.toLowerCase()
    return repair.title.toLowerCase().includes(query) || repair.description.toLowerCase().includes(query)
  })

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-400">Repair Services</h1>
        <SearchBar
          placeholder="Search repair services..."
          onSearch={setSearchQuery}
          initialQuery={searchQuery}
          className="w-full md:w-64"
        />
      </div>

      {filteredRepairs.length === 0 ? (
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
          <h2 className="text-xl font-medium mb-2">No repair services found</h2>
          <p className="text-gray-500 dark:text-gray-400">
            We couldn't find any repair services matching "{searchQuery}". Try a different search term.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepairs.map((repair) => (
            <RepairCard key={repair.id} repair={repair} />
          ))}
        </div>
      )}
    </div>
  )
}
