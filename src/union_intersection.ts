//? Union types allow you to specify that a variable can hold values of multiple types. You use the (pipe) symbol to define a union type.

//* In TypeScript, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties. Failure to do so will result in a type error during compilation.

const inputValue = (value: string | boolean | number) => {};
inputValue("Kirtti");
inputValue(true);
inputValue(24);

//* Practice, we'll create a function that can accept different types of arguments and perform different actions based on the type of the input. Suppose we want to create a function that doubles the value if the input is a number, or converts the input to uppercase if it's a string. To achieve this, we can use a union type to allow the function both numbers and strings. to accept both numbers and string to accept.

const difffunc = (val: string | number): string | number => {
  if (typeof val === "string") {
    return val.toUpperCase();
  } else if (typeof val === "number") {
    return val * val;
  } else throw new Error("Invalid input");
};
console.log(difffunc("kirttinath"));
console.log(difffunc(2));

//Todo HOMEWORK
//? We want to create a function that formats the value passed to it in a specific way based on its type:
//? If the input is a number, it should add a dollar sign and format it with two  decimal places.
//? If the input is a boolean, it should return "Yes" for true and "No" for false.
//? If the input is a string, it should capitalize the first letter.
const formatValue = (value: string | boolean | number): string | number => {
  if (typeof value === "number") {
    return `$${value.toFixed(2)}`;
  } else if (typeof value === "string") {
    return value.charAt(0).toUpperCase() + value.slice(1);
  } else if (typeof value === "boolean") {
    if (value === true) return "Yes";
    else return "No";
  } else throw new Error("Invalid");
};
console.log(formatValue(23));
console.log(formatValue("kirtti"));
console.log(formatValue(true));
console.log(formatValue(false));

//! Intersection types allow you to combine multiple types into a single type. You use the & (ampersand) symbol to define an intersection type.

//? Type Alias
type Person = {
  name: string;
  age: number;
};
type Employee = {
  emp_id: number;
  dept: string;
};
type Empdtls = Person & Employee;

const emp: Empdtls = {
  name: "Kirtti",
  age: 24,
  emp_id: 98,
  dept: "IT",
};

type general = Person | Employee;

const per: general = {
  name: "Kirtti",
  age: 24,
};
//* Practice: Create User Profile
//* You are given the Typescript types: User and MyLocation. The User type represents basic user information, while the MyLocation type contains details about the user's location. create a function called createUserProfile that takes a User object and a Location object as arguments and prints the user's name and the city they are from.

type User = { name: string; age: number };
type MyLocation = { city: string };
type userprofile = User & MyLocation;
const user01: userprofile = {
  name: "Kirtti",
  age: 24,
  city: "Bbsr",
};
const createUserProfile = (user: userprofile) => {
  const { name, city } = user;
  return `${name}  from ${city}`;
};
console.log(createUserProfile(user01));

//! This is another way

const user02: User = {
  name: "Kirtti",
  age: 24,
};
const myloc: MyLocation = {
  city: "Bbsr",
};
const createUserProfile1 = (user: User, myloc: MyLocation) => {
  return { ...user, ...myloc };
};
const display: User & MyLocation = createUserProfile1(user02, myloc);
console.log(display);

// Todo Combine User and Account Data

//Todo You are building a user management system, and you have two TypeScript types:
//? User: Represents basic user information, with the following properties:
// id (number): The user's unique identifier.
// name (string): The user's name.
// email (string)The user's email address.

//? Account: Contains details about the user's account, with the following properties:
// accountId (number): The account's unique identifier.
// accountType (string): The type of the account (e.g., "Savings," "Checking, etc.).
// balance (number): The account balance.

//? Your task is to create a function called combineUserAndAccount that takes a User object and an Account object as arguments and returns a new object representing the Combined information of the user and their account.

//? Ensure that the resulting object contains all the properties from both User and
type Userr = { id: number; name: string; email: string };
type Account = { accid: number; acctype: string; bal: number };

const combineUserAndAccount = (user: Userr, acc: Account) => {
  return { ...user, ...acc };
};

const userr: Userr = {
  id: 98,
  name: "Kirtti",
  email: "k.com",
};
const account: Account = {
  accid: 9090,
  acctype: "saving",
  bal: 50000,
};

const displayuseracc: Userr & Account = combineUserAndAccount(userr, account);
console.log(displayuseracc);
