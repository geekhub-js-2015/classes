import Rectangle from './rectangle';

class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }

    get area() {
        return Math.pow(this.height, 2);
    }

    set area(area) {
        this.height = Math.sqrt(area);
    }

    set width(width) {
        this.height = width;
    }

    get width() {
        return this.height;
    }

    show() {
        console.log(`A square with width ${this.height} with area ${this.area}`)
    }
}

export default Square;
