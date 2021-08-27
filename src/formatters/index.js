export default (formatName) => {
  if (formatName === 'plain') {
    return 'plain';
  }
  if (formatName === 'json') {
    return 'json';
  }
  return 'stylish';
};
