import _ from 'lodash';

const buildTree = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));
  const sortedKeys = _.sortBy(keys, (elem) => elem);
  const valuesTree = sortedKeys.map((key) => {
    const obj1Value = obj1[key];
    const obj2Value = obj2[key];
    if (_.isEqual(obj1Value, obj2Value)) {
      return { type: 'unchanged', key, value: obj1Value };
    }
    if (!_.has(obj2, key)) {
      return { type: 'removed', key, value: obj1Value };
    }
    if (!_.has(obj1, key)) {
      return { type: 'added', key, value: obj2Value };
    }
    if (_.isPlainObject(obj1Value) && _.isPlainObject(obj2Value)) {
      return { type: 'obj', key, value: buildTree(obj1Value, obj2Value) };
    }
    return {
      type: 'updated', key, value1: obj1Value, value2: obj2Value,
    };
  });
  return valuesTree;
};
export default buildTree;
