import { useEffect, useMemo, useState } from "react";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import * as fetchIBGE from "../../services/ibge_api";
import { MunicipioList } from "../../components/MunicipioList";

export default function Ex15() {
  const [selectedUf, setSelectedUf] = useState({
    nome: "",
    label: "",
    value: "",
  });
  const [searchMunicipio, setSearchMunicipio] = useState("");

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

  const filteredMunicipios = useMemo(
    () =>
      municipios.filter((municipio) =>
        municipio.nome.toLowerCase().includes(searchMunicipio.toLowerCase())
      ),
    [municipios, searchMunicipio]
  );

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
            <Input
              id="searchMunicipio"
              label="Pesquise pelo município"
              placeholder="Pesquise pelo município..."
              onChange={(e) => setSearchMunicipio(e.target.value)}
            />
          </div>
          {filteredMunicipios.length > 0 && (
            <MunicipioList uf={selectedUf} municipios={filteredMunicipios} />
          )}
        </>
      )}
    </Container>
  );
}
