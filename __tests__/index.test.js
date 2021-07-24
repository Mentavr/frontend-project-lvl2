import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';
import testCheck from '../__fixtures__/testResult.js';

const result = testCheck.plane;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('chek file json', () => {
  const fileOneJson = getFixturePath('file1.json');
  const fileTwoJson = getFixturePath('file2.json');
  expect(genDiff(fileOneJson, fileTwoJson)).toEqual(result);
});

test('chek file yml', () => {
  const fileOneYml = getFixturePath('filepath1.yml');
  const fileTwoYml = getFixturePath('filepath2.yml');
  expect(genDiff(fileOneYml, fileTwoYml)).toEqual(result);
});
