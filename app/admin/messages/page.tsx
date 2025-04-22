"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Mock conversation data
const mockConversations = [
  {
    id: "1",
    name: "John Doe",
    lastMessage: "I'm interested in the smartphone screen repair service.",
    time: "10:30 AM",
    unread: true,
    type: "repair",
  },
  {
    id: "2",
    name: "Jane Smith",
    lastMessage: "When will my order be ready for pickup?",
    time: "Yesterday",
    unread: true,
    type: "order",
  },
  {
    id: "3",
    name: "Mike Johnson",
    lastMessage: "Do you have any laptop cooling pads in stock?",
    time: "2 days ago",
    unread: false,
    type: "inquiry",
  },
  {
    id: "4",
    name: "Sarah Williams",
    lastMessage: "Thanks for the quick repair service!",
    time: "3 days ago",
    unread: false,
    type: "repair",
  },
  {
    id: "5",
    name: "Robert Brown",
    lastMessage: "I'd like to schedule a repair for my laptop.",
    time: "1 week ago",
    unread: false,
    type: "repair",
  },
]

// Mock messages for the active conversation
const mockMessages = [
  {
    id: "1",
    sender: "John Doe",
    content: "I'm interested in the smartphone screen repair service. Do you repair iPhone 13 screens?",
    time: "10:25 AM",
    isUser: false,
  },
  {
    id: "2",
    sender: "You",
    content:
      "Yes, we do repair iPhone 13 screens. The cost is GH₵79.99 and it usually takes about 2 hours to complete.",
    time: "10:28 AM",
    isUser: true,
  },
  {
    id: "3",
    sender: "John Doe",
    content: "That sounds good. Do I need to make an appointment or can I just drop by?",
    time: "10:30 AM",
    isUser: false,
  },
]

export default function AdminMessagesPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [activeConversation, setActiveConversation] = useState(mockConversations[0])
  const [messages, setMessages] = useState(mockMessages)
  const [newMessage, setNewMessage] = useState("")

  const filteredConversations =
    activeTab === "all" ? mockConversations : mockConversations.filter((conv) => conv.type === activeTab)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    // Add admin message
    const adminMessage = {
      id: Date.now().toString(),
      sender: "You",
      content: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isUser: true,
    }

    setMessages((prev) => [...prev, adminMessage])
    setNewMessage("")
  }

  return (
    <div className="h-[calc(100vh-120px)]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        {/* Conversations List */}
        <Card className="lg:col-span-1 overflow-hidden flex flex-col dark:border-gray-700">
          <CardHeader className="px-4 py-3 border-b dark:border-gray-700">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Messages</CardTitle>
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
                  className="lucide lucide-plus mr-1"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                New Message
              </Button>
            </div>
          </CardHeader>
          <div className="p-2 border-b dark:border-gray-700">
            <Input placeholder="Search messages..." className="w-full dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <div className="p-2 border-b dark:border-gray-700">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full">
                <TabsTrigger value="all" className="flex-1">
                  All
                </TabsTrigger>
                <TabsTrigger value="repair" className="flex-1">
                  Repairs
                </TabsTrigger>
                <TabsTrigger value="order" className="flex-1">
                  Orders
                </TabsTrigger>
                <TabsTrigger value="inquiry" className="flex-1">
                  Inquiries
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <CardContent className="flex-1 overflow-y-auto p-0">
            <div className="divide-y dark:divide-gray-700">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                    activeConversation?.id === conversation.id ? "bg-blue-50 dark:bg-blue-900/30" : ""
                  }`}
                  onClick={() => setActiveConversation(conversation)}
                >
                  <Avatar>
                    <AvatarFallback className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {conversation.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium truncate">{conversation.name}</h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread && (
                    <Badge variant="default" className="bg-blue-600 dark:bg-blue-500">
                      New
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-2 overflow-hidden flex flex-col dark:border-gray-700">
          <CardHeader className="px-4 py-3 border-b dark:border-gray-700">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {activeConversation?.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{activeConversation?.name}</CardTitle>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {activeConversation?.type === "repair"
                      ? "Repair Inquiry"
                      : activeConversation?.type === "order"
                        ? "Order Question"
                        : "General Inquiry"}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-more-vertical"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isUser
                        ? "bg-blue-600 text-white dark:bg-blue-700"
                        : "bg-white border dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                    }`}
                  >
                    <p>{message.content}</p>
                    <p
                      className={`text-xs mt-1 ${message.isUser ? "text-blue-100" : "text-gray-500 dark:text-gray-400"}`}
                    >
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <div className="p-4 border-t dark:border-gray-700">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 dark:bg-gray-700 dark:border-gray-600"
              />
              <Button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-send mr-1"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
                Send
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  )
}
