"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Cloud,
  CloudRain,
  CloudSun,
  Sun,
  CloudSnow,
  CloudFog,
} from "lucide-react";

const LATITUDE = -6.595;
const LONGITUDE = 106.816;

const weatherIcons: Record<number, React.ElementType> = {
  0: Sun,
  1: CloudSun,
  2: CloudSun,
  3: Cloud,
  45: CloudFog,
  48: CloudFog,
  51: CloudRain,
  53: CloudRain,
  55: CloudRain,
  61: CloudRain,
  63: CloudRain,
  65: CloudRain,
  71: CloudSnow,
  73: CloudSnow,
  75: CloudSnow,
  80: CloudRain,
  81: CloudRain,
  82: CloudRain,
  95: CloudRain,
};

export default function WeatherWidget() {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [weatherCode, setWeatherCode] = useState<number | null>(null);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,weather_code&timezone=auto`
        );

        const data = await response.json();

        setTemperature(Math.round(data.current.temperature_2m));
        setWeatherCode(data.current.weather_code);
      } catch {
        setTemperature(null);
      }
    };

    loadWeather();
  }, []);

  const Icon =
    weatherCode !== null ? weatherIcons[weatherCode] ?? CloudSun : CloudSun;

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute right-6 top-6 z-20 flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 backdrop-blur-xl"
    >
      <Icon size={20} className="text-[var(--accent)]" />

      <div className="flex items-baseline gap-1">
        <span className="text-sm font-medium text-[var(--text-primary)]">
          {temperature !== null ? `${temperature}°` : "--°"}
        </span>

        <span className="text-xs text-[var(--text-secondary)]">C</span>
      </div>
    </motion.div>
  );
}