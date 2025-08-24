import { Container } from "./styles";
import { Button } from "../Button";
import { IconButton } from "../IconButon";
import { FaCirclePlus, FaCircleMinus, FaTrash } from "react-icons/fa6";

export function User({ user, increase, decrease, remove }) {
  return (
    <Container className="user-component">
      <IconButton
        icon={FaTrash}
        title={`Remover ${user.name}`}
        onClick={remove}
      />
      <div className="container-info">
        <p className="name">{user.name}</p>
        <p className="age">
          {user.age <= 1 ? `${user.age} ano` : `${user.age} anos`}
        </p>
      </div>
      <div className="container-buttons">
        <Button
          title="Decrementar Idade"
          icon={FaCircleMinus}
          onClick={decrease}
        />
        <Button
          title="Incrementar Idade"
          icon={FaCirclePlus}
          onClick={increase}
        />
      </div>
    </Container>
  );
}
