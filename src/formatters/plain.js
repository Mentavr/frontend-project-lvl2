const stringifyValue = (value) => {
  if (value === null) {
    return value;
  }
  if (typeof value === 'object') {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

const plain = (tree, path = []) => {
  const filterTree = tree.filter((node) => node.type !== 'unchanged');
  const line = filterTree.map((node) => {
    const newPath = [...path, node.key];
    switch (node.type) {
      case 'obj':
        return plain(node.value, newPath);
      case 'removed':
        return `Property '${newPath.join('.')}' was removed`;
      case 'added':
        return `Property '${newPath.join('.')}' was added with value: ${stringifyValue(node.value)}`;
      case 'updated':
        return `Property '${newPath.join('.')}' was updated. From ${stringifyValue(node.value1)} to ${stringifyValue(node.value2)}`;
      default:
        throw new Error(`Unknown formate: '${node.type}'!`);
    }
  });
  return [...line].join('\n');
};
export default plain;
