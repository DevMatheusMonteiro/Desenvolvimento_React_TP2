import { useMemo, useState } from "react";
import { Container } from "./styles";
import { Input } from "../../components/Input";

export default function Ex07() {
  const [number, setNumber] = useState("");

  function calculateFactorial(n) {
    if (n < 0) return "Não é possível calcular fatorial de número negativos!";
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) {
      res *= i;
    }
    return res;
  }

  const factorial = useMemo(() => {
    const n = Number(number);
    if (isNaN(n)) return "Digite um número valido";
    return calculateFactorial(n);
  }, [number]);
  return (
    <Container>
      <Input
        label="Digite um número"
        placeholder="Digite um número..."
        id="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>
        Resultado fatorial: <span>{factorial}</span>
      </p>
    </Container>
  );
}
