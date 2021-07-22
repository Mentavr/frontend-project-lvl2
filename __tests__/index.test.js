// import { fileURLToPath } from 'url';
// import path from 'path';
// import fs from 'fs';
import genDiff from '../src/index.js';
import testCheck from '../__fixtures__/testResult.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
// const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('chek file', () => {
  const fileOne = '__fixtures__/file1.json';
  const fileTwo = '__fixtures__/file2.json';
  const result = testCheck.plane;
  expect(genDiff(fileOne, fileTwo)).toEqual(result);
});
