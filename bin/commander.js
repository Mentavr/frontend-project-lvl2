#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/index.js';

const commander = new Command();

commander
  .usage('[options] <filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .version('0.0.1', '-V, --version', 'output usage version program')
  .option('-f, --format [type]', 'default: stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, form) => {
    const { format } = form;
    console.log(gendiff(filepath1, filepath2, format));
  });

commander.parse(process.argv);
