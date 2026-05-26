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
      {visibleMessages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-xs px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
              msg.role === "user"
                ? "bg-gradient-to-r from-primary to-accent text-white rounded-br-md shadow-sm"
                : "bg-gray-100 text-gray-700 rounded-bl-md"
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}
    </div>
  );
}
