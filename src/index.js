import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import format from './formatters/index.js';
import buildTree from './tree.js';

const getFormatFile = (pathExtname) => path.extname(pathExtname);

const genDiff = (pathOne, pathTwo, formatName = 'stylish') => {
  const filepath1 = path.resolve(process.cwd(), pathOne);
  const filepath2 = path.resolve(process.cwd(), pathTwo);

  const fileData1 = fs.readFileSync(filepath1, 'utf8');
  const fileData2 = fs.readFileSync(filepath2, 'utf8');

  const extname1 = getFormatFile(pathOne).replace('.', '');
  const extname2 = getFormatFile(pathTwo).replace('.', '');

  const fileContent1 = parse(fileData1, extname1);
  const fileContent2 = parse(fileData2, extname2);

  const tree = buildTree(fileContent1, fileContent2);
  return format(formatName, tree);
};
export default genDiff;
