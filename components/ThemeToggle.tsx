"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = typeof window !== "undefined" && localStorage.getItem("theme") === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", next ? "dark" : "light");
    }
    document.documentElement.classList.toggle("dark", next);
  }

  if (!mounted) return null;
  return (
    <button aria-label="Toggle theme" onClick={toggle} className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:opacity-80">
      <img src={dark ? "/svg/icons/sun.svg" : "/svg/icons/moon.svg"} alt="" className="h-5 w-5" />
    </button>
  );
}
