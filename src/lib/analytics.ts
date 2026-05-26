"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "pw_page_views";

interface AnalyticsData {
  pages: Record<string, number>;
  totalViews: number;
}

function load(): AnalyticsData {
  if (typeof window === "undefined") return { pages: {}, totalViews: 0 };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { pages: {}, totalViews: 0 };
  } catch {
    return { pages: {}, totalViews: 0 };
  }
}

function save(data: AnalyticsData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch { /* quota exceeded, ignore */ }
}

export function usePageAnalytics() {
  const [pageViews, setPageViews] = useState(0);
  const [totalViews, setTotalViews] = useState(0);

  useEffect(() => {
    const path = window.location.pathname;
    const data = load();

    data.pages[path] = (data.pages[path] || 0) + 1;
    data.totalViews = data.totalViews + 1;

    save(data);
    setPageViews(data.pages[path]);
    setTotalViews(data.totalViews);
  }, []);

  return { pageViews, totalViews };
}
