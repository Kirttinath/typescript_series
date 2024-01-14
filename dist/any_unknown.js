"use strict";
//* Any Type :
//? The any type is the most flexible type in Typescript. It essentially turns off all type checking for the variables or expressions it is applied to.
//? You will see any type when you first write the code.
let favnum = 34;
favnum = "Kirtti";
//! useCases :
//* Workingg with Dynamic Data : When dealing with data from dynamic sources like user inputs, networks responses, or deserialized JSON objects, rhe any type can be useful.
//*Migration from Javascript : When migrating an existing javascript codebase to Typescript, using the any type can be a convinient way to quickly annote variables and functions without immidiately specifying their precise types.
//* Unknown Type :
//? The unknown type is a safer alternative to any because it still enforces type checking and type safety.
//? Variables of type unknown can hold valus of any type, but you must perform typechecks or type assertions before using them in specific ways.
let favnum1 = 44;
favnum1 = true;
//! favnum1.map(() => {}); it shows error
favnum1 = "Kirtti";
if (typeof favnum1 === "number") {
    console.log(favnum1 + 6);
}
else if (typeof favnum1 === "string") {
    console.log(favnum1 + "nath");
}
else {
    console.log(favnum1);
}
