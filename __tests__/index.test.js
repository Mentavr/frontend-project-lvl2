import genDiff from '../src/index.js';
import file1 from '../__fixtures__/file1.json';
import file2 from '../__fixtures__/file1.json';

test('chek file', () => {
  const fileOne = JSON.parse(file1);
  const fileTwo = JSON.parse(file2);
  const result = 
  {
    - follow: false
      host: hexlet.io
    - proxy: 123.234.53.22
    - timeout: 50
    + timeout: 20
    + verbose: true
  }
  expect(genDiff(fileOne, fileTwo)).toEqual(result);
});
