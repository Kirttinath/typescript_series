//* Function Declaration :
// ? We can declare a function using the function keyword, followed by the function name, a list of parameters enclosed in paranthesis, and a return type.
// ? The function body contains the code that will be executed when the function will called.
//* Function Invocation :
// ? To execute a function, you simply invoke it by using its name followed by parantheses.
// ? We can provide arguments (actual values) for the parameters defined in the function declaration.
//Function define
function greeting(name, id) {
    console.log("Name : ".concat(name, " and id : ").concat(id));
}
//function call
greeting("Kirtti", 18);
//Fat arrow function
var greet = function (name, id) {
    return "Name : ".concat(name, " and id : ").concat(id);
};
console.log(greet("Kirtti", 45));
//! Function Return : How do you specify the return type of a function in Typescript ?
//? A function may return a value to indicate the result of the execution. This is known as Function return
//* To Specify the return type of a function, you can use the colon (:) followed by the desired type after the function's parameter list.
// Todo Pallindrome function :
// Write a typescript function which checks if a given string is palindrome or not .
var palstr = "madam";
function isPallindrome(rev) {
    var revpalin = rev.split("").reverse().join("");
    return revpalin === rev;
}
var res = isPallindrome(palstr);
console.log(res);
//! Homework :
//? Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those number.
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        throw new Error("Empty array provided!");
    }
    var sum = numbers.reduce(function (acc, num) { return acc + num; }, 0);
    var average = sum / numbers.length;
    return average;
}
// Example usage:
var numbersArray1 = [1, 2, 3, 4, 5];
var result = calculateAverage(numbersArray1);
console.log(result); //* Output: 3
//? Write a function called findMax value that takes an array of numbers as a parameter returns the maximum value in the array.
function findMaxValue(numbers) {
    if (numbers.length === 0) {
        throw new Error("Input array must have at least one element");
    }
    return Math.max.apply(Math, numbers);
}
// Example usage:
var numbersArray2 = [3, 7, 2, 8, 5];
var maxResult = findMaxValue(numbersArray2);
console.log(maxResult); //* Output: 8
