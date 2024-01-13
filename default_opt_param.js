//? Optional and Default Parameters:
//* TypeScript allows you to define optional and default parameters in functions.
//* Optional parameters are denoted by appending a 7 symbol after the parameter name, and default parameters are specified by providing a default value in the parameter declaration.
// Function  define :
var greet1 = function (name, age) {
    return "Name : ".concat(name, " and age ; ").concat(age);
};
// Function Call :
var resgreet = greet1("Kirtti", 18);
console.log(resgreet);
//! Default Parameters :
// Function  define :
// const greet1 = (name: string, age: number = 18): string => {
//   return `Name : ${name} and age ; ${age}`;
// };
// Function Call :
// const resgreet: string = greet1("Kirtti");
// console.log(resgreet);
//! Optional Parameters :
// Function  define :
// const greet1 = (name: string, age?: number): string => {
// if(age){
//     return `Name : ${name} and age ; ${age}`;
// }
// else {
//   return `Name : ${name}`;
//}
// };
// Function Call :
// const resgreet: string = greet1("Kirtti");
// console.log(resgreet);
