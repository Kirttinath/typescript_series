//* How to crate a class and also instance of class in TS

//* A class in terms of OOP is a blueprint for creating objects

//* A class is like a blueprint for creating similar things.

//? In TypeScript, there is a convention to use PascalCase (also known as UpperCamelCase) for class names. This means that class names should start with a capital letter and each subsequent word in the class name should also begin with a capital letter.

class Persons {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}
const persons01: Persons = new Persons("Kirtti", 24, ["reading", "coding"]);
const persons02: Persons = new Persons("Dipti", 23, ["writing", "coding"]);
const persons03: Persons = new Persons("Sahil", 23, ["playing", "coding"]);
console.log(persons01);
console.log(persons02);
console.log(persons03);
