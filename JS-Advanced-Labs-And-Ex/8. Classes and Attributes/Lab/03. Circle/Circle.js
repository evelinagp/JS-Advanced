class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (typeof value != "number") {
            throw new TypeError('Radius must be a number');
        }
        this._radius = value;
    }
    get diameter() {
        return this.radius * 2;
    }
    set diameter(value) {
        if (typeof value != "number") {
            throw new TypeError('Diameter must be a number');
        }
        this.radius = value / 2;
    }
    get area() {
        return this.radius ** 2 * Math.PI;
    }
}
let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);