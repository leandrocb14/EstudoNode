import { pegaArquivo } from "./index.js";
import { validaURLs } from "./http-validacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo);
    if (caminho[3] === 'validar') {
        console.log('links validados', await validaURLs(resultado));
    } else {
        console.log('lista de links', resultado);
    }
}

processaTexto(caminho[2])