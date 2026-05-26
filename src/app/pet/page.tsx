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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <h1 className="text-xl font-semibold text-center text-gray-900 mb-6">电子宠物猫</h1>

        {/* 猫咪展示区 */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 mb-4">
          <Cat />
        </div>

        {/* 对话区域 */}
        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="h-72 overflow-y-auto space-y-3 mb-4">
            <ChatBubble messages={messages} />
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-500 px-4 py-2 rounded-2xl rounded-bl-sm text-sm">
                  打字中...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* 输入框 */}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="输入你想和猫咪说的话..."
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="px-5 py-2.5 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              发送
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}