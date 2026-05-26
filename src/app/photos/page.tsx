"use client";

import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const images = [
  { src: `${basePath}/photos/211ca3ceb9f391ecc36bcedff847203e.jpg`, alt: "照片1" },
  { src: `${basePath}/photos/358c2b3c78382055f211283702898539.jpg`, alt: "照片2" },
  { src: `${basePath}/photos/71bc9a9dfde168ad50ff28325aa54fee.jpg`, alt: "照片3" },
  { src: `${basePath}/photos/73c622b08739a01ba79044abe895db25.jpg`, alt: "照片4" },
  { src: `${basePath}/photos/c4c4be46364f702a490dc3941648ae5d.jpg`, alt: "照片5" },
  { src: `${basePath}/photos/cf8c5a85b71e052e66d92ac1ce5c5b98.jpg`, alt: "照片6" },
  { src: `${basePath}/photos/d02d65c8afdb0c78d8c98a76f596965b.jpg`, alt: "照片7" },
  { src: `${basePath}/photos/d24af4dbdf62205f12235c7fca8818f8.jpg`, alt: "照片8" },
  { src: `${basePath}/photos/ed9940533c5aee389c84fda477c357aa.jpg`, alt: "照片9" },
  { src: `${basePath}/photos/f97cb6796e762ac37173dbd414943011.jpg`, alt: "照片10" },
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
    <div className="min-h-screen bg-slate-50">
      <div className="hero-gradient-subtle pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">图片集</h1>
          <p className="text-sm text-gray-500">记录那些美好的瞬间</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-12">
        {/* Carousel */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="relative h-[400px] md:h-[500px]">
            <div
              className="flex transition-transform duration-400 ease-out h-full"
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

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-xl border border-gray-200 flex items-center justify-center transition-all hover:shadow-md"
              aria-label="上一张"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-xl border border-gray-200 flex items-center justify-center transition-all hover:shadow-md"
              aria-label="下一张"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-6 h-2 bg-primary"
                      : "w-2 h-2 bg-white/60 hover:bg-white"
                  }`}
                  aria-label={`跳转到第${index + 1}张`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-2 mt-5 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-16 h-12 rounded-xl overflow-hidden ring-2 ring-offset-2 transition-all ${
                index === currentIndex
                  ? "ring-primary ring-offset-white"
                  : "ring-transparent hover:ring-gray-300"
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
      </div>
    </div>
  );
}
