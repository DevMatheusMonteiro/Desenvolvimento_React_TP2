import { Container } from "./styles";
import { useReducer, useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Task } from "../../components/Task";

export default function Ex06() {
  const [description, setDescription] = useState("");
  const initialState = [];

  function reducer(state, action) {
    switch (action.type) {
      case "add":
        const description = action.payload;
        if (description.trim() == "") return state;
        return [
          ...state,
          {
            id: Date.now(),
            description: description,
            completed: false,
          },
        ];
      case "remove":
        return state.filter((task) => task.id != action.id);
      case "toggleCompleted":
        return state.map((task) =>
          task.id === action.id
            ? { ...task, completed: task.completed ? false : true }
            : task
        );
      default:
        return state;
    }
  }

  function handleAddTask(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      payload: description,
    });
    setDescription("");
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <div className="content">
        <form onSubmit={handleAddTask}>
          <Input
            value={description}
            id="description"
            label="Descrição Tarefa"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Entre com a descrição da tarefa..."
          />
          <Button title="Adicionar Tarefa" />
        </form>
        {state.length > 0 && (
          <div className="tasks-container">
            {state.map((task) => (
              <Task
                key={task.id}
                remove={() => dispatch({ type: "remove", id: task.id })}
                completed={task.completed}
                description={task.description}
                toggleCompleted={() =>
                  dispatch({ type: "toggleCompleted", id: task.id })
                }
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
