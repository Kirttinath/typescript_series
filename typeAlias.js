//* In Typescript, a type alias is a way to give a name to a specific type or combination of types.
var prod = {
    name: "Laptop",
    price: 10000,
    quantity: 5,
};
console.log(prod.name);
//! Calculate Total Price:
//? Given the product object from the previous question, write a function called calculateTotalPrice that calculates and returns the total price (price * quantity) of the product.
var calculateTotalPrice = function (prod) {
    return "".concat(prod.name, " total cost = ").concat(prod.price * prod.quantity);
};
console.log(calculateTotalPrice(prod));
