import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Person } from "../../components/Person";
import { use, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";

export default function Ex09() {
  const [search, setSearch] = useState("");

  const people = useMemo(
    () =>
      Array.from({ length: 100 }, () => ({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        job: faker.person.jobTitle(),
      })),
    []
  );

  const filteredPeople = useMemo(
    () =>
      people.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search, people]
  );

  return (
    <Container>
      <Input
        label="Pesquisa"
        placeholder="Pesquise pelo nome..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredPeople.length > 0 && (
        <div className="people-container">
          {filteredPeople.map((person) => (
            <Person name={person.name} job={person.job} key={person.id} />
          ))}
        </div>
      )}
    </Container>
  );
}
