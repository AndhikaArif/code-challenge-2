"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved !== null) return saved === "true";
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", String(isDark));
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div
        className={`min-h-screen transition-colors duration-500 ${
          isDark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// 4️⃣ Hook untuk akses context dengan mudah
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useTheme harus dipakai di dalam ThemeProvider!");
  return context;
}
