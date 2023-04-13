"use strict";
// convert to more or less specific
let a = 'hello';
// you can use the "as" keyword to convert to a more or less specific type
let b = a; // assignment to less specific type
let c = a; // assignment to more specific type
//another way to do this:
let d = 'world'; // assignment to less specific type
let e = 'world'; // assignment to more specific type
// BUT: you CANNOT use the angle brackets in React, for example! => just use as :)
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return `${a}${b}`;
    }
};
let myVal = addOrConcat(1, 2, 'concat');
// be careful with this, because you can get a runtime error if you use the wrong type!
// Even though TypeScript will not complain!!!
let nextVal = addOrConcat(1, 2, 'add');
// 10 as string => this does not work, because 10 is a number, not a string
10; // this works, because we are converting to unknown first, but avoid this if possible!
// The DOM
const img = document.getElementById('#myId');
const myImg = document.getElementById('#img');
