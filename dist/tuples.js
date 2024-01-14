"use strict";
//* In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of elements of different types. They are similar to arrays, but with a key difference: the types of elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type, and their size can vary.
// Function to display persen information
const displayinfo = (person) => {
    const [name, age, hasdrvlcs] = person;
    return `${name} of age ${age} has driving licence ${hasdrvlcs}`;
};
// Example usage
const person1 = ["kirtti", 24, false];
const person2 = ["pritam", 23, true];
console.log(displayinfo(person1));
console.log(displayinfo(person2));
const displayprd = (product) => {
    const [name, price, stock] = product;
    return `${name} of price₹${price} of unit ${stock}`;
};
const product01 = ["Laptop", 50000, 20];
const product02 = ["Android", 20000, 50];
console.log(displayprd(product01));
console.log(displayprd(product02));
// Create an array of SubjectGrade tuples for a student
const student1Grades = [
    ["Math", 85],
    ["English", 90],
    ["Science", 78],
];
// Calculate the average grade for the student
const totalGrades = student1Grades.reduce((acc, [, grade]) => acc + grade, 0);
const averageGrade = totalGrades / student1Grades.length;
console.log("Average Grade:", averageGrade.toFixed(2));
const displayWeather = (w) => {
    w.forEach(([city, temp, cond]) => {
        console.log(`${city} - ${temp}℃ - ${cond}`);
    });
};
const weather = [
    ["Bbsr", 20, "freeze"],
    ["bdk", 25, "windy"],
];
displayWeather(weather);
