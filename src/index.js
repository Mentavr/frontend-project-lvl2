import _ from 'lodash';
import fs from 'fs';

const genDiff = (path1, path2, space = ' ', indent = 2) => {
  const pathFile = (file) => {
    const data = fs.readFileSync(file, 'utf8');
    return data;
  };
  const filePath1 = pathFile(path1);
  const filePath2 = pathFile(path2);

  const parsePath = (filePath) => {
    const result = JSON.parse(filePath);
    return result;
  };
  const first = parsePath(filePath1);
  const second = parsePath(filePath2);

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
  const sort = _.sortBy(concat);
  const sign = sort.map(([key, value]) => {
    if (first[key] === value && second[key] === value) {
      return `${space.repeat(indent + 2)}${key}: ${value}`;
    }
    if (first[key] === value) {
      return `${space.repeat(indent)}-${space}${key}: ${value}`;
    }
    if (second[key] === value) {
      return `${space.repeat(indent)}+${space}${key}: ${value}`;
    }
  });
  const result = ['{', ...sign, '}'].join('\n');
  return console.log(result);
};
export default genDiff;
