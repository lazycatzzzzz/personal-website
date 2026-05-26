"use client";

import { useEffect, useState } from "react";

interface Message {
  id: number;
  role: "user" | "cat";
  content: string;
}

interface ChatBubbleProps {
  messages: Message[];
}

export default function ChatBubble({ messages }: ChatBubbleProps) {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      setVisibleMessages((prev) => {
        if (prev.length === 0 || prev[prev.length - 1].id !== lastMessage.id) {
          return [...prev, lastMessage];
        }
        return prev;
      });
    }
  }, [messages]);

  return (
    <div className="space-y-3 max-w-md mx-auto">
      {visibleMessages.map((msg, index) => (
        <div
          key={msg.id}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div
            className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
              msg.role === "user"
                ? "bg-orange-400 text-white rounded-br-sm"
                : "bg-white text-gray-800 border border-gray-100 rounded-bl-sm shadow-sm"
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}
    </div>
  );
}