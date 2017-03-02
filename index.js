#! /usr/bin/env node

console.log('Brought To you by the Filesearch Script:');

const userArgs = process.argv.slice(2);
const searchPattern = userArgs[0];

const exec = require('child_process').exec;
const child = exec(`ls -a | grep ${searchPattern}`, (err, stdout, stderr) => {
  console.log(stdout);
})
