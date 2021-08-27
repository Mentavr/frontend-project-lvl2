import getParse from './parsers.js';
import formater from './formatters/index.js';
import stylish from './formatters/stylish.js';
import plain from './formatters/plain.js';
import json from './formatters/json.js';
import tree from './tree.js';

const genDiff = (path1, path2, formatName = 'stylish') => {
  const firstFile = getParse(path1);
  const secondFile = getParse(path2);
  if (formater(formatName) === 'plain') {
    return plain(tree(firstFile, secondFile));
  } if (formater(formatName) === 'json') {
    return json(tree(firstFile, secondFile));
  }
  return stylish(tree(firstFile, secondFile));
};
export default genDiff;
