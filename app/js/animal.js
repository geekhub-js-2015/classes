class Animal {
    constructor(startAge = 10) {
        let age = startAge;
        this.grow = () => {
            console.log(`${this.name} is now ${age} years old`);
            age++;
        }
    }

    speak() {
        console.log(`${this.name} makes a noise`);
    }
}

export default Animal;
