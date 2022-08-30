class Hex {

    constructor(number) {
            this.value = Number(number);
        }
        //This function should return the value property of the hex class.
    valueOf() {
            return this.value;
        }
        //This function will show its hexadecimal value starting with "0x"
    toString() {
            return `0x${(this.value.toString(16)).toUpperCase()}`;
        }
        //This function should add a number or Hex object and return a new Hex object.
    plus(number) {
            let result = (this.value + Number(number.valueOf()));
            return new Hex(result);
        }
        //This function should subtract a number or Hex object and return a new Hex object.
    minus(number) {
            let result = (this.value - Number(number.valueOf()));
            return new Hex(result);
        }
        //Create a parse class method that can parse Hexadecimal numbers and convert them to standard decimal numbers
    parse(text) {
        return parseInt(text, 16);
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));