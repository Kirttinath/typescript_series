//* Array in TS ;

//? In typescript, an array is a data type that can store multiple values of different data types sequentially.

//? In typescript, We can create and initialize arrays using varous approaches.

//* a) Using Square Brackets:

//? const numbers: number[] = [1, 2, 3, 4, 5];

//* b) Using the Array Constructor.

//? const numbers1: number[] = new Array(1, 2, 3, 4);

//* c) Using the Array.Of Method.

const strings: string[] = Array.of("kirtti", "sahil", "dipti", "pritam");

//? Operation : Accessing elements using index :
//* You can access individual elements of an array using square brackets notation with the index of the element. Remember that array indices start from 0.

console.log(strings[0]);

// TODO Homework Time

const value1: number[] = [1, 2, 3, 4, 5];
//? This represents an array of numbers
const value2: string = "Hello, world!";
//? This represents a string, not an array

const value3: object = { name: "John", age: 30 };
//? This represents an object, not an array

const values4: boolean[] = [true, false, true];
//? This represents an array of booleans
const values5: number = 42;
//? This represents a number, not an array
