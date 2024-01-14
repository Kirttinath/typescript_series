//* Map and Filter Method in Array in TS :
var numbers = [1, 2, 3, 4, 5, 6];
//! Map Method :
//* The map method creates a new array by applying a provided function to each element of the original array. It transforms each element and returns a new array with the transformed values.
//? 1. Doubling Each Number
var dbnumb = numbers.map(function (val) { return val * 2; });
console.log(dbnumb);
//? 2. Converting numbers to Strings
var numstr = numbers.map(function (num) { return num.toString(); });
console.log(numstr);
//! Filter Method :
//? 1.Filtering Even Numbers
var even = numbers.filter(function (val) { return val % 2 === 0; });
console.log(even);
//? 2.Filtering numbers greater than 3
var grt = numbers.filter(function (val) { return val > 3; });
console.log(grt);
//Todo Homework Time :
//* Practice question of Map
//? 1. Given an array of strings representing names, create a new array that contains the uppercase version of each name.
var names = ["kirtti", "Dipti"];
var upnames = names.map(function (n) { return n.toUpperCase(); });
console.log(upnames);
//? 2: Given an array of numbers, create a new array that contains the square of each number.
var sq = numbers.map(function (val) { return val * val; });
console.log(sq);
//* Practice questions for Filter:
//? 1: Given-an-array of strings, create-a-new-array that contains only the strings with-a-length greater-than-15.
var arrstr = ["Kirttinath ojha", "Diptiranjan Mahakud"];
var arrstr15 = arrstr.filter(function (val) { return val.length > 15; });
console.log(arrstr15);
//? 2: Given an array of strings, filter out the names that start  with the letter. "A".
var names1 = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
var Anames = names1.filter(function (val) { return val.charAt(0) === "A"; });
console.log(Anames);
