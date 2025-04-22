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
  FiMenu,
} from "react-icons/fi"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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

  // For mobile view, we'll use a drawer instead of the sidebar
  if (isMobile) {
    return (
      <div className="flex flex-col h-screen dark:bg-gray-900 dark:text-gray-100">
        <header className="border-b p-4 bg-white dark:bg-gray-800 dark:border-gray-700 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1.5 rounded-full">
              <FiTool size={20} />
            </div>
            <h1 className="text-xl font-bold text-blue-800 dark:text-blue-400">RepairPro Admin</h1>
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
                    <span className="text-blue-800 dark:text-blue-400">RepairPro Admin</span>
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
                        {item.icon}
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="ml-auto bg-blue-600 text-white dark:bg-blue-500 text-xs rounded-full px-2 py-0.5">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                    <form onSubmit={handleSearch} className="mb-4">
                      <div className="relative">
                        <Input
                          type="search"
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pr-10"
                        />
                        <Button type="submit" size="sm" variant="ghost" className="absolute right-0 top-0 h-full">
                          <FiSearch size={16} />
                        </Button>
                      </div>
                    </form>

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
        </header>

        <main className="flex-1 overflow-auto p-4 bg-gray-50 dark:bg-gray-900">
          <h1 className="text-xl font-semibold mb-4">{navigation.find((item) => item.current)?.name || "Dashboard"}</h1>
          {children}
        </main>
      </div>
    )
  }

  // Desktop view with sidebar
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
