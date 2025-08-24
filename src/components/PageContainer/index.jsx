import { Container } from "./styles";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { Aside } from "../Aside";

export function PageContainer({ main: Main }) {
  return (
    <Container>
      <Header />
      <Aside />
      <Main />
      <Footer />
    </Container>
  );
}
