type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello'
// you can use the "as" keyword to convert to a more or less specific type
let b = a as Two // assignment to less specific type
let c = a as Three // assignment to more specific type

//another way to do this:
let d = <One>'world' // assignment to less specific type
let e = <string | number>'world'// assignment to more specific type
// BUT: you CANNOT use the angle brackets in React, for example! => just use as :)

const addOrConcat = (a: number, b: number , c: 'add' | 'concat'): number | string => {
    if (c === 'add') {
        return a + b
    } else {
        return `${a}${b}`
    }
}

let myVal: string = addOrConcat(1, 2, 'concat') as string

// be careful with this, because you can get a runtime error if you use the wrong type!
// Even though TypeScript will not complain!!!
let nextVal: number = addOrConcat(1, 2, 'add') as number

// 10 as string => this does not work, because 10 is a number, not a string
(10 as unknown) as string // this works, because we are converting to unknown first, but avoid this if possible!


// The DOM
const img = document.getElementById('#myId')
const myImg = document.getElementById('#img')