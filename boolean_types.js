//* Boolean Types :
//? In Typescript, the boolean type represents a value that can be either true or false. It is one of the basic primitive typess in the language.
var ismyName = true;
// ismyName = "yes"; Invalid
//! Check Even Number
function isEven(evnum) {
    if (evnum % 2 === 0)
        return true;
    else
        return false;
}
console.log(isEven(2));
//! Divisible by 4 and 8
function isdiv(divnum) {
    if (divnum % 4 === 0 && divnum % 8 === 0)
        return true;
    else
        return false;
}
console.log(isdiv(16));
//* BigInt Types :
//? It is a built-in types that allows you to work with numbers that are larger than the range supported by the regular number type.
//? BigInt literals are written by appending the n suffix to an integer literal.
//? In  JS we can't read the whole numbers beyond 2 raise to power 53.
var bigNum = 9007199254740992n;
var anotherbigNum = BigInt("9007199254740991");
console.log(bigNum + anotherbigNum);
