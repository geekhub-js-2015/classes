import Animal from './animal';

class Dog extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }

    speak() {
        super.speak();
        console.log(`${this.name} barks`);
    }
}

export default Dog;
