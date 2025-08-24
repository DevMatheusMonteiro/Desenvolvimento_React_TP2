import { Container } from "./styles";
import { Input } from "../../components/Input";
import { useEffect, useState } from "react";
import { fecthNames } from "../../services/ibge_api";
import { da } from "@faker-js/faker";
export default function Ex16() {
  const [search, setSearch] = useState("");
  const [names, setNames] = useState([]);

  function validateYear(year) {
    if (year.length != 4) return "";
    let decade = Number(year);
    if (isNaN(decade)) return "";
    decade = decade / 10;
    return decade.toString().split(".")[0] + "0";
  }

  async function fetchNames() {
    const decade = validateYear(search);
    const data = await fecthNames(decade);
    if (!Array.isArray(data) && data.statusCode == 500) {
      return setNames([]);
    }
    const names = data.length > 0 ? data[0].res : [];
    setNames(names);
  }

  useEffect(() => {
    fetchNames(search);
  }, [search]);

  return (
    <Container>
      <Input
        type="number"
        label="Ano"
        placeholder="Entre com o ano (yyyy)..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {names.length > 0 && (
        <ul className="list">
          {names.map((name) => (
            <li key={name.ranking}>
              <div>
                <span>{name.ranking}.</span>
                <span>Nome: {name.nome}</span>
              </div>
              <span>Frequencia: {name.frequencia}</span>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
