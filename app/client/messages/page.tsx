"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useSearchParams } from "next/navigation"

// Mock conversation data
const mockConversations = [
  {
    id: "1",
    name: "SleekTech Support",
    lastMessage: "How can I help you with your repair?",
    time: "10:30 AM",
    unread: true,
  },
  {
    id: "2",
    name: "John (Technician)",
    lastMessage: "Your laptop repair is complete.",
    time: "Yesterday",
    unread: false,
  },
]

// Mock messages for the active conversation
const mockMessages = [
  {
    id: "1",
    sender: "SleekTech Support",
    content: "Hello! How can I help you today?",
    time: "10:25 AM",
    isUser: false,
  },
  {
    id: "2",
    sender: "You",
    content: "I'm interested in the smartphone screen repair service.",
    time: "10:28 AM",
    isUser: true,
  },
  {
    id: "3",
    sender: "SleekTech Support",
    content: "Great! We offer screen repairs for all major smartphone models. Could you tell me which model you have?",
    time: "10:30 AM",
    isUser: false,
  },
]

export default function MessagesPage() {
  const searchParams = useSearchParams()
  const [conversations, setConversations] = useState(mockConversations)
  const [activeConversation, setActiveConversation] = useState<typeof mockConversations[0] | null>(mockConversations[0])
  const [messages, setMessages] = useState(mockMessages)
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Check if we're coming from a repair or store item page
  useEffect(() => {
    const repairId = searchParams.get("repair")
    const itemId = searchParams.get("item")

    if (repairId || itemId) {
      // In a real app, you would fetch the repair or item details
      const initialMessage = repairId
        ? "I'm interested in the repair service with ID: " + repairId
        : "I'm interested in the store item with ID: " + itemId

      // Add the message to the conversation
      handleSendMessage(initialMessage, true)
    }
  }, [searchParams])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (content = newMessage, isInitial = false) => {
    if (!content.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      sender: "You",
      content,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isUser: true,
    }

    setMessages((prev) => [...prev, userMessage])

    if (!isInitial) {
      setNewMessage("")
    }

    // Simulate response after a delay
    setTimeout(() => {
      const responseMessage = {
        id: (Date.now() + 1).toString(),
        sender: "SleekTech Support",
        content: "Thank you for your message. A technician will respond to your inquiry shortly.",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isUser: false,
      }

      setMessages((prev) => [...prev, responseMessage])
    }, 1000)
  }

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-120px)] gap-4">
      {/* Conversations list - hidden on mobile unless no active conversation */}
      <div
        className={`md:w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden ${activeConversation ? "hidden md:block" : "block"}`}
      >
        <div className="p-4 border-b dark:border-gray-700">
          <h2 className="font-semibold text-lg">Messages</h2>
        </div>
        <div className="overflow-y-auto h-[calc(100%-60px)]">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b dark:border-gray-700 ${
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
              {conversation.unread && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div
        className={`flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden flex flex-col ${!activeConversation ? "hidden md:flex" : "flex"}`}
      >
        {/* Chat header */}
        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setActiveConversation(null)}>
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
                className="lucide lucide-chevron-left"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Button>
            <Avatar>
              <AvatarFallback className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {activeConversation?.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <h2 className="font-semibold">{activeConversation?.name}</h2>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
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
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Message input */}
        <div className="p-4 border-t dark:border-gray-700">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendMessage()
            }}
            className="flex gap-2"
          >
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
      </div>
    </div>
  )
}
