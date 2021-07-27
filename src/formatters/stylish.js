import _ from 'lodash';

const stylish = (first, second, deep) => {
  const keys = (file1, file2) => {
    const arrFirstKey = _.keys(file1)
      .filter((elem) => !_.isEqual(file2[elem], file1[elem]))
      .map((elem) => [elem, file1[elem]]);
    const arrSecondKey = _.keys(file2)
      .filter((elem) => !_.isEqual(file2[elem], file1[elem]))
      .map((elem) => [elem, file2[elem]]);
    const arrEqularKey = _.keys(file2)
      .filter((elem) => _.isEqual(file2[elem], file1[elem]))
      .map((elem) => [elem, file2[elem]]);
    const concat = _.concat(arrFirstKey, arrSecondKey, arrEqularKey);
    return concat;
  };

  const space = ' ';
  const indent = 2;
  const notSign = space.repeat(indent ** 2 + deep);
  const plusSign = `${space.repeat(indent + deep)}+ `;
  const minusSign = `${space.repeat(indent + deep)}- `;
  const isObj = _.isPlainObject;
  const newArr = keys(first, second);
  const sort = _.sortBy(newArr, (elem) => elem[0]);
  const sign = sort.map(([key, value]) => {
    if (_.isEqual(first[key], second[key]) && isObj(first[key])) {
      return `${notSign}${key}: ${stylish(first[key], second[key], deep + 4)}`;
    }
    if (_.isEqual(first[key], second[key])) {
      return `${notSign}${key}: ${value}`;
    }
    if (isObj(first[key]) && isObj(second[key]) && !_.isEqual(first[key], second[key])) {
      return `${notSign}${key}: ${stylish(first[key], second[key], deep + 4)}`;
    }
    if (first[key] === value && isObj(first[key])) {
      return `${minusSign}${key}: ${stylish(first[key], first[key], deep + 4)}`;
    }
    if (first[key] === value) {
      return `${minusSign}${key}: ${value}`;
    }
    if (second[key] === value && isObj(second[key])) {
      return `${plusSign}${key}: ${stylish(second[key], second[key], deep + 4)}`;
    }
    return `${plusSign}${key}: ${value}`;
  }, []);
  const result = _.uniq(['{', ...sign, `${space.repeat(deep)}}`]).join('\n');
  return result;
};
export default stylish;
