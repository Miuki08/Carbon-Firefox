"use client";

import { motion } from "motion/react";

export default function FooterMark() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="absolute bottom-6 left-6 z-20 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[var(--text-secondary)]"
    >
      <span>Carbon</span>
      <span className="h-px w-6 bg-[var(--border)]" />
      <span>v0.1</span>
    </motion.div>
  );
}