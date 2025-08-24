import { Container } from "./styles";
import { useReducer, useState } from "react";
import { User } from "../../components/User";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Ex03() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const initialState = [];

  function reducer(state, action) {
    switch (action.type) {
      case "add":
        const name = action.payload.name;
        const age = action.payload.age;
        if (
          name.trim() == "" ||
          age.trim() == "" ||
          isNaN(Number(age)) ||
          Number(age) < 0
        )
          return state;
        return [
          ...state,
          {
            id: Date.now(),
            name: action.payload.name,
            age: Number(action.payload.age),
          },
        ];
      case "increase":
        return state.map((user) =>
          user.id === action.id ? { ...user, age: user.age + 1 } : user
        );
      case "decrease":
        return state.map((user) =>
          user.id === action.id
            ? { ...user, age: Math.max(user.age - 1, 0) }
            : user
        );
      default:
        return state;
    }
  }

  function handleAddUser(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      payload: { name, age },
    });
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <div className="content">
        <form onSubmit={handleAddUser}>
          <div className="inputs-container">
            <Input
              id="name"
              label="Nome"
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite o nome do usuário..."
            />
            <Input
              type="number"
              id="age"
              label="Idade"
              onChange={(e) => setAge(e.target.value)}
              placeholder="Digite a idade do usuário..."
            />
          </div>
          <Button title="Adicionar Usuário" />
        </form>
        {state.length > 0 && (
          <div className="users-container">
            {state.map((user) => (
              <User
                key={user.id}
                user={user}
                increase={() => dispatch({ type: "increase", id: user.id })}
                decrease={() => dispatch({ type: "decrease", id: user.id })}
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
