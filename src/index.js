import getParse from './parsers.js';
import stylish from './formatters/stylish.js';

const genDiff = (path1, path2, formatName) => {
  const firstFile = getParse(path1);
  const secondFile = getParse(path2);
  return stylish(firstFile, secondFile, 0);
};
export default genDiff;
