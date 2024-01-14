//* The function call signature refers to the declaration or definition of a function, which includes the function's name, parameters, and return type. It defines the structure and type information of a function without including the function's implementation or body.
var student1 = {
    name: "John",
    age: 20,
    greet: function (country) { return "I am from ".concat(country); },
};
var intro = function (student1) {
    return "Hello! My name is ".concat(student1.name, " and I am ").concat(student1.age, " years old.");
};
console.log(intro(student1));
console.log(student1.greet("India"));
