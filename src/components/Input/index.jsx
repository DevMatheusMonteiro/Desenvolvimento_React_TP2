import { Container } from "./styles";

export function Input({ label, id, ...rest }) {
  return (
    <Container className="input-component">
      <label htmlFor={id}>{label}</label>
      <div className="input-container">
        <input id={id} {...rest} />
      </div>
    </Container>
  );
}
