"use client";

import { usePageAnalytics } from "@/lib/analytics";

export default function Footer() {
  const { pageViews, totalViews } = usePageAnalytics();

  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="gradient-text font-semibold">lazycatzzzzz</span>
            <span className="text-gray-300">·</span>
            <span>搞笑又好玩的支付产品经理</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {pageViews}
            </span>
            <span className="text-gray-300">|</span>
            <span>总计 {totalViews}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-50 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} lazycatzzzzz. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
