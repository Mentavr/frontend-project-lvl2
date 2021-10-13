#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';

const commander = new Command();

commander
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, { format }) => {
    console.log(genDiff(filepath1, filepath2, format));
  });

commander.parse(process.argv);
