import _ from 'lodash';
import getParse from './parsers.js';

const genDiff = (path1, path2, space = ' ', indent = 2) => {
  const first = getParse(path1);
  const second = getParse(path2);

  const objFirstKey = _.keys(first)
    .filter((elem) => first[elem] !== second[elem])
    .map((elem) => [elem, first[elem]]);
  const objSecondKey = _.keys(second)
    .filter((elem) => second[elem] !== first[elem])
    .map((elem) => [elem, second[elem]]);
  const objEqularKey = _.keys(second)
    .filter((elem) => second[elem] === first[elem])
    .map((elem) => [elem, second[elem]]);
  const concat = _.concat(objFirstKey, objSecondKey, objEqularKey);
  const sort = _.sortBy(concat, (elem) => elem[0]);
  const sign = sort.map(([key, value]) => {
    if (first[key] === value && second[key] === value) {
      return `${space.repeat(indent + 2)}${key}: ${value}`;
    }
    if (first[key] === value) {
      return `${space.repeat(indent)}-${space}${key}: ${value}`;
    }
    return `${space.repeat(indent)}+${space}${key}: ${value}`;
  }, []);
  const result = ['{', ...sign, '}'].join('\n');
  console.log(result);
  return result;
};
export default genDiff;
