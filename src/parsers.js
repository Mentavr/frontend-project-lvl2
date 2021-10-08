import yaml from 'js-yaml';

const parse = (date, type) => {
  switch (type) {
    case 'yml':
    case 'yaml':
      return yaml.load(date);
    case 'json':
      return JSON.parse(date);
    default:
      throw new Error(`Unknown formateFile: '${type}'!`);
  }
};
export default parse;
