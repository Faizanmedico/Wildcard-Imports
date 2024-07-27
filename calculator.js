"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = void 0;
exports.add = add;
exports.subtract = subtract;
// calculator.ts
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
}
exports.default = Calculator;
// mathUtils.ts
exports.PI = 3.14;
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
