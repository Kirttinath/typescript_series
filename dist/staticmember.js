"use strict";
//* STATIC PROPERTIES & METHODS
//* In TypeScript, static methods and properties belong to the class itself rather than to instances of the class. By making methods and properties static, we can access them directly from the class without needing to create an instance of the class. This is useful for utility functions or properties that don't rely on Instance-specific data.
//!Basic Example
// class Human {
//   constructor(public name: string) {}
// }
// const human = new Human("Kirtti");
// human.name = "Kirtti";
//? Example: Math Operations Utility creating a utility class to perform various mathematical operations.
class MathOperation {
    static PI = Math.PI;
    static add(num1, num2) {
        return num1 + num2;
    }
    static sub(num1, num2) {
        return num1 - num2;
    }
    static mul(num1, num2) {
        return num1 * num2;
    }
    static div(num1, num2) {
        return num1 / num2;
    }
    static mod(num1, num2) {
        return num1 % num2;
    }
}
console.log(MathOperation.PI);
console.log(MathOperation.add(5, 4));
console.log(MathOperation.sub(5, 4));
console.log(MathOperation.mul(5, 4));
console.log(MathOperation.div(5, 4));
console.log(MathOperation.mod(5, 4));
