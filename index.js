import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while ((temp = regex.exec(texto)) != null) {
    arrayResultados.push({ [temp[1]]: temp[2] });
  }

  return arrayResultados;
}

function tratarErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho.'));
}

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8'
  try {
    const texto = await fs.readFileSync(caminhoDoArquivo, encoding);
    console.log(extraiLinks(texto));
  } catch (err) {
    console.log(chalk.red(err))
  } finally {
    console.log(chalk.yellow('Operação concluída!'))
  }

}

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8'
//   fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => {
//       console.log(chalk.green(texto));
//     })
//     .catch((erro) => {
//       tratarErro(erro);
//     });
// }

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8'
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//     if (erro) {
//       tratarErro(erro);
//     }
//     console.log(chalk.green(texto));
//   });
// }

pegaArquivo('./arquivos/texto1.md')