import { Container } from "./styles";

export function Button({ title, icon: Icon, ...rest }) {
  return (
    <Container title={title} className="button-component" {...rest}>
      {Icon ? <Icon /> : null}
      <span>{title}</span>
    </Container>
  );
}
