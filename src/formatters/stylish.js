import _ from 'lodash';

const isObject = (elem, deep) => {
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
  const line = tree.map((elem) => {
    switch (elem.type) {
      case 'delete':
        return `${' '.repeat(deep + 4)}${elem.key}: ${elem.value}`;
      case 'removed':
        return `${' '.repeat(deep + 2)}- ${elem.key}: ${isObject(elem.value, deep + 4)}`;
      case 'added':
        return `${' '.repeat(deep + 2)}+ ${elem.key}: ${isObject(elem.value, deep + 4)}`;
      case 'updated':
        return `${' '.repeat(deep + 2)}- ${elem.key}: ${isObject(elem.value1, deep + 4)}\n${' '.repeat(deep + 2)}+ ${elem.key}: ${isObject(elem.value2, deep + 4)}`;
      case 'obj':
        return `${' '.repeat(deep + 4)}${elem.key}: ${stylish(elem.value, deep + 4)}`;
      default:
        throw new Error(`Unknown formate: '${elem.type}'!`);
    }
  });
  return ['{', ...line, `${' '.repeat(deep)}}`].join('\n');
};
export default stylish;
