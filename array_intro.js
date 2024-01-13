//* Array in TS ;
//? In typescript, an array is a data type that can store multiple values of different data types sequentially.
//? In typescript, We can create and initialize arrays using varous approaches.
//* a) Using Square Brackets:
//? const numbers: number[] = [1, 2, 3, 4, 5];
//* b) Using the Array Constructor.
//? const numbers1: number[] = new Array(1, 2, 3, 4);
//* c) Using the Array.Of Method.
var strings = Array.of("kirtti", "sahil", "dipti", "pritam");
//? Operation : Accessing elements using index :
//* You can access individual elements of an array using square brackets notation with the index of the element. Remember that array indices start from 0.
console.log(strings[0]);
// TODO Homework Time
var value1 = [1, 2, 3, 4, 5];
//? This represents an array of numbers
var value2 = "Hello, world!";
//? This represents a string, not an array
var value3 = { name: "John", age: 30 };
//? This represents an object, not an array
var values4 = [true, false, true];
//? This represents an array of booleans
var values5 = 42;
//? This represents a number, not an array
