"use client"

import type React from "react"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
  SidebarMenuBadge,
} from "@/components/ui/sidebar"
import {
  FiLayout,
  FiTool,
  FiShoppingBag,
  FiShoppingCart,
  FiMessageCircle,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiSearch,
} from "react-icons/fi"

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: <FiLayout size={20} />,
      current: pathname === "/admin/dashboard",
    },
    {
      name: "Repairs",
      href: "/admin/repairs",
      icon: <FiTool size={20} />,
      current: pathname === "/admin/repairs",
    },
    {
      name: "Store",
      href: "/admin/store",
      icon: <FiShoppingBag size={20} />,
      current: pathname === "/admin/store",
    },
    {
      name: "Orders",
      href: "/admin/orders",
      icon: <FiShoppingCart size={20} />,
      current: pathname === "/admin/orders",
      badge: 3,
    },
    {
      name: "Messages",
      href: "/admin/messages",
      icon: <FiMessageCircle size={20} />,
      current: pathname === "/admin/messages",
      badge: 5,
    },
    {
      name: "Clients",
      href: "/admin/clients",
      icon: <FiUsers size={20} />,
      current: pathname === "/admin/clients",
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: <FiSettings size={20} />,
      current: pathname === "/admin/settings",
    },
  ]

  const handleLogout = () => {
    // In a real app, you would handle logout with an API
    console.log("Admin logging out...")
    router.push("/")
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    // In a real app, you would implement search functionality
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen dark:bg-gray-900 dark:text-gray-100">
        <Sidebar className="dark:bg-gray-800 dark:border-gray-700 bg-white border-r border-gray-200 shadow-sm">
          <SidebarHeader className="border-b p-4 bg-white dark:bg-gray-800 dark:border-gray-700">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-1.5 rounded-full">
                <FiTool size={20} />
              </div>
              <h1 className="text-xl font-bold text-blue-800 dark:text-blue-400">RepairPro</h1>
            </Link>
          </SidebarHeader>
          <SidebarContent className="bg-white dark:bg-gray-800">
            <SidebarMenu className="py-2">
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.current}
                    tooltip={item.name}
                    className={`${
                      item.current
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    }`}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4 border-t bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-800 dark:text-blue-200 font-semibold">
                  A
                </div>
                <div>
                  <p className="font-medium">Admin User</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">admin@repairpro.com</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <FiLogOut size={20} />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex flex-col">
          <header className="border-b p-4 bg-white dark:bg-gray-800 dark:border-gray-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold">{navigation.find((item) => item.current)?.name || "Dashboard"}</h1>
            </div>
            <div className="flex items-center gap-4">
              <form onSubmit={handleSearch} className="relative hidden md:block">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" size="sm" variant="ghost" className="absolute right-0 top-0 h-full">
                  <FiSearch size={16} />
                </Button>
              </form>
              <ThemeToggle />
              <Button variant="outline" size="sm" asChild>
                <Link href="/">View Site</Link>
              </Button>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-gray-900">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
