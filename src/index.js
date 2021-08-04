import getParse from './parsers.js';
import stylish from './formatters/stylish.js';
import plain from './formatters/plain.js';

const genDiff = (path1, path2, formatName = 'stylish') => {
  const firstFile = getParse(path1);
  const secondFile = getParse(path2);
  if (formatName === 'plain') {
    return plain(firstFile, secondFile);
  }
  return stylish(firstFile, secondFile);
};
export default genDiff;
