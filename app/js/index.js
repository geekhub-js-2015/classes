//import 'babel-polyfill';
import Rectangle from './rectangle';
import Square from './square';
import Animal from './animal';
import Dog from './dog';

let r = new Rectangle(50, 10);
r.show();

let a = new Square(5);
a.show();
a.height = 10;
a.show();

let tuzik = new Dog('tuzik');
tuzik.speak();
tuzik.grow();
tuzik.grow();
tuzik.grow();

// We can add a function later
// Its important that I used 'function' here not '=>' because otherwise the `this` would be wrong
Animal.prototype.growFast = function() {
    for (let i = 0; i < 10; i++) {
        this.grow();
    }
};

tuzik.growFast();
