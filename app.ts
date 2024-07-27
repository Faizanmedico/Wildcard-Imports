// app.ts
import Calculator from './calculator';
import * as MathUtils from './mathUtils';

const calculator = new Calculator();
console.log(`Calculator Add: ${calculator.add(2, 3)}`);
console.log(`Calculator Subtract: ${calculator.subtract(5, 2)}`);

console.log(`PI: ${MathUtils.PI}`);
console.log(`MathUtils Add: ${MathUtils.add(2, 3)}`);
console.log(`MathUtils Subtract: ${MathUtils.subtract(5, 2)}`);