//* Type inference in TypeScript refers to the ability of the TypeScript compiler to automatically determine and assign types to variables, expressions, and function return values based on their usage and context in the code.
var myName = "Kirtti";
//? myName = 12; --> type inference
//! Error because Type 'number' is not assignable to type 'string'
// Todo 📌 What are some best practices for using type inference in Typescript :
//? Use type inference for simple cases where the assigned value clearly indicates the intended type.
//? When in doubt, provide explicit type annotations to make your intentions clear.
//? Avoid relying too heavily on type inference when the assigned value is complex or ambiguous.
//? Regularly review and refactor your code to ensure inferred types align with your intentions.
//! Here are the two questions for practices :
//* 1: Declare a variable message and initialize it with the value "Hello, TypeScript!". Infer the type of message using type inference.
var message = "Hello, TypeScript!";
//? TypeScript will infer the type of 'message' as string
//* 2: Write a function calculateArea that takes the length and width parameters of type number and returns their product. Infer the return type of the function using type inference
function calculateArea(l, w) {
    return l * w;
    //? TypeScript will infer the return type as number
}
var resultcalculateArea = calculateArea(5, 6);
console.log(resultcalculateArea);
