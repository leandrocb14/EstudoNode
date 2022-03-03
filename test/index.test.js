/*node --experimental-vm-modules node_modules/jest/bin/jest.js */
import { pegaArquivo } from '../index.js'
import { expect, describe, it } from '@jest/globals';

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
];
describe('pegaArquivo::', () => {
  it('deve ser uma função', () => {
    expect(typeof pegaArquivo).toBe('function');
  });
  it('deve retornar array com resultados', async () => {
    const resultado = await pegaArquivo('./test/arquivos/texto1.md');
    expect(resultado).toEqual(arrayResult);
  });
  it('deve retornar mensagem que "não há links"', async () => {
    const resultado = await pegaArquivo('./test/arquivos/texto1_semlinks.md');
    expect(resultado).toBe('não há links');
  });
  it('deve retornar mensagem que "não há arquivo no caminho."', async () => {
    expect(async() => {
      await pegaArquivo();
    }).rejects.toThrow('não há arquivo no caminho');
  });
})
