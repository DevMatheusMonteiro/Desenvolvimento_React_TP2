import { Container } from "./styles";
import { FaSun, FaMoon } from "react-icons/fa6";
import { useTheme } from "../../contexts/ThemeContext";
import { IconButton } from "../IconButon";

export function Header() {
  const { toggleTheme, theme } = useTheme();
  return (
    <Container>
      <h1>Teste de Performance 2</h1>
      <IconButton
        title={
          theme.title == "light"
            ? "Trocar para tema o escuro"
            : "Trocar para tema o claro"
        }
        onClick={toggleTheme}
        icon={theme.title == "light" ? FaMoon : FaSun}
      />
    </Container>
  );
}
