const homedir = require('os').homedir();
const fs = require('fs');
const makePairs = require('./makePairs');

module.exports.start = () => {
  try {
    const students = JSON.parse(fs.readFileSync(`${homedir}/.ironhackers.json`, 'utf8'));
    makePairs(students);
  } catch (error) {
    console.error('Invalid ironhackers.json file:', error.message);
  }
}