import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const html = document.querySelector("html");
    if (!html) return;

    if (theme === "dark") {
      html.setAttribute("class", "dark");
    } else {
      html.removeAttribute("class");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-2 rounded-md border bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
