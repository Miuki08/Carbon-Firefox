"use client";

import { motion } from "motion/react";
import Clock from "./Clock";
import Greeting from "./Greeting";
import ShortcutGrid from "./ShortcutGrid";
import WeatherWidget from "./WeatherWidget";
import FooterMark from "./FooterMark";
import CommandLauncher from "./CommandLauncher";
import TimeAccent from "./TimeAccent";

export default function NewTabShell() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[var(--background)] px-6">
      <TimeAccent />

      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="aurora aurora-three" />

      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />
      <div className="orb orb-four" />

      <div className="grain" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.72)_100%)]" />

      <WeatherWidget />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex w-full max-w-4xl flex-col items-center"
      >
        <Clock />
        <Greeting />

        <CommandLauncher />

        <div className="mt-16 w-full">
          <ShortcutGrid />
        </div>
      </motion.div>

      <FooterMark />
    </main>
  );
}