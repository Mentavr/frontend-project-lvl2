import path from 'path';
import yaml from 'js-yaml';
import fs from 'fs';

const getParse = (pathFile) => {
  const readFile = fs.readFileSync(pathFile, 'utf8');
  const formateFile = path.extname(pathFile);
  if (formateFile === '.yml' || formateFile === '.yaml') {
    return yaml.load(readFile);
  }
  return JSON.parse(readFile);
};
export default getParse;
