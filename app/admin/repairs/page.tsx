"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

// Mock data for repair services
const repairs = [
  {
    id: "REP-001",
    title: "Smartphone Screen Repair",
    description: "Professional screen replacement for all smartphone models. Quick service with quality parts.",
    price: "$49.99",
    status: "Active",
    createdAt: "2023-04-15",
  },
  {
    id: "REP-002",
    title: "Computer Diagnostics",
    description: "Complete system check to identify hardware and software issues. Detailed report included.",
    price: "$29.99",
    status: "Active",
    createdAt: "2023-04-10",
  },
  {
    id: "REP-003",
    title: "Laptop Battery Replacement",
    description: "Extend your laptop's life with a new battery. Compatible with all major brands.",
    price: "$59.99",
    status: "Active",
    createdAt: "2023-04-05",
  },
  {
    id: "REP-004",
    title: "Data Recovery",
    description: "Recover lost or deleted files from hard drives, SSDs, and memory cards. Confidential service.",
    price: "$79.99",
    status: "Active",
    createdAt: "2023-03-28",
  },
  {
    id: "REP-005",
    title: "Virus Removal",
    description:
      "Complete malware and virus removal with system optimization. Includes security software installation.",
    price: "$39.99",
    status: "Inactive",
    createdAt: "2023-03-20",
  },
  {
    id: "REP-006",
    title: "Game Console Repair",
    description: "Fix for PlayStation, Xbox, and Nintendo consoles. HDMI ports, disc drives, and more.",
    price: "$49.99",
    status: "Active",
    createdAt: "2023-03-15",
  },
]

export default function RepairsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter repairs based on search query and status
  const filteredRepairs = repairs.filter((repair) => {
    const matchesSearch =
      repair.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repair.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repair.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || repair.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Repair Services</h1>
        <Button asChild>
          <Link href="/admin/repairs/add">
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
              className="lucide lucide-plus mr-2"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Add Repair Service
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Repair Services</CardTitle>
          <CardDescription>View and manage all repair services offered to clients.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div className="relative w-full md:w-64">
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
                className="lucide lucide-search absolute left-2.5 top-2.5 text-gray-500 dark:text-gray-400"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <Input
                placeholder="Search repairs..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <select
                className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <Button variant="outline" size="sm">
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
                  className="lucide lucide-download mr-1"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Export
              </Button>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden dark:border-gray-700">
            <Table>
              <TableHeader>
                <TableRow className="dark:border-gray-700">
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Description</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="hidden md:table-cell">Created</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRepairs.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-gray-500 dark:text-gray-400">
                      No repair services found matching your search criteria.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredRepairs.map((repair) => (
                    <TableRow key={repair.id} className="dark:border-gray-700">
                      <TableCell className="font-medium">{repair.id}</TableCell>
                      <TableCell>{repair.title}</TableCell>
                      <TableCell className="hidden md:table-cell max-w-xs truncate">{repair.description}</TableCell>
                      <TableCell>GH₵{repair.price.replace("$", "")}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        {new Date(repair.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            repair.status === "Active"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                          }`}
                        >
                          {repair.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
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
                              className="lucide lucide-pencil"
                            >
                              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                              <path d="m15 5 4 4" />
                            </svg>
                          </Button>
                          <Button variant="ghost" size="icon">
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
                              className="lucide lucide-trash-2"
                            >
                              <path d="M3 6h18" />
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                              <path d="M10 11v6" />
                              <path d="M14 11v6" />
                            </svg>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
