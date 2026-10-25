"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

function getGreeting(hour: number) {
  if (hour >= 4 && hour < 11) return "Selamat pagi";
  if (hour >= 11 && hour < 15) return "Selamat siang";
  if (hour >= 15 && hour < 19) return "Selamat sore";
  return "Selamat malam";
}

export default function Greeting() {
  const [greeting, setGreeting] = useState("Selamat datang");
  const [date, setDate] = useState("");

  useEffect(() => {
    const now = new Date();

    setGreeting(getGreeting(now.getHours()));
    setDate(
      new Intl.DateTimeFormat("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(now)
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mt-7 flex flex-col items-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 0.55 }}
        className="text-[clamp(20px,2.4vw,28px)] font-medium leading-tight text-[var(--text-secondary)]"
      >
        {greeting},{" "}
        <span className="font-[family-name:var(--font-space-grotesk)] font-semibold tracking-tight text-[var(--text-primary)]">
          Reina-sama
        </span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-3 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.24em] text-[var(--text-secondary)]"
      >
        {date}
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 h-px w-16 origin-center bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
      />
    </motion.div>
  );
}