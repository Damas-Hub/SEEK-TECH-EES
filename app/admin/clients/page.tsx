import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Mock data for clients
const clients = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    address: "123 Main St, City, Country",
    joinDate: "2023-04-15",
    orders: 3,
    repairs: 2,
    status: "Active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 234 567 891",
    address: "456 Oak St, City, Country",
    joinDate: "2023-04-10",
    orders: 1,
    repairs: 1,
    status: "Active",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 234 567 892",
    address: "789 Pine St, City, Country",
    joinDate: "2023-04-05",
    orders: 0,
    repairs: 3,
    status: "Active",
  },
  {
    id: "4",
    name: "Sarah Williams",
    email: "sarah@example.com",
    phone: "+1 234 567 893",
    address: "101 Elm St, City, Country",
    joinDate: "2023-03-28",
    orders: 2,
    repairs: 0,
    status: "Inactive",
  },
  {
    id: "5",
    name: "Robert Brown",
    email: "robert@example.com",
    phone: "+1 234 567 894",
    address: "202 Maple St, City, Country",
    joinDate: "2023-03-20",
    orders: 1,
    repairs: 1,
    status: "Active",
  },
]

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Clients</h1>
        <Button>
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
          Add Client
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Clients</CardTitle>
          <CardDescription>View and manage all registered clients.</CardDescription>
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
              <Input placeholder="Search clients..." className="pl-8 w-full" />
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
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead className="hidden md:table-cell">Address</TableHead>
                  <TableHead className="hidden md:table-cell">Join Date</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Repairs</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell className="font-medium">{client.name}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{client.email}</div>
                        <div className="text-gray-500">{client.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{client.address}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      {new Date(client.joinDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{client.orders}</TableCell>
                    <TableCell>{client.repairs}</TableCell>
                    <TableCell>
                      <Badge
                        variant={client.status === "Active" ? "default" : "secondary"}
                        className={
                          client.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }
                      >
                        {client.status}
                      </Badge>
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
                            className="lucide lucide-pencil"
                          >
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                            <path d="m15 5 4 4" />
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
