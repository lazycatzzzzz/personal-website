"use client";

import { useState } from "react";

interface CatProps {
  isAnimating?: boolean;
}

export default function Cat({ isAnimating = false }: CatProps) {
  const [expression, setExpression] = useState<"normal" | "happy" | "sleepy">("normal");
  const [isWagging, setIsWagging] = useState(false);

  const handleClick = () => {
    setIsWagging(true);
    setExpression("happy");
    setTimeout(() => {
      setIsWagging(false);
      setExpression("normal");
    }, 1000);
  };

  return (
    <div
      onClick={handleClick}
      className={`relative cursor-pointer select-none ${isAnimating ? "animate-bounce" : ""}`}
    >
      {/* 猫咪身体 */}
      <div className="relative w-48 h-48 mx-auto">
        {/* 头 */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-28 bg-gradient-to-b from-blue-100 to-blue-200 rounded-full transition-all duration-300 ${
            expression === "happy" ? "scale-110" : expression === "sleepy" ? "scale-95" : ""
          }`}
        >
          {/* 耳朵 */}
          <div className="absolute -top-4 left-2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-blue-200" />
          <div className="absolute -top-4 right-2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-blue-200" />

          {/* 眼睛 */}
          <div className="absolute top-8 left-6 flex gap-6">
            <div
              className={`w-6 h-6 bg-gray-800 rounded-full relative transition-all duration-300 ${
                expression === "sleepy" ? "h-2" : ""
              }`}
            >
              <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full" />
            </div>
            <div
              className={`w-6 h-6 bg-gray-800 rounded-full relative transition-all duration-300 ${
                expression === "sleepy" ? "h-2" : ""
              }`}
            >
              <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full" />
            </div>
          </div>

          {/* 鼻子 */}
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-3 h-2 bg-pink-400 rounded-full" />

          {/* 嘴巴 */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-8 h-4">
            <div className={`border-b-2 border-gray-400 rounded-b-full transition-all duration-300 ${expression === "happy" ? "border-pink-400" : ""}`} />
          </div>

          {/* 胡须 */}
          <div className="absolute top-12 left-0 w-6 h-0.5 bg-gray-300 -rotate-12" />
          <div className="absolute top-14 left-0 w-6 h-0.5 bg-gray-300 -rotate-6" />
          <div className="absolute top-16 left-0 w-6 h-0.5 bg-gray-300 rotate-6" />
          <div className="absolute top-12 right-0 w-6 h-0.5 bg-gray-300 rotate-12" />
          <div className="absolute top-14 right-0 w-6 h-0.5 bg-gray-300 rotate-6" />
          <div className="absolute top-16 right-0 w-6 h-0.5 bg-gray-300 -rotate-6" />
        </div>

        {/* 身体 */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-24 h-20 bg-gradient-to-b from-blue-100 to-blue-200 rounded-full">
          {/* 肚子 */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-12 bg-blue-50 rounded-full" />
        </div>

        {/* 尾巴 */}
        <div
          className={`absolute top-28 right-0 w-16 h-4 bg-blue-200 rounded-full origin-left transition-transform duration-300 ${
            isWagging ? "rotate-[-20deg]" : "rotate-0"
          }`}
          style={{
            transform: isWagging ? "rotate(-20deg)" : "rotate(0deg)",
            animation: isWagging ? "wag 0.3s ease-in-out infinite alternate" : "none",
          }}
        />
      </div>

      {/* 点击提示 */}
      <p className="text-center text-gray-400 text-sm mt-2">点击摸摸我~</p>

      <style jsx>{`
        @keyframes wag {
          from {
            transform: rotate(-10deg);
          }
          to {
            transform: rotate(10deg);
          }
        }
      `}</style>
    </div>
  );
}