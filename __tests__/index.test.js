import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('chek file', () => {
  const fileOne = readFile('file1.json');
  const fileTwo = readFile('file2.json');
  const result = readFile('result.json');
  console.log(result);
  console.log(fileOne);
  console.log(fileTwo);
  expect(genDiff(fileOne, fileTwo)).toEqual(result);
});
