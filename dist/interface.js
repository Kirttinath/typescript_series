"use strict";
//* In TypeScript, an interface is a powerful feature that allows you to define a contract for an object's shape.
//* It specifies the properties and their types that an object must have to be considered of that particular interface type.
//* Interfaces are primarily used for type-checking during development and do not generate any Javascript code at runtine.
const prd1 = {
    name: "Laptop",
    price: 50000,
    quantity: 3,
};
//? Calculate Total Price:
//? Given the product object from the previous question, write a function called calculateTotalPrice that calculates and returns the total price (price * quantity) of the product.
const calculatePrice = (product) => {
    const { price, quantity } = product;
    return price * quantity;
};
//call
console.log(calculatePrice(prd1));
