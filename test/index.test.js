/*node --experimental-vm-modules node_modules/jest/bin/jest.js */
import {pegaArquivo} from '../index.js'

test('Deve ser uma função', () => {
  expect(typeof pegaArquivo).toBe('function');
});