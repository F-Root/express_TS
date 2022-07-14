// const fs = require("fs/promises"); => 역사속으로 사라질 예정...
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

//index => index 파일이 속한 directory내에서 기본적으로 먼저 실행되는 파일
//ex) import * from './src'; => 이렇게 작성하면 src 디렉토리 내의 index.ts 혹은 index.js 파일이 실행된다.