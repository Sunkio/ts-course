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