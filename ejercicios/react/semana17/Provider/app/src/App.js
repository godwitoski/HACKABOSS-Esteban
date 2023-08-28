import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <header>
        <Header />
        <ThemeSwitcher />
      </header>
      <main>
        <Content />
      </main>
    </ThemeProvider>
  );
}

export default App;
