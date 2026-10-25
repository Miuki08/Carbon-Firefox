"use client";

import { useEffect } from "react";

function getPeriod(hour: number) {
  if (hour >= 5 && hour < 11) return "morning";
  if (hour >= 11 && hour < 15) return "day";
  if (hour >= 15 && hour < 19) return "evening";
  return "night";
}

export default function TimeAccent() {
  useEffect(() => {
    const applyPeriod = () => {
      const now = new Date();
      document.documentElement.dataset.period = getPeriod(now.getHours());
    };

    applyPeriod();

    const timer = setInterval(applyPeriod, 60 * 1000);

    return () => clearInterval(timer);
  }, []);

  return null;
}