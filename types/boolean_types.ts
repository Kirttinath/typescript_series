//* Boolean Types :

//? In Typescript, the boolean type represents a value that can be either true or false. It is one of the basic primitive typess in the language.

let ismyName: boolean = true;
// ismyName = "yes"; Invalid

//! Check Even Number

function isEven(evnum: number): boolean {
  if (evnum % 2 == 0) return true;
  else return false;
}
console.log(isEven(2));
