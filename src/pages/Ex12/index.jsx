import { useEffect, useState } from "react";
import { Select } from "../../components/Select";
import { Container } from "./styles";
import * as fetchIBGE from "../../services/ibge_api";

export default function Ex12() {
  const [selectedUf, setSelectedUf] = useState({
    label: "",
    value: "",
  });
  const [selectedMunicipio, setSelectedMunicipio] = useState({
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
        <div className="filter-container">
          <Select
            label="Estados"
            defaultOption="Selecione um estado"
            name="uf"
            id="uf"
            selectedOption={selectedUf}
            setSelectedOption={setSelectedUf}
            options={ufs.map((uf) => ({
              label: uf.sigla,
              value: uf.id,
            }))}
          />

          <Select
            label="Municípios"
            defaultOption="Selecione um município"
            name="uf"
            id="uf"
            selectedOption={selectedMunicipio}
            setSelectedOption={setSelectedMunicipio}
            options={municipios.map((municipio) => ({
              label: municipio.nome,
              value: municipio.id,
            }))}
          />
        </div>
      )}
    </Container>
  );
}
