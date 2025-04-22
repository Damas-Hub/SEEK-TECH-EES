import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for orders
const orders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    items: ["Smartphone Screen Protector", "USB-C to HDMI Adapter"],
    total: "$28.98",
    status: "New",
    date: "2023-04-15",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 234 567 891",
    items: ["Laptop Cooling Pad"],
    total: "$29.99",
    status: "Contacted",
    date: "2023-04-14",
  },
  {
    id: "ORD-003",
    customer: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 234 567 892",
    items: ["Wireless Mouse", "Bluetooth Speaker"],
    total: "$59.98",
    status: "Completed",
    date: "2023-04-12",
  },
  {
    id: "ORD-004",
    customer: "Sarah Williams",
    email: "sarah@example.com",
    phone: "+1 234 567 893",
    items: ["External Hard Drive"],
    total: "$59.99",
    status: "Cancelled",
    date: "2023-04-10",
  },
  {
    id: "ORD-005",
    customer: "Robert Brown",
    email: "robert@example.com",
    phone: "+1 234 567 894",
    items: ["Smartphone Screen Protector"],
    total: "$12.99",
    status: "New",
    date: "2023-04-09",
  },
]

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Orders</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Orders</CardTitle>
          <CardDescription>View and manage all orders from clients.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
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
                  className="lucide lucide-search absolute left-2.5 top-2.5 text-gray-500"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <Input placeholder="Search orders..." className="pl-8 w-full" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm" className="w-full md:w-auto">
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
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden md:table-cell">Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{order.customer}</div>
                        <div className="text-xs text-gray-500">{order.email}</div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <ul className="list-disc list-inside text-sm">
                        {order.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </TableCell>
                    <TableCell>GH₵{order.total.replace("$", "")}</TableCell>
                    <TableCell className="hidden md:table-cell">{new Date(order.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          order.status === "New"
                            ? "bg-blue-100 text-blue-800"
                            : order.status === "Contacted"
                              ? "bg-yellow-100 text-yellow-800"
                              : order.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                        }`}
                      >
                        {order.status}
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
                            className="lucide lucide-eye"
                          >
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                            <circle cx="12" cy="12" r="3" />
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
                            className="lucide lucide-message-circle"
                          >
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
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
