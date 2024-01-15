//* // Abstract classes provide a way to define common properties and methods that multiple derived classes can share. This promotes code reuse and helps establish a common interface for related classes.

//* abstract class cannot be instantiated

//* abstract classes focus on class inheritance and sharing common functionality, // whereas the useContext hook in React focuses on managing global state and allowing components to consume that state.

// abstract Class PerObj {
//   name: string;
//   age: number;
// }
// class Personab1: PerObj = {
//   name: "vinod",
//   age: 29,
// };
// class Personab2: PerObj = {
//   name: "thapa",
//   age: 29,
// };
// class Personab3: PerObj = {
//   name: "thapa",
//   age: 29,
// };

//? Example: Shape Hierarchy
//? Suppose you're building a graphics application, and you want to create a hierarchy of different shapes. You can use an abstract base class Shape to define common properties and methods that all shapes share.

// circle, rectangle.

abstract class Shape {
  constructor(protected color: string) {}
  abstract calculateArea(): number;
  abstract displayArea: () => void;
}

class Circle extends Shape {
  constructor(protected color: string, protected radius: number) {
    super(color);
  }

  public calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  displayArea = () => {
    console.log(`This is a ${this.color} Circle with radius ${this.radius}`);
  };
}
const cirlce = new Circle("red", 5);
cirlce.displayArea();
console.log(cirlce.calculateArea());

//! For Square

class Square extends Shape {
  constructor(protected color: string, protected side: number) {
    super(color);
  }

  public calculateArea(): number {
    return this.side * this.side;
  }

  displayArea = () => {
    console.log(`This is a ${this.color} Square with radius ${this.side}`);
  };
}
const sqr = new Square("red", 5);
sqr.displayArea();
console.log(sqr.calculateArea());

//! For Recatangle

class Rectangle extends Shape {
  constructor(
    protected color: string,
    protected height: number,
    protected width: number
  ) {
    super(color);
  }

  public calculateArea(): number {
    return this.height * this.width;
  }

  displayArea = () => {
    console.log(
      `This is a ${this.color} rectangle with height ${this.height} and width ${this.width}`
    );
  };
}
const rectangle = new Rectangle("red", 2, 5);
rectangle.displayArea();
console.log(rectangle.calculateArea());
