import { useTheme } from "../ThemeContext";

function ThemeSwitcher() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme}>{isDarkMode ? "🌖" : "🌒"}</button>
    </div>
  );
}

export default ThemeSwitcher;
