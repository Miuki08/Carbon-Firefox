"use client";

import { useSyncExternalStore } from "react";
import { motion } from "motion/react";
import { Focus } from "lucide-react";

const FOCUS_MODE_KEY = "carbon:focus-mode";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(FOCUS_MODE_KEY) === "true";
}

function getServerSnapshot(): boolean {
  return false;
}

export default function FocusModeToggle() {
  const isFocused = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const toggle = () => {
    const nextState = !getSnapshot();
    localStorage.setItem(FOCUS_MODE_KEY, nextState ? "true" : "false");
    document.documentElement.dataset.focusMode = nextState ? "true" : "false";
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      onClick={toggle}
      aria-label={isFocused ? "Disable focus mode" : "Enable focus mode"}
      aria-pressed={isFocused}
      className="absolute bottom-6 right-6 z-20 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 hover:bg-[var(--surface)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
    >
      <Focus
        size={18}
        className="text-[var(--text-secondary)] transition-colors duration-200"
        strokeWidth={1.5}
      />
    </motion.button>
  );
}
