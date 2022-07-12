import fs from 'fs/promises';

const num : number = 1;

function sayHelloTo(target: string) {
  console.log(`Hello, ${target}`);
}

sayHelloTo("Me");

console.log('hello world');

function addFunction(num1: number, num2: number): number {
  return num1 + num2;
}

let sum = addFunction(5,5);

console.log(sum);