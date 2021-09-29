import yaml from 'js-yaml';

const parse = (format, file) => {
  switch (format) {
    case ('.yml' || '.yaml'):
      return yaml.load(file);
    case '.json':
      return JSON.parse(file);
    default:
      throw new Error(`Unknown formateFile: '${format}'!`);
  }
};
export default parse;
