import fetch from "node-fetch";

function manejaErros(erro) {
    throw new Error(erro.message);
}

async function checaStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise
            .all(arrayURLs.map(async url => {
                const response = await fetch(url);
                return response.status;
            }));
        return arrayStatus;
    } catch (err) {
        manejaErros(err)
    }
}

function geraArrayDeURLs(arrayLinks) {
    return arrayLinks.map((value) =>
        Object
            .values(value)
            .join()
    )
}

async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await checaStatus(links);
    const resultados = arrayLinks
        .map((objeto, index) => ({
            ...objeto,
            status: statusLinks[index]
        }))
    return resultados;
}

export { validaURLs }