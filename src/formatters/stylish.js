import _ from 'lodash';

const objectSpace = (elem, deep) => {
  if (_.isPlainObject(elem)) {
    const iter = (iterValue, iterdeep = 0) => {
      const arrKey = _.toPairs(iterValue);
      const line = arrKey.map(([key, value]) => {
        if (_.isPlainObject(value)) {
          return `${' '.repeat(iterdeep + 4)}${[key]}: ${iter(value, iterdeep + 4)}`;
        }
        return `${' '.repeat(iterdeep + 4)}${[key]}: ${[value]}`;
      });
      return (['{', ...line, `${' '.repeat(iterdeep)}}`]).join('\n');
    };
    return iter(elem, deep);
  }
  return elem;
};

const stylish = (tree, deep = 0) => {
  const line = tree.map((node) => {
    switch (node.type) {
      case 'unchanged':
        return `${' '.repeat(deep + 4)}${node.key}: ${node.value}`;
      case 'removed':
        return `${' '.repeat(deep + 2)}- ${node.key}: ${objectSpace(node.value, deep + 4)}`;
      case 'added':
        return `${' '.repeat(deep + 2)}+ ${node.key}: ${objectSpace(node.value, deep + 4)}`;
      case 'updated':
        return `${' '.repeat(deep + 2)}- ${node.key}: ${objectSpace(node.value1, deep + 4)}\n${' '.repeat(deep + 2)}+ ${node.key}: ${objectSpace(node.value2, deep + 4)}`;
      case 'obj':
        return `${' '.repeat(deep + 4)}${node.key}: ${stylish(node.value, deep + 4)}`;
      default:
        throw new Error(`Unknown formate: '${node.type}'!`);
    }
  });
  return ['{', ...line, `${' '.repeat(deep)}}`].join('\n');
};
export default stylish;
