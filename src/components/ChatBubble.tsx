"use client";

interface Message {
  id: number;
  role: "user" | "cat";
  content: string;
}

interface ChatBubbleProps {
  messages: Message[];
}

export default function ChatBubble({ messages }: ChatBubbleProps) {
  return (
    <div className="space-y-3">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex items-end gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          {/* 猫咪头像（仅 cat 消息左侧显示） */}
          {msg.role === "cat" && (
            <div
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm shadow-sm"
              style={{ background: "linear-gradient(135deg, #dbeafe, #ede9fe)" }}
            >
              🐱
            </div>
          )}

          <div
            className={`max-w-[72%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
              msg.role === "user"
                ? "bg-gradient-to-r from-primary to-accent text-white rounded-br-sm shadow-sm"
                : "bg-gray-100 text-gray-700 rounded-bl-sm"
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}
    </div>
  );
}
