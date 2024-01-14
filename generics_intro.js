//* Generics in TypeScript allow you to create reusable components or functions that can work with multiple data types.
// function logandreturn(value: string | number): string | number {
//   console.log(value);
//   return value;
// }
// const numberresult = logandreturn(42);
// const stringresult = logandreturn("Hello");
// console.log(numberresult);
// console.log(stringresult);
//? Generic function to log and return an input value
function logandreturn(value) {
    console.log(value);
    return value;
}
//? Using the generic function with different types
var numberresult = logandreturn(42);
var stringresult = logandreturn("Hello");
var booleanresult = logandreturn(true);
console.log(numberresult);
console.log(stringresult);
console.log(booleanresult);
// Todo Homework Time
//? Here is the function overloading Example
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//   return a + b;
// }
// const result1 = add(5, 10); // Output: 15
// const result2 = add("Hello", "world!"); //Hello, world!
//? You need to code the same using he Generics Types.
var add = function (a, b) {
    return a + b;
};
var result1 = add(5, 10);
var result2 = add("Hello", "world!");
console.log(result1);
console.log(result2);
