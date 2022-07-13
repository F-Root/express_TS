// const fs = require("fs/promises");
import fs from 'fs/promises';

console.log('hello world');
const num : number = 1;
let sum = 0;

function sayHelloTo(target: string) {
  console.log(`Hello, ${target}`);
}

function addTwoValues(first: number, second: number, third: number): number {
  return first + second + third;
}

async function main() {
  sayHelloTo('World');
  sum = addTwoValues(num, 100, 1000);
  const samples = await fs.readFile('./sample.json','utf8');
  console.log(samples);
  console.log(JSON.parse(samples));
}

main();