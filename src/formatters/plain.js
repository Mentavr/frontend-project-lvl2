import _ from 'lodash';

const plain = (first, second) => {
  const isBoolean = (value) => {
    if (typeof (value) === 'boolean' || value === null) {
      return `${value}`;
    }
    return `'${value}'`;
  };
  const recurse = (first2, second2, path) => {
    const arrFirstKey = _.toPairs(first2);
    const arrSecondKey = _.toPairs(second2);
    const newArrKey = _.union(arrFirstKey, arrSecondKey);
    const isObj = _.isPlainObject;
    const sort = _.sortBy(newArrKey, (elem) => elem[0]);
    const text = sort.flatMap(([key, value]) => {
      const str = path;
      const result = str + key;
      if (first2[key] === value && second2[key] === undefined) {
        return `Property '${result}' was removed`;
      }
      if (second2[key] === value && first2[key] === undefined && isObj(value)) {
        return `Property '${result}' was added with value: [complex value]`;
      }
      if (second2[key] === value && first2[key] === undefined) {
        if (typeof (value) === 'boolean') {
          return `Property '${result}' was added with value: ${isBoolean(value)}`;
        }
        return `Property '${result}' was added with value: ${isBoolean(value)}`;
      }
      if (second2[key] !== first2[key] && !isObj(first2[key])) {
        if (typeof (value) === 'boolean') {
          return `Property '${result}' was updated. From ${isBoolean(first2[key])} to ${isBoolean(second2[key])}`;
        }
        return `Property '${result}' was updated. From ${isBoolean(first2[key])} to ${isBoolean(second2[key])}`;
      }
      if (isObj(first2[key]) && !isObj(second2[key])) {
        return `Property '${result}' was updated. From [complex value] to ${isBoolean(second2[key])}`;
      }
      if (!isObj(first2[key]) && isObj(second2[key])) {
        return `Property '${result}' was updated. From ${isBoolean(first2[key])} to [complex value]`;
      }
      if (second2[key] !== first2[key] && isObj(first2[key])) {
        return recurse(first2[key], second2[key], `${result}.`);
      }
      return undefined;
    })
      .filter((elem) => elem !== undefined);
    return _.uniq(text).join('\n');
  };
  return recurse(first, second, '');
};
export default plain;
