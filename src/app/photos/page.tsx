"use client";

import { useState } from "react";

const images = [
  { src: "/photos/211ca3ceb9f391ecc36bcedff847203e.jpg", alt: "照片1" },
  { src: "/photos/358c2b3c78382055f211283702898539.jpg", alt: "照片2" },
  { src: "/photos/71bc9a9dfde168ad50ff28325aa54fee.jpg", alt: "照片3" },
  { src: "/photos/73c622b08739a01ba79044abe895db25.jpg", alt: "照片4" },
  { src: "/photos/c4c4be46364f702a490dc3941648ae5d.jpg", alt: "照片5" },
  { src: "/photos/cf8c5a85b71e052e66d92ac1ce5c5b98.jpg", alt: "照片6" },
  { src: "/photos/d02d65c8afdb0c78d8c98a76f596965b.jpg", alt: "照片7" },
  { src: "/photos/d24af4dbdf62205f12235c7fca8818f8.jpg", alt: "照片8" },
  { src: "/photos/ed9940533c5aee389c84fda477c357aa.jpg", alt: "照片9" },
  { src: "/photos/f97cb6796e762ac37173dbd414943011.jpg", alt: "照片10" },
];

export default function PhotosPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-xl font-semibold text-center text-gray-900 mb-6">图片集</h1>

        {/* 轮播图容器 */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          {/* 图片展示区 */}
          <div className="relative h-[400px] md:h-[500px]">
            <div
              className="flex transition-transform duration-300 ease-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="min-w-full h-full flex items-center justify-center bg-gray-900"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* 左右箭头 */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full border border-gray-200 flex items-center justify-center transition-colors"
              aria-label="上一张"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full border border-gray-200 flex items-center justify-center transition-colors"
              aria-label="下一张"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* 指示器 */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-blue-500"
                      : "bg-white/60 hover:bg-white"
                  }`}
                  aria-label={`跳转到第${index + 1}张`}
                />
              ))}
            </div>

            {/* 页码 */}
            <div className="absolute top-4 right-4 bg-gray-900/60 text-white px-2.5 py-1 rounded text-xs">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>

        {/* 缩略图 */}
        <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-blue-500"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-4">
          当前第 {currentIndex + 1} 张，共 {images.length} 张
        </p>
      </div>
    </div>
  );
}