"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Cat, { CatExpression } from "@/components/Cat";
import ChatBubble from "@/components/ChatBubble";
import { chatWithCat, ConversationMessage } from "@/lib/chat";

interface DisplayMessage {
  id: number;
  role: "user" | "cat";
  content: string;
}

const MOOD_MAP: Record<CatExpression, { emoji: string; label: string; bg: string; text: string }> = {
  normal:  { emoji: "😺", label: "心情不错",   bg: "bg-blue-50",   text: "text-blue-600"   },
  happy:   { emoji: "😸", label: "超级开心！", bg: "bg-pink-50",   text: "text-pink-600"   },
  sleepy:  { emoji: "😴", label: "有点困了…",  bg: "bg-indigo-50", text: "text-indigo-600" },
  curious: { emoji: "🐱", label: "好奇中",     bg: "bg-amber-50",  text: "text-amber-600"  },
};

function PawPrint({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="currentColor">
      <ellipse cx="20" cy="27" rx="9"  ry="10" />
      <ellipse cx="9"  cy="16" rx="5"  ry="6"  />
      <ellipse cx="31" cy="16" rx="5"  ry="6"  />
      <ellipse cx="14" cy="8"  rx="3.5" ry="4.5" />
      <ellipse cx="26" cy="8"  rx="3.5" ry="4.5" />
    </svg>
  );
}

export default function PetPage() {
  const [messages, setMessages] = useState<DisplayMessage[]>([
    { id: 1, role: "cat", content: "喵~主人你好呀！欢迎来撸本喵！点击我可以摸摸我哦~有什么想聊的吗？" },
  ]);
  const [input,         setInput]         = useState("");
  const [isLoading,     setIsLoading]     = useState(false);
  const [catExpression, setCatExpression] = useState<CatExpression>("normal");

  // 对话历史 ref：同步更新，不触发重渲染
  const historyRef = useRef<ConversationMessage[]>([
    { role: "assistant", content: "喵~主人你好呀！欢迎来撸本喵！点击我可以摸摸我哦~有什么想聊的吗？" },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const text = input.trim();
    setInput("");

    // 显示层：追加用户消息
    const userDisplay: DisplayMessage = { id: Date.now(), role: "user", content: text };
    setMessages((prev) => [...prev, userDisplay]);

    // 历史层：追加用户轮次
    historyRef.current = [...historyRef.current, { role: "user", content: text }];

    setIsLoading(true);
    try {
      // 传入当前用户消息之前的所有历史（不含刚追加的这条）
      const reply = await chatWithCat(text, historyRef.current.slice(0, -1));

      const catDisplay: DisplayMessage = { id: Date.now() + 1, role: "cat", content: reply };
      setMessages((prev) => [...prev, catDisplay]);

      // 历史层：追加猫咪回复
      historyRef.current = [...historyRef.current, { role: "assistant", content: reply }];
    } catch (err) {
      const msg = err instanceof Error ? err.message : "";
      const fallback =
        msg === "timeout"
          ? "（打哈欠）喵~本喵想了太久了，脑子转不动了...主人再问一次吧？"
          : msg.startsWith("api_")
          ? `（挠头）喵？服务器好像出了点问题（${msg}），主人稍后再试试~`
          : "（歪头）喵？主人的消息好像被外星人劫持了...要不试试再说一遍？";
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: "cat", content: fallback }]);
      historyRef.current = [...historyRef.current, { role: "assistant", content: fallback }];
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleExpressionChange = useCallback((expr: CatExpression) => {
    setCatExpression(expr);
  }, []);

  const mood = MOOD_MAP[catExpression];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 页面标题 */}
      <div className="hero-gradient-subtle pt-24 pb-8">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">电子宠物猫</h1>
          <p className="text-sm text-gray-500">和可爱的小懒聊聊天吧 · 由 DeepSeek V4 Pro 驱动</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-12 space-y-4">
        {/* 猫咪展示区 */}
        <div
          className="relative overflow-hidden rounded-2xl border border-blue-100 shadow-sm p-6"
          style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f5f3ff 50%, #fdf2f8 100%)" }}
        >
          {/* 装饰爪印 */}
          <PawPrint className="absolute top-3  left-4   w-8  h-8  text-blue-100   rotate-12  opacity-50" />
          <PawPrint className="absolute top-7  right-7  w-6  h-6  text-purple-100 -rotate-15 opacity-50" />
          <PawPrint className="absolute bottom-3 left-14 w-7  h-7  text-pink-100   rotate-45  opacity-50" />
          <PawPrint className="absolute bottom-5 right-5 w-9  h-9  text-indigo-100 -rotate-10 opacity-50" />

          <Cat onExpressionChange={handleExpressionChange} />

          {/* 心情标签 */}
          <div className="mt-5 flex justify-center">
            <span
              className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-sm font-medium transition-all duration-500 ${mood.bg} ${mood.text}`}
            >
              <span>{mood.emoji}</span>
              <span>小懒现在：{mood.label}</span>
            </span>
          </div>
          <p className="text-center text-gray-400 text-xs mt-1.5">点击猫咪可以摸摸她~</p>
        </div>

        {/* 聊天区域 */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          {/* 消息列表 */}
          <div className="h-64 md:h-80 overflow-y-auto mb-4 pr-1">
            <ChatBubble messages={messages} />

            {/* 加载中 */}
            {isLoading && (
              <div className="flex items-end gap-2 mt-3">
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm shadow-sm"
                  style={{ background: "linear-gradient(135deg, #dbeafe, #ede9fe)" }}
                >
                  🐱
                </div>
                <div className="bg-gray-100 px-4 py-2.5 rounded-2xl rounded-bl-sm">
                  <span className="inline-flex gap-1.5 items-center">
                    <span className="w-2 h-2 bg-blue-300   rounded-full animate-bounce" style={{ animationDelay: "0ms"   }} />
                    <span className="w-2 h-2 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-pink-300   rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* 输入行 */}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="输入你想和小懒说的话…"
              disabled={isLoading}
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all disabled:opacity-60"
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
