//* Boolean Types :
//? In Typescript, the boolean type represents a value that can be either true or false. It is one of the basic primitive typess in the language.
var ismyName = true;
// ismyName = "yes"; Invalid
//! Check Even Number
function isEven(evnum) {
    if (evnum % 2 == 0)
        return true;
    else
        return false;
}
console.log(isEven(2));
//! Divisible by 4 and 8
function isdiv(divnum) {
    if (divnum % 4 == 0 && divnum % 8 == 0)
        return true;
    else
        return false;
}
console.log(isdiv(16));
