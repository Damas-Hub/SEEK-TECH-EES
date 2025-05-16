"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FiSearch, FiX } from "react-icons/fi"

interface SearchBarProps {
  placeholder?: string
  onSearch: (query: string) => void
  initialQuery?: string
  className?: string
}

export function SearchBar({ placeholder = "Search...", onSearch, initialQuery = "", className = "" }: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery)

  useEffect(() => {
    setQuery(initialQuery)
  }, [initialQuery])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleClear = () => {
    setQuery("")
    onSearch("")
  }

  // This ensures the search updates in real-time as the user types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    // Call onSearch immediately to update the parent component's state
    onSearch(newQuery)
  }

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <Input type="search" placeholder={placeholder} value={query} onChange={handleInputChange} className="pr-16" />
      {query && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-8 top-0 h-full"
          onClick={handleClear}
        >
          <FiX size={16} />
          <span className="sr-only">Clear search</span>
        </Button>
      )}
      <Button type="submit" size="icon" variant="ghost" className="absolute right-0 top-0 h-full">
        <FiSearch size={16} />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  )
}
