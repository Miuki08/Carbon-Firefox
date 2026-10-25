"use client";

import { motion } from "motion/react";
import { shortcuts } from "@/lib/shortcuts";

export default function ShortcutGrid() {
  const handlePointerMove = (
    event: React.PointerEvent<HTMLAnchorElement>
  ) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.05,
            delayChildren: 0.28,
          },
        },
      }}
      className="grid grid-cols-3 gap-3 sm:grid-cols-6"
    >
      {shortcuts.map((shortcut) => {
        const Icon = shortcut.icon;

        return (
          <motion.a
            key={shortcut.label}
            href={shortcut.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={shortcut.label}
            title={shortcut.label}
            onPointerMove={handlePointerMove}
            variants={{
              hidden: { opacity: 0, y: 22, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 420,
                  damping: 24,
                },
              },
            }}
            whileHover={{
              y: -5,
              scale: 1.07,
              transition: {
                type: "spring",
                stiffness: 650,
                damping: 20,
              },
            }}
            whileTap={{ scale: 0.94 }}
            className="shortcut-card group relative flex h-[76px] w-[76px] items-center justify-center rounded-[22px]"
          >
            <Icon
              size={24}
              className="relative z-10 text-[var(--text-secondary)] transition-colors duration-150 group-hover:text-[var(--accent)]"
            />
          </motion.a>
        );
      })}
    </motion.div>
  );
}