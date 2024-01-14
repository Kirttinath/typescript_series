//! Array Methods :
//* Arrays in TypeScript come with built-in methods that allow you to perform common operations

const fruits: string[] = ["apple", "banana", "orange", "mango"];

// a) Adding elements to an array using push:

const newfruits = fruits.push("kiwi");
console.log(newfruits); //* length of new array
console.log(fruits); //* fruits array

// b) Removing elements from an array using pop:

const lastfruit = fruits.pop();
console.log(lastfruit); //* last fruit name
console.log(fruits); //* fruits array

//! Iterating Over Elements:

//? You can iterate over the elements of an array using various looping constructs such as for, for... of, or array methods like forEach.

// Using for loop

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

const arr = [1, 2, 3, 4];

//for...in loop (iterates over indices)

for (const index in arr) {
  console.log(index); // Output: 0, 1, 2, 3
}
// for...of loop (iterates over values)

for (const value of arr) {
  console.log(value);
}
// Using for... of loop
for (const item of fruits) {
  console.log(item);
}

// Using for each method
fruits.forEach((item) => console.log(item));
