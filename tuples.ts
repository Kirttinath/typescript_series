//* In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of elements of different types. They are similar to arrays, but with a key difference: the types of elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type, and their size can vary.

//? Real-life example of using tuples in TypeScript:

//? Let's consider a scenario where you want to represent a person's basic information, including their name, age, and whether they have a driver's license. Using a tuple can be an appropriate choice because these three elements have a specific order and type.

// Defining a tuple type for person information

type Personinfo = readonly [string, number, boolean];

// Function to display persen information
const displayinfo = (person: Personinfo) => {
  const [name, age, hasdrvlcs] = person;
  return `${name} of age ${age} has driving licence ${hasdrvlcs}`;
};
// Example usage
const person1: Personinfo = ["kirtti", 24, false];
const person2: Personinfo = ["pritam", 23, true];
console.log(displayinfo(person1));
console.log(displayinfo(person2));

//! Tuples in Typescript

//! Question 1:
//? You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements:

// Product name (string)
// Price (number)
// Quantity in stock (number)
// Create two product instances using this tuple type and display their information.

type ProductInfo = readonly [string, number, number];
const displayprd = (product: ProductInfo) => {
  const [name, price, stock] = product;
  return `${name} of price₹${price} of unit ${stock}`;
};
const product01: ProductInfo = ["Laptop", 50000, 20];
const product02: ProductInfo = ["Android", 20000, 50];
console.log(displayprd(product01));
console.log(displayprd(product02));

//! Question 2:
// You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, containing the following elements:

// Subject name (string)
// Grade (number)
// Create an array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English, and Science. Calculate and display the average grade for the student.

type SubjectGrade = readonly [string, number];
// Create an array of SubjectGrade tuples for a student
const student1Grades: SubjectGrade[] = [
  ["Math", 85],
  ["English", 90],
  ["Science", 78],
];
// Calculate the average grade for the student
const totalGrades = student1Grades.reduce((acc, [, grade]) => acc + grade, 0);
const averageGrade = totalGrades / student1Grades.length;
console.log("Average Grade:", averageGrade.toFixed(2));

//! Question 3:
// You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information, containing the following elements:

// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays the weather information for each city in a user-friendly format.

type WeatherData = readonly [string, number, string];
const displayWeather = (w: WeatherData[]) => {
  w.forEach(([city, temp, cond]) => {
    console.log(`${city} - ${temp}℃ - ${cond}`);
  });
};
const weather: WeatherData[] = [
  ["Bbsr", 20, "freeze"],
  ["bdk", 25, "windy"],
];
displayWeather(weather);
