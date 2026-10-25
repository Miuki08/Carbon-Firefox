"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Search } from "lucide-react";

type SearchTarget = {
  prefix: string;
  name: string;
  url: string;
  suffix?: string;
};

const searchTargets: SearchTarget[] = [
  { 
    prefix: "gh", 
    name: "GitHub", 
    url: "https://github.com/search?q=" },
  {
    prefix: "yt",
    name: "YouTube",
    url: "https://www.youtube.com/results?search_query=",
  },
  {
    prefix: "so",
    name: "Stack Overflow",
    url: "https://stackoverflow.com/search?q=",
  },
  {
    prefix: "ot",
    name: "Otakudesu",
    url: "https://otakudesu.blog/?s=",
    suffix: "&post_type=anime",
  },
];

export default function CommandLauncher() {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const value = query.trim();
    if (!value) return;

    const [prefix, ...rest] = value.split(" ");
    const target = searchTargets.find((item) => item.prefix === prefix);

    if (target && rest.length > 0) {
      const searchQuery = encodeURIComponent(rest.join(" "));
      const finalUrl = `${target.url}${searchQuery}${target.suffix ?? ""}`;

      window.open(finalUrl, "_blank");
      return;
    }

    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(value)}`,
      "_blank"
    );
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="group mt-12 flex w-full max-w-xl items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 backdrop-blur-xl transition-colors focus-within:border-[var(--accent)]"
    >
      <Search
        size={18}
        className="text-[var(--text-secondary)] transition-colors group-focus-within:text-[var(--accent)]"
      />

      <input
        autoFocus
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search or jump to…"
        aria-label="Search or jump to"
        className="w-full bg-transparent text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-secondary)]"
      />

      <kbd className="hidden rounded-md border border-[var(--border)] px-2 py-1 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-widest text-[var(--text-secondary)] sm:block">
        Enter
      </kbd>
    </motion.form>
  );
}