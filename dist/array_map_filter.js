"use strict";
//* Map and Filter Method in Array in TS :
const numbers = [1, 2, 3, 4, 5, 6];
//! Map Method :
//* The map method creates a new array by applying a provided function to each element of the original array. It transforms each element and returns a new array with the transformed values.
//? 1. Doubling Each Number
const dbnumb = numbers.map((val) => val * 2);
console.log(dbnumb);
//? 2. Converting numbers to Strings
const numstr = numbers.map((num) => num.toString());
console.log(numstr);
//! Filter Method :
//? 1.Filtering Even Numbers
const even = numbers.filter((val) => val % 2 === 0);
console.log(even);
//? 2.Filtering numbers greater than 3
const grt = numbers.filter((val) => val > 3);
console.log(grt);
//Todo Homework Time :
//* Practice question of Map
//? 1. Given an array of strings representing names, create a new array that contains the uppercase version of each name.
const names = ["kirtti", "Dipti"];
const upnames = names.map((n) => n.toUpperCase());
console.log(upnames);
//? 2: Given an array of numbers, create a new array that contains the square of each number.
const sq = numbers.map((val) => val * val);
console.log(sq);
//* Practice questions for Filter:
//? 1: Given-an-array of strings, create-a-new-array that contains only the strings with-a-length greater-than-15.
const arrstr = ["Kirttinath ojha", "Diptiranjan Mahakud"];
const arrstr15 = arrstr.filter((val) => val.length > 15);
console.log(arrstr15);
//? 2: Given an array of strings, filter out the names that start  with the letter. "A".
const names1 = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
const Anames = names1.filter((val) => val.charAt(0) === "A");
console.log(Anames);
