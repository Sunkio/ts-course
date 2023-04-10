// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber // this is not possible with an interface, only with with a type alias

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

