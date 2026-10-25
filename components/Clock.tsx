"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());

    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time
    ? new Intl.DateTimeFormat("id-ID", {
        hour: "2-digit",
        hour12: false,
      }).format(time)
    : "--";

  const minutes = time
    ? new Intl.DateTimeFormat("id-ID", {
        minute: "2-digit",
      }).format(time)
    : "--";

  const seconds = time
    ? new Intl.DateTimeFormat("id-ID", {
        second: "2-digit",
      }).format(time)
    : "--";

  return (
    <div className="flex items-end justify-center gap-2">
      <motion.h1
        initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-[clamp(72px,12vw,150px)] font-extralight leading-none tracking-tighter text-[var(--text-primary)]"
      >
        {hours}
        <motion.span
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mx-1 text-[var(--accent)]"
        >
          :
        </motion.span>
        {minutes}
      </motion.h1>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-4 font-mono text-xl text-[var(--text-secondary)]"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={seconds}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="inline-block"
          >
            {seconds}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </div>
  );
}