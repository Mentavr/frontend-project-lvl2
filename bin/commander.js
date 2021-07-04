#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';

const commander = new Command();

commander
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .option('-V, --version', 'output the version number');

commander.parse(process.argv);
const options = commander.opts();
if (options.version) {
  console.log('program.version("0.0.1")');
}
