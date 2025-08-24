export async function fecthUfs() {
  try {
    const res = await fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
    );
    return res.json();
  } catch (e) {
    console.error(`Erro ao carregar UFs: ${e}`);
  }
}

export async function fecthMunicipios(uf_id) {
  try {
    const res = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf_id}/municipios?orderBy=nome`
    );
    return res.json();
  } catch (e) {
    console.error(`Erro ao carregar municípios: ${e}`);
  }
}

export async function fecthNames(decade) {
  try {
    const res = await fetch(
      `https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking/?decada=${decade}`
    );
    return res.json();
  } catch (e) {
    console.error(`Erro ao carregar nomes: ${e}`);
  }
}
