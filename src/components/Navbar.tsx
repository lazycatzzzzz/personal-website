"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/blog", label: "博客" },
  { href: "/pet", label: "电子宠物" },
  { href: "/photos", label: "图片" },
  { href: "/videos", label: "视频" },
  { href: "/contact", label: "联系我" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          <span className="gradient-text">lazycat</span>
          <span className="text-gray-400 font-normal text-sm ml-1">zzzzz</span>
        </Link>

        {/* 桌面端导航 */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-primary bg-primary/8"
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* 移动端汉堡按钮 */}
        <button
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-50 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
        >
          <span className={`w-5 h-0.5 bg-gray-600 rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-gray-600 rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"}`}
        style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)" }}
      >
        <ul className="px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                    isActive ? "text-primary bg-primary/8" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                  {isActive && <span className="ml-auto w-1.5 h-1.5 bg-primary rounded-full" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
