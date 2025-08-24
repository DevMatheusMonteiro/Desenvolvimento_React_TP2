import { useEffect, useState } from "react";
import { Select } from "../../components/Select";
import { Container } from "./styles";
import * as fetchIBGE from "../../services/ibge_api";
import { MunicipioList } from "../../components/MunicipioList";

export default function Ex13() {
  const [selectedUf, setSelectedUf] = useState({
    nome: "",
    label: "",
    value: "",
  });

  const [ufs, setUfs] = useState([]);
  const [municipios, setMunicipios] = useState([]);

  async function fetchUfs() {
    const data = await fetchIBGE.fecthUfs();
    const mapUfs = data.map((uf) => ({
      id: uf.id,
      sigla: uf.sigla,
      nome: uf.nome,
    }));
    setUfs(mapUfs);
  }

  async function fetchMunicipios() {
    const data = await fetchIBGE.fecthMunicipios(selectedUf.value);
    const mapMunicipios = data.map((municipio) => ({
      id: municipio.id,
      nome: municipio.nome,
    }));
    setMunicipios(mapMunicipios);
  }

  useEffect(() => {
    fetchUfs();
  }, []);

  useEffect(() => {
    fetchMunicipios();
  }, [selectedUf.value]);

  return (
    <Container>
      {ufs.length > 0 && (
        <>
          <div className="filter-container">
            <Select
              label="Estados"
              defaultOption="Selecione um estado"
              name="uf"
              id="uf"
              selectedOption={selectedUf}
              setSelectedOption={setSelectedUf}
              options={ufs.map((uf) => ({
                nome: uf.nome,
                label: uf.sigla,
                value: uf.id,
              }))}
            />
          </div>
          {municipios.length > 0 && (
            <MunicipioList uf={selectedUf} municipios={municipios} />
          )}
        </>
      )}
    </Container>
  );
}
