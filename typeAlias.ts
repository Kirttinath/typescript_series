//* In Typescript, a type alias is a way to give a name to a specific type or combination of types.

//* It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code.

//* Type aliases provide better readability, organization, and abstraction of complex types

//* To define a type alias, you use the type keyword followed by the alias name and the type definitions

//Todo Create a Product Objects

//? Define an interface of type representing product with properties for name, price and quantity.
//? Create a object of following data :
// Name: "Laptop"
// Price: 10000
// quantity:5
type Product = {
  name: string;
  price: number;
  quantity: number;
};
const prod: Product = {
  name: "Laptop",
  price: 10000,
  quantity: 5,
};
console.log(prod.name);

//! Calculate Total Price:
//? Given the product object from the previous question, write a function called calculateTotalPrice that calculates and returns the total price (price * quantity) of the product.

const calculateTotalPrice = (prod: Product) => {
  return `${prod.name} total cost = ${prod.price * prod.quantity}`;
};
console.log(calculateTotalPrice(prod));
