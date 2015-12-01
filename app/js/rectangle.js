class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    show() {
        console.log(`A rectangle with width ${this.width} and height ${this.height} with area ${this.area}`)
    }
}

export default Rectangle;
