import { RepairCard } from "@/components/repair-card"

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
    <div>
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Repair Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repairs.map((repair) => (
          <RepairCard key={repair.id} repair={repair} />
        ))}
      </div>
    </div>
  )
}
