//? Introduction To Types in Typescript
//* In Typescript, Type Annotation is a way of explicitly specifying the type of a variable, function parameter, or function return value.
//! Advantages📌
//? It helps the typescript compiler to enforce type checking and provide type safety during development.
//? What operations could we performed on that variable or value.
//? Type annotations are expressed by using a colon(:) followed by the desired type after the variable or function parameter declaration. There can be space after the colon.
var num1 = 10;
var str1 = "Hello";
//* num1 = "kirtti";
console.log(num1.toString());
//* Number Type 📌
//? The number type represents numeric values, including integers and floating-point numbers.
//TODO Arithimatic Operations:
//? Number types in Typescript support arithimatic operations such as (+,-,*,/) and the results of these operations are also numbers.
var nanvalue = NaN;
console.log(nanvalue);
//* String Type :📌
//*any value under single of double quotes are treated as string, Also any exp. result string as output
var fullname = "Kirttinath";
var fname = "Kirtti";
var lname = "ojha";
fullname = fname + lname;
console.log(fullname);
