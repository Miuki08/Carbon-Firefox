"use client";

import { AnimatePresence, motion } from "motion/react";
import { useNow } from "@/lib/useNow";

export default function Clock() {
  const timestamp = useNow();

  const date = timestamp === 0 ? null : new Date(timestamp);

  const hours = date
    ? new Intl.DateTimeFormat("id-ID", {
        hour: "2-digit",
        hour12: false,
      }).format(date)
    : "--";

  const minutes = date
    ? new Intl.DateTimeFormat("id-ID", {
        minute: "2-digit",
      }).format(date)
    : "--";

  const seconds = date
    ? new Intl.DateTimeFormat("id-ID", {
        second: "2-digit",
      }).format(date)
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