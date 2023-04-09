let stringArr = ['one', 'hey', 'Dave']

let guitars = ['Strat', 'Les Paul', 5150] // Union type

let mixedData = ['EVM', 1984, true] // Union type

//stringArr[0] = 42 // Error
stringArr[0] = '42' // OK

guitars[0] = 1984 // OK; numbers & strings are both valid types here
guitars.unshift('Jim') // OK; strings are valid types here
// guitars.unshift(true) // Error; booleans are not valid types here

mixedData[0] = 1984 // OK; numbers, strings, and booleans are all valid types here

//guitars = mixedData // Error; mixedData has boolean type, but guitars does not

let test = [] // Type is any[]
let bands: string[] = [] // Type is string[]
bands.push('Metallica') // OK
// bands.push(1984) // Error


// Tuple
let myTuple: [string, number, boolean] = ['EVM', 1984, true] // strict order! => so it's stricter than an array :)
// myTuple = ['EVM', 1984, true, 'test'] // Error; too many elements
myTuple[2] = false // OK
// myTuple[2] = 'test' // Error; not a boolean


// Objects
let myObj: object
myObj = [] // OK
console.log(typeof myObj) // object

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

exampleObj.prop2 = false // OK
// exampleObj.prop2 = 'test' // Error; not a boolean
exampleObj.prop1 = 'test' // OK
// exampleObj.prop1 = 1984 // Error; not a string

type Guitarist = {
    name: string,
    active?: boolean, // Optional property
    album: (string | number)[] // Union type
}

// alternative way of writing this: interface Guitarist { ... }
// interface is a bit more flexible than type
interface GuitaristInterface {
    name: string,
    active?: boolean,
    album: (string | number)[]
}
// interface can be extended with 'extends'
// Dave usually uses interface for when he thinks of what's a class in javaScript

let evh: Guitarist = {
    name: 'Eddie Van Halen',
    active: false,
    album: ['Van Halen', 1984, 5150]
}
let jp: Guitarist = {
    name: 'Jimmy',
    album: ['1', '11', 'IV']
}

// evh.years = 40 // Error; years is not a property of Guitarist

evh = jp // OK; jp has all the mandatory properties of Guitarist

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(evh)) // Hello Eddie Van Halen!


const greetGuitarist2 = (guitarist: GuitaristInterface) => {
    if (guitarist.active) {
        return `Hello ${guitarist.name} - great you're still active!`
    }
    return `Hello ${guitarist.name}!`
}

const greetGuitarist3 = (guitarist: GuitaristInterface) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!` // necessary if statement, if name is optional => methods like toUpperCase() are not available on undefined
    }
    return `Hello!`
}

// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
// https://www.typescriptlang.org/docs/handbook/enums.html
enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}
console.log(Grade.A) // 5