import _ from 'lodash';

const isObj = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  if (typeof (value) === 'boolean' || value === null) {
    return `${value}`;
  }
  return `'${value}'`;
};

const plain = (tree, path = '') => {
  const line = tree.map((elem) => {
    const str = path;
    const pathTree = str + elem.key;
    if (elem.type === 'complex' && _.isArray(elem.value)) {
      return plain(elem.value, `${pathTree}.`);
    }
    if (elem.type === 'removed') {
      return `Property '${pathTree}' was removed`;
    }
    if (elem.type === 'added') {
      return `Property '${pathTree}' was added with value: ${isObj(elem.value)}`;
    }
    if (elem.type === 'updated') {
      return `Property '${pathTree}' was updated. From ${isObj(elem.value1)} to ${isObj(elem.value2)}`;
    }
    return 'delete';
  })
    .filter((elem) => elem !== 'delete');
  return [...line].join('\n');
};
export default plain;
