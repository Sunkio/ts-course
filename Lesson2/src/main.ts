let myName: string;
let meaningOfLife: number = 42;
let isLoading: boolean = true;
let album: any; // Don't use this type unless you have to; it's like `var` in JS
let album2: string | number; // This is a union type

myName = 'Dave';
myName = 'Tanja';
console.log(`Hello, ${myName}!`);

album = 1984;

const sum = (a: number, b: number): number => a + b;

let postId: string | number; // Usecase for union type is when you don't know what type of data you're going to get from an API
let isActive: number | boolean; // Another usecase - when you don't know if you get a number or a boolean back

let re: RegExp = /\w+/g; // This is a regular expression