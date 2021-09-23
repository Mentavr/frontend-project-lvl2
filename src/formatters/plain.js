import _ from 'lodash';

const checkValue = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  if (typeof (value) === 'boolean' || value === null || typeof (value) === 'number') {
    return `${value}`;
  }
  return `'${value}'`;
};

const plain = (tree, path = '') => {
  const filterTree = tree.filter((elem) => elem.type !== 'delete');
  const line = filterTree.map((elem) => {
    const str = path;
    const pathTree = str + elem.key;
    switch (elem.type) {
      case 'obj':
        return plain(elem.value, `${pathTree}.`);
      case 'removed':
        return `Property '${pathTree}' was removed`;
      case 'added':
        return `Property '${pathTree}' was added with value: ${checkValue(elem.value)}`;
      case 'updated':
        return `Property '${pathTree}' was updated. From ${checkValue(elem.value1)} to ${checkValue(elem.value2)}`;
      default:
        throw new Error(`Unknown formate: '${elem.type}'!`);
    }
  });
  return [...line].join('\n');
};
export default plain;
