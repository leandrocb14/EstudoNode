import fs from 'fs';

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while ((temp = regex.exec(texto)) != null) {
    arrayResultados.push({ [temp[1]]: temp[2] });
  }

  return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}

function tratarErro() {
  throw new Error('não há arquivo no caminho');
}

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8'
  try {
    const texto = await fs.readFileSync(caminhoDoArquivo, encoding);
    return extraiLinks(texto);
  } catch (err) {
    tratarErro(err);
  }
}

export { pegaArquivo }