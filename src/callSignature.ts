//* The function call signature refers to the declaration or definition of a function, which includes the function's name, parameters, and return type. It defines the structure and type information of a function without including the function's implementation or body.

//? lets add one function inside the object. It's more like creating a method in object

//? Very Important call signatures are typically used inside object type notations to describe the shape of functions within object types.

type Student = {
  name: string;
  age: number;
  gender?: string;
  greet: (country: string) => string;
  //?⬆️ Method Call Signature
  //! (country: string) => string; Pure call signature
};

const student1: Student = {
  name: "John",
  age: 20,
  greet: (country): string => `I am from ${country}`,
};

const intro = (student1: Student) => {
  return `Hello! My name is ${student1.name} and I am ${student1.age} years old.`;
};
console.log(intro(student1));
console.log(student1.greet("India"));
//! console.log(student1("India"));
