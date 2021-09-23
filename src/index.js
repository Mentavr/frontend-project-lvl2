import fs from 'fs';
import path from 'path';
import getParse from './parsers.js';
import formater from './formatters/index.js';

const genDiff = (path1, path2, formatName = 'stylish') => {
  const file1 = fs.readFileSync(path1, 'utf8');
  const file2 = fs.readFileSync(path2, 'utf8');

  const extname1 = path.extname(path1);
  const extname2 = path.extname(path2);

  const firstFile = getParse(extname1, file1);
  const secondFile = getParse(extname2, file2);
  return formater(formatName, firstFile, secondFile);
};
export default genDiff;
