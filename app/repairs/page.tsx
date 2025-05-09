import { RepairCard } from "@/components/repair-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { FiTool } from "react-icons/fi"
import Image from "next/image"

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
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
             <div >
                             <Image
                               src="/assets/logo.png"
                               alt="Logo"
                               width={50}
                               height={20}
                               className="rounded-full"
                             />
                           </div>
            <h1 className="text-xl font-bold text-blue-800 dark:text-blue-400">Sleek Tech</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/repairs" className="text-blue-600 dark:text-blue-400 font-medium">
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
          <div className="flex md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="ml-2">
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
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-6">Repair Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repairs.map((repair) => (
            <RepairCard key={repair.id} repair={repair} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
              <div>
  <Image
    src="/assets/logo.png"
    alt="Logo"
    width={50}
    height={20}
    className="rounded-full"
  />
</div>
                <h3 className="text-lg font-bold">SleekTech</h3>
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
            <p>&copy; {new Date().getFullYear()} SleekTechEES. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
