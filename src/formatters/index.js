import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (formatName, tree) => {
  switch (formatName) {
    case 'plain':
      return plain(tree);
    case 'json':
      return json(tree);
    case 'stylish':
      return stylish(tree);
    default:
      throw new Error(`Unknown formate: '${formatName}'!`);
  }
};
