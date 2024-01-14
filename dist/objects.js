"use strict";
//* In TypeScript, objects are used to represent data with key-value pairs. Each key in the object is a string (or a symbol in ES6) that maps to a value.
//? Let's consider a real-life example of representing a person's information using TypeScript objects
//? 🚹 → name, age, isStudent, address{city, country}
const person = {
    name: "Kirtti",
    age: 24,
    isStudent: true,
    address: {
        city: "Bbsr",
        country: "India",
    },
};
//? : {
//?  name: string;
//?   age: number;
//?   isStudent: boolean; //? `?` optional property
//?   address: { city: string; country: string };
//? }
//Todo Accessing the object data
console.log(person.address.city);
//Todo Updating object properties
person.address.city = "Bdk";
console.log(person.address.city);
//Todo Homework
//? Create a Product Object:
//? Define a product with properties for name, price, and quantity. Create a product object with the following data:
//Name: Lantop
// Price: 100000
//Quantity: 5
const product1 = {
    Name: "Laptop",
    Price: 100000,
    Quantity: 5,
};
console.log(product1.Price);
