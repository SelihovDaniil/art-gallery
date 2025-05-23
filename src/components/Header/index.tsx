import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { Dark, Light, Logo } from "@/components/Icons";
import styles from "./header.module.scss";

export default function Header() {
  const prefersDarkTheme = localStorage.getItem("theme") === "dark";
  const [theme, setTheme] = useState<"light" | "dark">(prefersDarkTheme ? "dark" : "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    }
    else {
      setTheme("light");
    }
  };

  return (
    <nav className={styles.header}>
      <Logo className={styles.logo} />
      <Button onClick={toggleTheme}>{theme === "dark" ? <Dark /> : <Light />}</Button>
    </nav>
  );
}
