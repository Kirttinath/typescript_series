//? Union types allow you to specify that a variable can hold values of multiple types. You use the (pipe) symbol to define a union type.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//* In TypeScript, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties. Failure to do so will result in a type error during compilation.
var inputValue = function (value) { };
inputValue("Kirtti");
inputValue(true);
inputValue(24);
//* Practice, we'll create a function that can accept different types of arguments and perform different actions based on the type of the input. Suppose we want to create a function that doubles the value if the input is a number, or converts the input to uppercase if it's a string. To achieve this, we can use a union type to allow the function both numbers and strings. to accept both numbers and string to accept.
var difffunc = function (val) {
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
var formatValue = function (value) {
    if (typeof value === "number") {
        return "$".concat(value.toFixed(2));
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
var emp = {
    name: "Kirtti",
    age: 24,
    emp_id: 98,
    dept: "IT",
};
var per = {
    name: "Kirtti",
    age: 24,
};
var user01 = {
    name: "Kirtti",
    age: 24,
    city: "Bbsr",
};
var createUserProfile = function (user) {
    var name = user.name, city = user.city;
    return "".concat(name, "  from ").concat(city);
};
console.log(createUserProfile(user01));
//! This is another way
var user02 = {
    name: "Kirtti",
    age: 24,
};
var myloc = {
    city: "Bbsr",
};
var createUserProfile1 = function (user, myloc) {
    return __assign(__assign({}, user), myloc);
};
var display = createUserProfile1(user02, myloc);
console.log(display);
var combineUserAndAccount = function (user, acc) {
    return __assign(__assign({}, user), acc);
};
var userr = {
    id: 98,
    name: "Kirtti",
    email: "k.com",
};
var account = {
    accid: 9090,
    acctype: "saving",
    bal: 50000,
};
var displayuseracc = combineUserAndAccount(userr, account);
console.log(displayuseracc);
