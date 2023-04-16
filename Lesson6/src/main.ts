// Classes
class Coder {
    name: string
    music: string
    age: number
    lang: string

    constructor(
        name: string,
        music: string,
        age: number,
        lang: string
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }
}

// Visibility modifiers => public, readonly, private, protected
class Coder2 {
    secondLang!: string // (as a beginner, stay away from this) the exclamation marks tells the computer that we know what we're doing & we're simply gonna use the string later

    constructor(
        public readonly name: string,
        public music: string,
        private age: number, // private: can only be accessed within the class
        protected lang: string = 'TypeScript' // protected: can be accessed inside the class AND inside derived classes
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}

const Dave = new Coder2('Dave', 'Rock', 42)
console.log(Dave.getAge()) // works
//console.log(Dave.age) => doesn't work
// console.log(Dave.lang)   => doesn't work either

class WebDev extends Coder2 {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I write in ${this.lang}`
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Pop', 32)
console.log(Sara.getLang()) // works
//console.log(Sara.age()) // doesn't work
//console.log(Sara.lang) // doesn't work either
///////////////////////////////////////////////////

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(
        name: string,
        instrument: string
    ) {
        this.name = name
        this.instrument = instrument
    }

    public play(action: string) {
        return `${this.name} is ${action}ing on the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))
///////////////////////////////////////////////////

class Peeps {
    static count: number = 0 // static: can be accessed without creating an instance of the class

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Jane = new Peeps('Jane')
const Steve = new Peeps('Steve')

console.log(Jane.id)
console.log(John.id)
console.log(Steve.id)
console.log(Peeps.getCount())
///////////////////////////////////////////////////

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState // getters can return something
    }

    public set data(data: string[]) {
        if (Array.isArray(data) && data.every(element => typeof element === 'string')) {
            this.dataState = data
            return // setters cannot return anything
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['The Beatles', 'The Rolling Stones', 'The Who']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'The Doors']
console.log(MyBands.data)
//MyBands.data = ['The Beatles', 'The Rolling Stones', 'The Who', 42] // throws an error because the array contains a number (not an array of strings)