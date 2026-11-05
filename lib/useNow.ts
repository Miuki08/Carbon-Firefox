"use client";

import { useSyncExternalStore } from "react";

let currentTime = 0;
const listeners = new Set<() => void>();

function notify() {
  currentTime = Date.now();

  for (const listener of listeners) {
    listener();
  }
}

function startTimer() {
  notify();

  const timer = setInterval(notify, 1000);

  return () => clearInterval(timer);
}

let stopTimer: (() => void) | null = null;

function subscribe(listener: () => void) {
  listeners.add(listener);

  if (!stopTimer) {
    stopTimer = startTimer();
  }

  return () => {
    listeners.delete(listener);

    if (listeners.size === 0 && stopTimer) {
      stopTimer();
      stopTimer = null;
      currentTime = 0;
    }
  };
}

function getSnapshot(): number {
  return currentTime;
}

function getServerSnapshot(): number {
  return 0;
}

export function useNow(): number {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}