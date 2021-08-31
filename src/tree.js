import _ from 'lodash';

const tree = (obj1, obj2) => {
  const newObj = _.keys({ ...obj1, ...obj2 });
  const sort = _.sortBy(newObj, (elem) => elem);
  const valuesTree = sort.map((key) => {
    const obj1Value = obj1[key];
    const obj2Value = obj2[key];
    if (_.isEqual(obj1Value, obj2Value)) {
      return { type: 'delete', key, value: obj1Value };
    }
    if (!_.has(obj2, key)) {
      return { type: 'removed', key, value: obj1Value };
    }
    if (!_.has(obj1, key)) {
      return { type: 'added', key, value: obj2Value };
    }
    if (_.isPlainObject(obj1Value) && _.isPlainObject(obj2Value)) {
      return { type: 'complex', key, value: tree(obj1Value, obj2Value) };
    }
    return {
      type: 'updated', key, value1: obj1Value, value2: obj2Value,
    };
  });
  return valuesTree;
};
export default tree;
