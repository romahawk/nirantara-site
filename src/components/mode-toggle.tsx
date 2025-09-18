"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      aria-label="Toggle dark mode"
      className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {mounted ? (isDark ? <Sun size={18}/> : <Moon size={18}/>) : <Moon size={18}/>}
    </button>
  );
}
