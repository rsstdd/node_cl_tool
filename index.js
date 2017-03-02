#! /usr/bin/env node

console.log('This is the filesearch script');

console.log(process.argv);
const userArgs = process.argv.slice(2);
const searchPattern = userArgs[0];

console.log('userArgs:', userArgs, 'searchPattern:', searchPattern);

const exec = require('child_process').exec;
const child = exec(`ls -a | grep ${searchPattern}`, (err, stdout, stderr) => {
  console.log(stdout);
})
