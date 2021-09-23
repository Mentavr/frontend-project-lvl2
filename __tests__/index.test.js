import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const fileOneJson = getFixturePath('file1.json');
const fileTwoJson = getFixturePath('file2.json');
const fileOneYml = getFixturePath('file1.yml');
const fileTwoYml = getFixturePath('file2.yml');

const resultStylish1 = fs.readFileSync(getFixturePath('stylish'), 'utf-8');
const resultStylish2 = fs.readFileSync(getFixturePath('stylish'), 'utf-8');
const resultPlain = fs.readFileSync(getFixturePath('plain'), 'utf-8');
const resultJson = fs.readFileSync(getFixturePath('json'), 'utf-8');

test.each([
  { file: genDiff(fileOneJson, fileTwoJson), expected: resultStylish1 },
  { file: genDiff(fileOneYml, fileTwoYml), expected: resultStylish2 },
  { file: genDiff(fileOneYml, fileTwoJson, 'plain'), expected: resultPlain },
  { file: genDiff(fileOneYml, fileTwoJson, 'json'), expected: resultJson },
])('test gendiff', ({ file, expected }) => {
  expect(file).toEqual(expected);
});
