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
      <div className="relative w-48 h-48 mx-auto">
        {/* Ears */}
        <div className="absolute -top-5 left-5 w-8 h-10 bg-gradient-to-b from-blue-300 to-blue-200 rounded-t-full rotate-[-15deg]" />
        <div className="absolute -top-5 left-5 w-5 h-7 bg-pink-200 rounded-t-full rotate-[-15deg] mt-1 ml-1" />
        <div className="absolute -top-5 right-5 w-8 h-10 bg-gradient-to-b from-blue-300 to-blue-200 rounded-t-full rotate-[15deg]" />
        <div className="absolute -top-5 right-5 w-5 h-7 bg-pink-200 rounded-t-full rotate-[15deg] mt-1 mr-1" />

        {/* Head */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-28 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 rounded-3xl transition-all duration-300 shadow-sm ${
            expression === "happy" ? "scale-110" : expression === "sleepy" ? "scale-95" : ""
          }`}
        >
          {/* Eyes */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-7">
            <div
              className={`w-6 h-6 bg-gray-800 rounded-full relative transition-all duration-300 ${
                expression === "sleepy" ? "h-1.5 mt-2" : ""
              }`}
            >
              <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full" />
            </div>
            <div
              className={`w-6 h-6 bg-gray-800 rounded-full relative transition-all duration-300 ${
                expression === "sleepy" ? "h-1.5 mt-2" : ""
              }`}
            >
              <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full" />
            </div>
          </div>

          {/* Nose */}
          <div className="absolute top-[52px] left-1/2 -translate-x-1/2 w-3.5 h-2.5 bg-pink-400 rounded-full" />

          {/* Mouth */}
          <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-8 h-3 border-b-2 border-gray-400 rounded-b-full" />

          {/* Whiskers */}
          <div className="absolute top-12 -left-2 w-7 h-px bg-gray-300 -rotate-[15deg] rounded-full" />
          <div className="absolute top-14 -left-2 w-7 h-px bg-gray-300 rounded-full" />
          <div className="absolute top-16 -left-2 w-7 h-px bg-gray-300 rotate-[15deg] rounded-full" />
          <div className="absolute top-12 -right-2 w-7 h-px bg-gray-300 rotate-[15deg] rounded-full" />
          <div className="absolute top-14 -right-2 w-7 h-px bg-gray-300 rounded-full" />
          <div className="absolute top-16 -right-2 w-7 h-px bg-gray-300 -rotate-[15deg] rounded-full" />
        </div>

        {/* Body */}
        <div className="absolute top-[88px] left-1/2 -translate-x-1/2 w-24 h-20 bg-gradient-to-b from-blue-200 to-blue-100 rounded-3xl">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-12 bg-blue-50/80 rounded-2xl" />
        </div>

        {/* Tail */}
        <div
          className="absolute top-[96px] -right-1 w-16 h-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full origin-left transition-transform duration-300"
          style={{
            animation: isWagging ? "wag 0.25s ease-in-out infinite alternate" : "none",
          }}
        />
      </div>

      <p className="text-center text-gray-400 text-sm mt-3">点击摸摸我~</p>

      <style jsx>{`
        @keyframes wag {
          from { transform: rotate(-15deg); }
          to { transform: rotate(15deg); }
        }
      `}</style>
    </div>
  );
}
