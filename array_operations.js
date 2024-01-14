//! Array Methods :
//* Arrays in TypeScript come with built-in methods that allow you to perform common operations
var fruits = ["apple", "banana", "orange", "mango"];
// a) Adding elements to an array using push:
var newfruits = fruits.push("kiwi");
console.log(newfruits); //* length of new array
console.log(fruits); //* fruits array
// b) Removing elements from an array using pop:
var lastfruit = fruits.pop();
console.log(lastfruit); //* last fruit name
console.log(fruits); //* fruits array
//! Iterating Over Elements:
//? You can iterate over the elements of an array using various looping constructs such as for, for... of, or array methods like forEach.
// Using for loop
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
var arr = [1, 2, 3, 4];
//for...in loop (iterates over indices)
for (var index in arr) {
    console.log(index); // Output: 0, 1, 2, 3
}
// for...of loop (iterates over values)
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var value = arr_1[_i];
    console.log(value);
}
// Using for... of loop
for (var _a = 0, fruits_1 = fruits; _a < fruits_1.length; _a++) {
    var item = fruits_1[_a];
    console.log(item);
}
// Using for each method
fruits.forEach(function (item) { return console.log(item); });
