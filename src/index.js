import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import format from './formatters/index.js';
import buildTree from './tree.js';

const extractParseFormat = (pathExtname) => path.extname(pathExtname).replace('.', '');

const genDiff = (filePath1, filePath2, formatName = 'stylish') => {
  const fullFilePah1 = path.resolve(process.cwd(), filePath1);
  const fullFilePah2 = path.resolve(process.cwd(), filePath2);

  const fileData1 = fs.readFileSync(fullFilePah1, 'utf8');
  const fileData2 = fs.readFileSync(fullFilePah2, 'utf8');

  const parseFormat1 = extractParseFormat(filePath1);
  const parseFormat2 = extractParseFormat(filePath2);

  const fileContent1 = parse(fileData1, parseFormat1);
  const fileContent2 = parse(fileData2, parseFormat2);

  const tree = buildTree(fileContent1, fileContent2);
  return format(formatName, tree);
};
export default genDiff;
