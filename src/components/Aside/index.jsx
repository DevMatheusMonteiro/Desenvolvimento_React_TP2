import { useLocation, Link } from "react-router-dom";
import { Container } from "./styles";

export function Aside() {
  const pages = Array.from({ length: 16 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Container>
      <nav>
        <ul>
          {pages.map((num) => (
            <li key={num} data-active={`/ex${num}` == pathname}>
              <Link to={`/ex${num}`}>Ex{num}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
