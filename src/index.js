import fs from 'fs';
import path from 'path';
import getParse from './parsers.js';
import formater from './formatters/index.js';
import tree from './tree.js';

const genDiff = (pathOne, pathTwo, formatName = 'stylish') => {
  const filePathOne = fs.readFileSync(pathOne, 'utf8');
  const filePathTwo = fs.readFileSync(pathTwo, 'utf8');

  const getFormatFile = (pathExtname) => path.extname(pathExtname);
  const extnameOne = getFormatFile(pathOne);
  const extnameTwo = getFormatFile(pathTwo);

  const firstFileContent = getParse(extnameOne, filePathOne);
  const secondFileContent = getParse(extnameTwo, filePathTwo);

  const generateTree = tree(firstFileContent, secondFileContent);
  return formater(formatName, generateTree);
};
export default genDiff;
