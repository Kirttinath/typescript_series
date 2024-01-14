"use strict";
//? Union types allow you to specify that a variable can hold values of multiple types. You use the (pipe) symbol to define a union type.
//* In TypeScript, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties. Failure to do so will result in a type error during compilation.
const inputValue = (value) => { };
inputValue("Kirtti");
inputValue(true);
inputValue(24);
//* Practice, we'll create a function that can accept different types of arguments and perform different actions based on the type of the input. Suppose we want to create a function that doubles the value if the input is a number, or converts the input to uppercase if it's a string. To achieve this, we can use a union type to allow the function both numbers and strings. to accept both numbers and string to accept.
const difffunc = (val) => {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    else if (typeof val === "number") {
        return val * val;
    }
    else
        throw new Error("Invalid input");
};
console.log(difffunc("kirttinath"));
console.log(difffunc(2));
//Todo HOMEWORK
//? We want to create a function that formats the value passed to it in a specific way based on its type:
//? If the input is a number, it should add a dollar sign and format it with two  decimal places.
//? If the input is a boolean, it should return "Yes" for true and "No" for false.
//? If the input is a string, it should capitalize the first letter.
const formatValue = (value) => {
    if (typeof value === "number") {
        return `$${value.toFixed(2)}`;
    }
    else if (typeof value === "string") {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    else if (typeof value === "boolean") {
        if (value === true)
            return "Yes";
        else
            return "No";
    }
    else
        throw new Error("Invalid");
};
console.log(formatValue(23));
console.log(formatValue("kirtti"));
console.log(formatValue(true));
console.log(formatValue(false));
const emp = {
    name: "Kirtti",
    age: 24,
    emp_id: 98,
    dept: "IT",
};
const per = {
    name: "Kirtti",
    age: 24,
};
const user01 = {
    name: "Kirtti",
    age: 24,
    city: "Bbsr",
};
const createUserProfile = (user) => {
    const { name, city } = user;
    return `${name}  from ${city}`;
};
console.log(createUserProfile(user01));
//! This is another way
const user02 = {
    name: "Kirtti",
    age: 24,
};
const myloc = {
    city: "Bbsr",
};
const createUserProfile1 = (user, myloc) => {
    return { ...user, ...myloc };
};
const display = createUserProfile1(user02, myloc);
console.log(display);
const combineUserAndAccount = (user, acc) => {
    return { ...user, ...acc };
};
const userr = {
    id: 98,
    name: "Kirtti",
    email: "k.com",
};
const account = {
    accid: 9090,
    acctype: "saving",
    bal: 50000,
};
const displayuseracc = combineUserAndAccount(userr, account);
console.log(displayuseracc);
