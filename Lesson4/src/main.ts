// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber // this is not possible with an interface, only with a type alias

// Literal type
let myName: 'John'
//myName = 'Jane' // error
myName = 'John' // ok

let userName: 'Dave' | 'John' | 'Jane'
//userName = 'Rachel' // error
userName = 'Dave' // ok


// both literals and type aliases can be used to keep code DRY :)


// Functions
//const add = (a, b) => a + b // complains because type of a and b is any
const add2 = (a: number, b: number) => a + b // much better
const add3 = (a: number, b: number): number => a + b // even better

const logMsg = (msg: any): void => console.log(msg) // void means no return value
// console.log here is a "side effect"

logMsg('Hello') // ok
logMsg(123) // ok
logMsg(true) // ok
logMsg(add2(2,3)) // ok
//logMsg(add2(2, '3')) // error

let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number // prefer type aliases over interfaces for function types
interface mathFunction2 {
    (a: number, b: number): number
}

let multiply: mathFunction = (a, b) => a * b

logMsg(multiply(2, 3)) // ok


// optional parameters

const addAll = (a: number, b: number, c?: number): number => { // optional parameters must be last!
    if (typeof c !== 'undefined') { // typeof is a type guard
        return a + b + c
    }
    return a + b
}

const sumAll = (a: number, b: number, c: number = 2): number => { // you can't use default values with type aliases or interfaces
    return a + b + c
}


const addAll2 = (a: number, b: number, ...numbers: number[]): number => {
    return numbers.reduce((acc, cur) => acc + cur, a + b)
}

// Rest parameters
const total = (...nums: number[]): number => {
    return nums.reduce((prev, cur) => prev + cur, 0)
}
logMsg(total(1, 2, 3, 4, 5)) // ok