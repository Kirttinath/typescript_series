"use strict";
//* In Typescript, a type alias is a way to give a name to a specific type or combination of types.
const prod = {
    name: "Laptop",
    price: 10000,
    quantity: 5,
};
console.log(prod.name);
//! Calculate Total Price:
//? Given the product object from the previous question, write a function called calculateTotalPrice that calculates and returns the total price (price * quantity) of the product.
const calculateTotalPrice = (prod) => {
    return `${prod.name} total cost = ${prod.price * prod.quantity}`;
};
console.log(calculateTotalPrice(prod));
