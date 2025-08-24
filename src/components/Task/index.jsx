import { FaTrash } from "react-icons/fa6";
import { IconButton } from "../IconButon";
import { Container } from "./styles";
import { Button } from "../Button";

export function Task({
  description,
  completed = false,
  toggleCompleted,
  remove,
}) {
  return (
    <Container $completed={completed}>
      <IconButton icon={FaTrash} onClick={remove} />
      <p>{description}</p>
      <Button
        title={completed ? "Marcar como não concluída" : "Marca como concluída"}
        onClick={toggleCompleted}
      />
    </Container>
  );
}
