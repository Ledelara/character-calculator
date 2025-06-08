import { Header } from "../StyledComponents/Header/Header";
import { ThemeToggle } from "../StyledComponents/ThemeToggle/ThemeToggle";

interface HeaderProps {
  themeName: "light" | "dark";
  setThemeName: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

export default function HeaderComponent({ themeName, setThemeName }: HeaderProps) {

  const handleSaveTheme = () => {
    const newTheme = themeName === "light" ? "dark" : "light";
    setThemeName(newTheme); 
    localStorage.setItem("theme", newTheme);
  }

  return (
    <Header>
      <img 
        src={themeName === "light" ? "/assets/images/logo-light-theme.svg" : "/assets/images/logo-dark-theme.svg"}
        alt="Logo" 
        style={{ 
          width: "150px", 
          height: "50px",
        }} 
      />
      {
        <ThemeToggle onClick={handleSaveTheme}>
          {themeName === "light" ? (
            <img src="/assets/images/icon-moon.svg" alt="Dark Mode" />
          ) : (
            <img src="/assets/images/icon-sun.svg" alt="Light Mode" />
          )}
        </ThemeToggle>
      }
    </Header>
  )
}