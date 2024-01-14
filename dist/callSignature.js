"use strict";
//* The function call signature refers to the declaration or definition of a function, which includes the function's name, parameters, and return type. It defines the structure and type information of a function without including the function's implementation or body.
const student1 = {
    name: "John",
    age: 20,
    greet: (country) => `I am from ${country}`,
};
const intro = (student1) => {
    return `Hello! My name is ${student1.name} and I am ${student1.age} years old.`;
};
console.log(intro(student1));
console.log(student1.greet("India"));
//! console.log(student1("India"));
