"use strict";
let username = "Tanja";
console.log(username);
let a = 12;
let b = 6;
let c = 2;
console.log(a / b);
console.log(c * b);
// Note: Valid JavaScript IS valid TypeScript. But that doesn't mean that the compiler will like it.
// If you try to use a string type for a number, you'll get a warning, but it will still work. Best to not use it. ;)
// However: You can set the tsconfig so that it will throw an error instead of a warning via `"noEmitOnError": true`
// You can also use `tsc --noEmitOnError` to run the compiler with this setting. (Use -w to watch for changes.)
