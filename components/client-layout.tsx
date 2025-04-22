"use client"

import React from "react"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import {
  FiTool,
  FiShoppingBag,
  FiMessageCircle,
  FiShoppingCart,
  FiUser,
  FiLogOut,
  FiSearch,
  FiMenu,
} from "react-icons/fi"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // Mock cart count - in a real app, this would come from a state management solution
  const cartCount = 3

  const navigation = [
    {
      name: "Repairs",
      href: "/client/repairs",
      icon: <FiTool size={24} />,
      current: pathname === "/client/repairs",
    },
    {
      name: "Store",
      href: "/client/store",
      icon: <FiShoppingBag size={24} />,
      current: pathname === "/client/store",
    },
    {
      name: "Messages",
      href: "/client/messages",
      icon: <FiMessageCircle size={24} />,
      current: pathname === "/client/messages",
    },
    {
      name: "Cart",
      href: "/client/cart",
      icon: <FiShoppingCart size={24} />,
      current: pathname === "/client/cart",
      badge: cartCount,
    },
    {
      name: "Profile",
      href: "/client/profile",
      icon: <FiUser size={24} />,
      current: pathname === "/client/profile",
    },
  ]

  const handleLogout = () => {
    // In a real app, you would handle logout with an API
    console.log("Logging out...")
    router.push("/")
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    // In a real app, you would implement search functionality
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      {/* Mobile header with drawer */}
      {isMobile && (
        <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-1.5 rounded-full">
                <FiTool size={20} />
              </div>
              <h1 className="text-xl font-bold text-blue-800 dark:text-blue-400">RepairPro</h1>
            </Link>

            <div className="flex items-center gap-2">
              <ThemeToggle />

              <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <FiMenu size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80%] sm:w-[350px]">
                  <SheetHeader className="mb-6">
                    <SheetTitle className="text-left flex items-center gap-2">
                      <div className="bg-blue-600 text-white p-1.5 rounded-full">
                        <FiTool size={20} />
                      </div>
                      <span className="text-blue-800 dark:text-blue-400">RepairPro</span>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col h-full">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`flex items-center gap-3 px-4 py-3 rounded-md relative ${
                            item.current
                              ? "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
                              : "hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                          <span>{item.name}</span>
                          {item.badge && (
                            <Badge className="ml-auto" variant="destructive">
                              {item.badge}
                            </Badge>
                          )}
                        </Link>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                

                      <div className="flex items-center justify-between">
                        <ThemeToggle />
                        <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
                          <FiLogOut size={16} />
                          Logout
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
      )}

      {/* Desktop header */}
      {!isMobile && (
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-1.5 rounded-full">
                <FiTool size={20} />
              </div>
              <h1 className="text-xl font-bold text-blue-800 dark:text-blue-400">RepairPro</h1>
            </Link>

            <div className="flex-1 max-w-md mx-4">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" size="sm" variant="ghost" className="absolute right-0 top-0 h-full">
                  <FiSearch size={16} />
                </Button>
              </form>
            </div>

            <div className="flex items-center gap-4">
              <nav className="flex items-center gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-1 relative ${
                      item.current
                        ? "text-blue-600 dark:text-blue-400 font-medium"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {item.badge && (
                      <Badge className="absolute -top-3 -right-3 px-1.5 py-0.5 text-xs" variant="destructive">
                        {item.badge}
                      </Badge>
                    )}
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>

              <ThemeToggle />

              <Button variant="outline" size="sm" onClick={handleLogout} className="ml-4">
                <FiLogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </header>
      )}

      {/* Main content */}
      <main className={`container mx-auto px-4 py-6 ${isMobile ? "pb-20" : ""}`}>{children}</main>

      {/* Mobile bottom navigation - we'll keep this for quick access to main sections */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="grid h-full grid-cols-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex flex-col items-center justify-center px-1 relative ${
                  item.current
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.badge && (
                  <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs" variant="destructive">
                    {item.badge}
                  </Badge>
                )}
                {item.icon}
                <span className="text-xs">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
