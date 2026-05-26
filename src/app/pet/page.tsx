"use client";

import { useState, useRef, useEffect } from "react";
import Cat from "@/components/Cat";
import ChatBubble from "@/components/ChatBubble";
import { chatWithCat } from "@/lib/chat";

interface Message {
  id: number;
  role: "user" | "cat";
  content: string;
}

export default function PetPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "cat",
      content: "喵~主人你好呀！欢迎来撸本喵！点击我可以摸摸我哦~有什么想聊的吗？",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const catReply = await chatWithCat(input.trim());
      const catMessage: Message = {
        id: Date.now() + 1,
        role: "cat",
        content: catReply,
      };
      setMessages((prev) => [...prev, catMessage]);
    } catch {
      const errorMessage: Message = {
        id: Date.now() + 1,
        role: "cat",
        content: "（歪头）喵？主人的消息好像被外星人劫持了...要不试试再说一遍？",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page header */}
      <div className="hero-gradient-subtle pt-24 pb-8">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">电子宠物猫</h1>
          <p className="text-sm text-gray-500">和可爱的小懒聊聊天吧</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-12">
        {/* Cat display */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4">
          <Cat />
        </div>

        {/* Chat area */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <div className="h-72 overflow-y-auto space-y-3 mb-5">
            <ChatBubble messages={messages} />
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-500 px-4 py-2 rounded-2xl rounded-bl-sm text-sm">
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="输入你想和猫咪说的话..."
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="px-5 py-3 bg-gradient-to-r from-primary to-accent text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              发送
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
