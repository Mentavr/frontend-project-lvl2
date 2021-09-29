import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test.each([
  { file: genDiff(getFixturePath('file1.json'), getFixturePath('file2.json')), expected: fs.readFileSync(getFixturePath('stylish'), 'utf-8') },
  { file: genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml')), expected: fs.readFileSync(getFixturePath('stylish'), 'utf-8') },
  { file: genDiff(getFixturePath('file1.yml'), getFixturePath('file2.json'), 'plain'), expected: fs.readFileSync(getFixturePath('plain'), 'utf-8') },
  { file: genDiff(getFixturePath('file1.yml'), getFixturePath('file2.json'), 'json'), expected: fs.readFileSync(getFixturePath('json'), 'utf-8') },
])('test gendiff', ({ file, expected }) => {
  expect(file).toEqual(expected);
});
