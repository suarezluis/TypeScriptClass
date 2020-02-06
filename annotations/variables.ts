// Variables
let apples: number = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined;
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber = (i: number): void => {
  console.log(i);
};

const logNumber2: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Functions that return the 'any' type
const json = '{ x: 10, y: 20 }';
let coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable in one line
// and we initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // let foundWord = false <- better approach

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
