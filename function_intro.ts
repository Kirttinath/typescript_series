//* Function Declaration :
// ? We can declare a function using the function keyword, followed by the function name, a list of parameters enclosed in paranthesis, and a return type.
// ? The function body contains the code that will be executed when the function will called.

//* Function Invocation :
// ? To execute a function, you simply invoke it by using its name followed by parantheses.
// ? We can provide arguments (actual values) for the parameters defined in the function declaration.

//Function define
function greeting(name: string, id: number) {
  console.log(`Name : ${name} and id : ${id}`);
}
//function call
greeting("Kirtti", 18);

//Fat arrow function
const greet = (name: string, id: number): string => {
  return `Name : ${name} and id : ${id}`;
};
console.log(greet("Kirtti", 45));

//! Function Return : How do you specify the return type of a function in Typescript ?
//? A function may return a value to indicate the result of the execution. This is known as Function return
//* To Specify the return type of a function, you can use the colon (:) followed by the desired type after the function's parameter list.

// Todo Pallindrome function :
// Write a typescript function which checks if a given string is palindrome or not .
let palstr: string = "madam";

function isPallindrome(rev: string): boolean {
  let revpalin = rev.split("").reverse().join("");
  return revpalin === rev;
}

let res = isPallindrome(palstr);
console.log(res);

//! Homework :
//? Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those number.

function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Empty array provided!");
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;

  return average;
}

// Example usage:
const numbersArray1: number[] = [1, 2, 3, 4, 5];
const result = calculateAverage(numbersArray1);
console.log(result); //* Output: 3

//? Write a function called findMax value that takes an array of numbers as a parameter returns the maximum value in the array.

function findMaxValue(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Input array must have at least one element");
  }

  return Math.max(...numbers);
}

// Example usage:
const numbersArray2: number[] = [3, 7, 2, 8, 5];
const maxResult = findMaxValue(numbersArray2);
console.log(maxResult); //* Output: 8
