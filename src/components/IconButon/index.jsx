import { Container } from "./styles";

export function IconButton({ icon: Icon, title, ...rest }) {
  return (
    <Container title={title} className="iconButton-component" {...rest}>
      <Icon />
    </Container>
  );
}
