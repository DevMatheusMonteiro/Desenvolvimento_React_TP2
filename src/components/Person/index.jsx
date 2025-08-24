import { Container } from "./styles";

export function Person({ name, job }) {
  return (
    <Container>
      <h3>{name}</h3>
      <p>{job}</p>
    </Container>
  );
}
