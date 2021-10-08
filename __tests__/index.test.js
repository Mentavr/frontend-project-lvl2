import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const stylishResult = fs.readFileSync(getFixturePath('stylish'), 'utf-8');
const plainResult = fs.readFileSync(getFixturePath('plain'), 'utf-8');
const jsonResult = fs.readFileSync(getFixturePath('json'), 'utf-8');

test.each([
  { file1: 'json', file2: 'json' },
  { file1: 'yml', file2: 'yml' },
  { file1: 'yml', file2: 'json' },
  { file1: 'yml', file2: 'json' },
])('test gendiff', ({ file1, file2 }) => {
  const filepath1 = getFixturePath(`file1.${file1}`);
  const filepath2 = getFixturePath(`file2.${file2}`);
  expect(genDiff(filepath1, filepath2)).toEqual(stylishResult);
  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(stylishResult);
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(plainResult);
  expect(genDiff(filepath1, filepath2, 'json')).toEqual(jsonResult);
});
