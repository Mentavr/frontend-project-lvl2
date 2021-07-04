#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';

const commander = new Command();

commander
  .name('gendiff')
  .usage('[options] <filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format');

commander.parse(process.argv);
const options = commander.opts();
if (options.version) {
  console.log('program.version("0.0.1")');
}
