//* In TypeScript, an interface is a powerful feature that allows you to define a contract for an object's shape.
//* It specifies the properties and their types that an object must have to be considered of that particular interface type.
//* Interfaces are primarily used for type-checking during development and do not generate any Javascript code at runtine.

// interface Greet {
//   name: string;
//   age: number;
// }
// const greets: Greet = {
//   name: "Kirtti",
//   age: 24,
// };

//Todo Create a Product Object:
//? Define an interface of type representing a product with properties for name, price, and quantity. Create a product object with the following data
// Name: "Laptop
// price: 100
// Quantity: S

interface Prd {
  name: string;
  price: number;
  quantity: number;
}

const prd1: Prd = {
  name: "Laptop",
  price: 50000,
  quantity: 3,
};
//? Calculate Total Price:
//? Given the product object from the previous question, write a function called calculateTotalPrice that calculates and returns the total price (price * quantity) of the product.

const calculatePrice = (product: Prd): number => {
  const { price, quantity } = product;
  return price * quantity;
};
//call
console.log(calculatePrice(prd1));
