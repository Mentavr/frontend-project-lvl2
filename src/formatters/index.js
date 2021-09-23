import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';
import tree from '../tree.js';

export default (formatName, firstFile, secondFile) => {
  switch (formatName) {
    case 'plain':
      return plain(tree(firstFile, secondFile));
    case 'json':
      return json(tree(firstFile, secondFile));
    case 'stylish':
      return stylish(tree(firstFile, secondFile));
    default:
      throw new Error(`Unknown formate: '${formatName}'!`);
  }
};
