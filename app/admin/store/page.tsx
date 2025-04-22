import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

// Mock data for store items
const storeItems = [
  {
    id: "ITEM-001",
    title: "Smartphone Screen Protector",
    description: "Tempered glass screen protector for all smartphone models. 9H hardness, anti-scratch.",
    price: "$12.99",
    stock: 45,
    status: "In Stock",
    createdAt: "2023-04-15",
  },
  {
    id: "ITEM-002",
    title: "Laptop Cooling Pad",
    description: "USB powered cooling pad with 5 fans. Compatible with laptops up to 17 inches.",
    price: "$29.99",
    stock: 18,
    status: "In Stock",
    createdAt: "2023-04-10",
  },
  {
    id: "ITEM-003",
    title: "Wireless Mouse",
    description: "Ergonomic wireless mouse with 1600 DPI. Compatible with Windows and Mac.",
    price: "$19.99",
    stock: 32,
    status: "In Stock",
    createdAt: "2023-04-05",
  },
  {
    id: "ITEM-004",
    title: "USB-C to HDMI Adapter",
    description: "Connect your USB-C device to any HDMI display. 4K@60Hz support.",
    price: "$15.99",
    stock: 27,
    status: "In Stock",
    createdAt: "2023-03-28",
  },
  {
    id: "ITEM-005",
    title: "External Hard Drive",
    description: "1TB portable external hard drive. USB 3.0, compatible with Windows and Mac.",
    price: "$59.99",
    stock: 0,
    status: "Out of Stock",
    createdAt: "2023-03-20",
  },
  {
    id: "ITEM-006",
    title: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with 10-hour battery life. Water-resistant.",
    price: "$39.99",
    stock: 12,
    status: "In Stock",
    createdAt: "2023-03-15",
  },
]

export default function StorePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Store Items</h1>
        <Button asChild>
          <Link href="/admin/store/add">
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
            Add Store Item
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Store Items</CardTitle>
          <CardDescription>View and manage all items available in your store.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="relative w-64">
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
                className="lucide lucide-search absolute left-2.5 top-2.5 text-gray-500"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <Input placeholder="Search items..." className="pl-8 w-full" />
            </div>
            <div className="flex gap-2">
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
                  className="lucide lucide-filter mr-1"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                Filter
              </Button>
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

          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Description</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead className="hidden md:table-cell">Created</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {storeItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell className="hidden md:table-cell max-w-xs truncate">{item.description}</TableCell>
                    <TableCell>GH₵{item.price.replace("$", "")}</TableCell>
                    <TableCell>{item.stock}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          item.status === "In Stock" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {item.status}
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
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
