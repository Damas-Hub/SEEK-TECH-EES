"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, Store, MessageSquare, ShoppingCart, Settings, LogOut, User } from "lucide-react"

interface SidebarNavProps {
  isAdmin?: boolean
}

export function SidebarNav({ isAdmin = false }: SidebarNavProps) {
  const pathname = usePathname()

  const adminItems = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: Home,
    },
    {
      title: "Repair Services",
      href: "/admin/repairs",
      icon: Settings,
    },
    {
      title: "Store Items",
      href: "/admin/store",
      icon: Store,
    },
    {
      title: "Orders",
      href: "/admin/orders",
      icon: ShoppingCart,
    },
    {
      title: "Messages",
      href: "/admin/messages",
      icon: MessageSquare,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ]

  const clientItems = [
    {
      title: "Repairs",
      href: "/client/repairs",
      icon: Settings,
    },
    {
      title: "Store",
      href: "/client/store",
      icon: Store,
    },
    {
      title: "Messages",
      href: "/client/messages",
      icon: MessageSquare,
    },
    {
      title: "Cart",
      href: "/client/cart",
      icon: ShoppingCart,
    },
    {
      title: "Profile",
      href: "/client/profile",
      icon: User,
    },
  ]

  const items = isAdmin ? adminItems : clientItems

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b p-4">
          <div className="flex items-center">
            <Settings className="mr-2 h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">{isAdmin ? "Repairer Admin" : "Repair & Store"}</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  className={cn("flex w-full items-center", pathname === item.href && "bg-blue-50 text-blue-600")}
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="border-t p-4">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/login">
              <LogOut className="mr-2 h-5 w-5" />
              <span>Logout</span>
            </Link>
          </Button>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
