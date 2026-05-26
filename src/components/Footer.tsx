"use client";

import { usePageAnalytics } from "@/lib/analytics";

export default function Footer() {
  const { pageViews, totalViews } = usePageAnalytics();

  return (
    <footer className="bg-white border-t border-gray-100 py-5 mt-auto">
      <div className="max-w-6xl mx-auto px-6 text-center text-xs text-gray-400 space-y-1">
        <p>© 2025 lazycatzzzzz. All Rights Reserved.</p>
        <p>搞笑又好玩的支付产品经理</p>
        <p className="text-gray-300">
          浏览: {pageViews} | 总计: {totalViews}
        </p>
      </div>
    </footer>
  );
}
