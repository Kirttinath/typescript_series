"use strict";
//? Introduction To Types in Typescript
//* In Typescript, Type Annotation is a way of explicitly specifying the type of a variable, function parameter, or function return value.
//! Advantages📌
//? It helps the typescript compiler to enforce type checking and provide type safety during development.
//? What operations could we performed on that variable or value.
//? Type annotations are expressed by using a colon(:) followed by the desired type after the variable or function parameter declaration. There can be space after the colon.
let num1 = 10;
let str1 = "Hello";
//* num1 = "kirtti";
console.log(num1.toString());
//* Number Type 📌
//? The number type represents numeric values, including integers and floating-point numbers.
//TODO Arithimatic Operations:
//? Number types in Typescript support arithimatic operations such as (+,-,*,/) and the results of these operations are also numbers.
let nanvalue = NaN;
console.log(nanvalue);
//* String Type :📌
//*any value under single of double quotes are treated as string, Also any exp. result string as output
// Todo *️⃣Concatenation:
let fullname = "Kirttinath";
let fname = "Kirtti";
let lname = "ojha";
fullname = fname + lname;
console.log(fullname);
// Todo *️⃣String Initialization :
let str = "Hello, Typescript!";
console.log(str);
// Todo *️⃣String Length :
let sentencelength = str.length;
console.log(sentencelength);
// Todo *️⃣Uppercase and Lowercase :
let uppercaseText = fullname.toUpperCase();
let lowercaseText = fullname.toLowerCase();
console.log(uppercaseText);
console.log(lowercaseText);
// Todo *️⃣Substring :
let shortText = str.substring(0, 10);
console.log(shortText);
// Todo *️⃣String Comparison :
let areEqual = fname === lname;
console.log(areEqual);
// Todo *️⃣String Template :
let product = "Laptop";
let price = 50000;
let prdInfo = ` ${product} :  ${price}`;
console.log(prdInfo);
