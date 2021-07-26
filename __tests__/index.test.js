import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';
import testCheck from '../__fixtures__/testResult.js';

const result = testCheck;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('chek plane file json', () => {
  const fileOneJson = getFixturePath('file1.json');
  const fileTwoJson = getFixturePath('file2.json');
  expect(genDiff(fileOneJson, fileTwoJson)).toEqual(result.plane);
});

test('chek plane file yml', () => {
  const fileOneYml = getFixturePath('filepath1.yml');
  const fileTwoYml = getFixturePath('filepath2.yml');
  expect(genDiff(fileOneYml, fileTwoYml)).toEqual(result.plane);
});

test('chek nested file json', () => {
  const fileOneYml = getFixturePath('f1.json');
  const fileTwoYml = getFixturePath('f2.json');
  expect(genDiff(fileOneYml, fileTwoYml)).toEqual(result.nested);
});

test('chek nested file yaml', () => {
  const fileOneYml = getFixturePath('f1.yml');
  const fileTwoYml = getFixturePath('f2.yml');
  expect(genDiff(fileOneYml, fileTwoYml)).toEqual(result.nested);
});
