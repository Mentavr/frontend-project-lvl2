#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import gendiff from '../src/index.js';

const commander = new Command();

commander
  .name('gendiff')
  .usage('[options] <filepath1> <filepath2>')
  .argument('<filepath1>')
  .argument('<filepath1>')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    gendiff(filepath1, filepath2);
  });

commander.parse(process.argv);
const options = commander.opts();
if (options.version) {
  console.log('program.version("0.0.1")');
}
