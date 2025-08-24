import { Container } from "./styles";
import { User } from "../../components/User";
import { useState } from "react";

export default function Ex01() {
  const [user, setUser] = useState({
    name: "Matheus",
    age: 25,
  });

  function increase() {
    setUser((prevState) => ({
      ...prevState,
      age: prevState.age + 1,
    }));
  }
  function decrease() {
    user.age > 0
      ? setUser((prevState) => ({
          ...prevState,
          age: prevState.age - 1,
        }))
      : user;
  }

  return (
    <Container>
      <User user={user} increase={increase} decrease={decrease} />
    </Container>
  );
}
