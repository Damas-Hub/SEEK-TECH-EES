import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DashboardPage() {
  // Mock data for dashboard stats
  const stats = [
    {
      title: "Total Repairs",
      value: "124",
      change: "+12%",
      changeType: "increase",
      icon: (
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
          className="lucide lucide-tool"
        >
          <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M2.5 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M17.5 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M10 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M2.5 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M17.5 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M10 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M17.5 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M2.5 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        </svg>
      ),
    },
    {
      title: "Store Orders",
      value: "87",
      change: "+23%",
      changeType: "increase",
      icon: (
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
          className="lucide lucide-shopping-cart"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      ),
    },
    {
      title: "Total Clients",
      value: "243",
      change: "+8%",
      changeType: "increase",
      icon: (
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
          className="lucide lucide-users"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Revenue",
      value: "GH₵12,456",
      change: "+18%",
      changeType: "increase",
      icon: (
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
          className="lucide lucide-dollar-sign"
        >
          <line x1="12" x2="12" y1="2" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
  ]

  // Mock data for recent activities
  const recentActivities = [
    {
      id: "1",
      type: "repair",
      client: "John Doe",
      description: "Smartphone Screen Repair",
      status: "Completed",
      date: "2 hours ago",
    },
    {
      id: "2",
      type: "order",
      client: "Jane Smith",
      description: "Purchased 3 items",
      status: "Pending",
      date: "5 hours ago",
    },
    {
      id: "3",
      type: "message",
      client: "Mike Johnson",
      description: "New message about laptop repair",
      status: "Unread",
      date: "Yesterday",
    },
    {
      id: "4",
      type: "repair",
      client: "Sarah Williams",
      description: "Laptop Battery Replacement",
      status: "In Progress",
      date: "Yesterday",
    },
    {
      id: "5",
      type: "order",
      client: "Robert Brown",
      description: "Purchased 1 item",
      status: "Completed",
      date: "2 days ago",
    },
  ]

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

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
              <div className="bg-blue-100 p-2 rounded-full text-blue-600">{stat.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.changeType === "increase" ? "text-green-600" : "text-red-600"}`}>
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Activities</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50">
                  <div
                    className={`p-2 rounded-full ${
                      activity.type === "repair"
                        ? "bg-blue-100 text-blue-600"
                        : activity.type === "order"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {activity.type === "repair" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-tool"
                      >
                        <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M2.5 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M17.5 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M10 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M2.5 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M17.5 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M10 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M17.5 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M2.5 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                      </svg>
                    ) : activity.type === "order" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-shopping-cart"
                      >
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
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
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{activity.client}</h3>
                      <span className="text-xs text-gray-500">{activity.date}</span>
                    </div>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                    <div
                      className={`inline-block px-2 py-1 mt-1 text-xs rounded-full ${
                        activity.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : activity.status === "In Progress"
                            ? "bg-blue-100 text-blue-800"
                            : activity.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                      }`}
                    >
                      {activity.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Quick Actions</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/admin/repairs/add">
                <div className="border rounded-lg p-4 text-center hover:bg-blue-50 hover:border-blue-200 transition-colors">
                  <div className="bg-blue-100 p-2 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center text-blue-600">
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
                      className="lucide lucide-plus"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </div>
                  <p className="font-medium">Add Repair</p>
                </div>
              </Link>
              <Link href="/admin/store/add">
                <div className="border rounded-lg p-4 text-center hover:bg-green-50 hover:border-green-200 transition-colors">
                  <div className="bg-green-100 p-2 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center text-green-600">
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
                      className="lucide lucide-plus"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </div>
                  <p className="font-medium">Add Store Item</p>
                </div>
              </Link>
              <Link href="/admin/clients">
                <div className="border rounded-lg p-4 text-center hover:bg-yellow-50 hover:border-yellow-200 transition-colors">
                  <div className="bg-yellow-100 p-2 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center text-yellow-600">
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
                      className="lucide lucide-user-plus"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <line x1="19" x2="19" y1="8" y2="14" />
                      <line x1="22" x2="16" y1="11" y2="11" />
                    </svg>
                  </div>
                  <p className="font-medium">Add Client</p>
                </div>
              </Link>
              <Link href="/admin/messages">
                <div className="border rounded-lg p-4 text-center hover:bg-red-50 hover:border-red-200 transition-colors">
                  <div className="bg-red-100 p-2 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center text-red-600">
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
                      className="lucide lucide-message-circle"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <p className="font-medium">Messages</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
