import yaml from 'js-yaml';

const getParse = (extname, file) => {
  switch (extname) {
    case ('.yml' || '.yaml'):
      return yaml.load(file);
    case '.json':
      return JSON.parse(file);
    default:
      throw new Error(`Unknown formateFile: '${extname}'!`);
  }
};
export default getParse;
