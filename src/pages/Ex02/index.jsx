import { Container } from "./styles";
import { useReducer } from "react";
import { User } from "../../components/User";
export default function Ex02() {
  const initialState = {
    name: "Matheus",
    age: 25,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "incrementar":
        return { ...state, age: state.age + 1 };
      case "decrementar":
        return state.age > 0 ? { ...state, age: state.age - 1 } : state;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Container>
      <User
        user={state}
        incrementar={() => dispatch({ type: "incrementar" })}
        decrementar={() => dispatch({ type: "decrementar" })}
      />
    </Container>
  );
}
