import { Container } from "./styles";

export function MunicipioList({ uf, municipios = [] }) {
  return (
    <Container>
      <h2>Municípios {uf.nome}</h2>
      {municipios.length > 0 && (
        <ul className="list">
          {municipios.map((municipio) => (
            <li key={municipio.id}>{municipio.nome}</li>
          ))}
        </ul>
      )}
    </Container>
  );
}
