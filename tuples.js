//* In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of elements of different types. They are similar to arrays, but with a key difference: the types of elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type, and their size can vary.
// Function to display persen information
var displayinfo = function (person) {
    var name = person[0], age = person[1], hasdrvlcs = person[2];
    return "".concat(name, " of age ").concat(age, " has driving licence ").concat(hasdrvlcs);
};
// Example usage
var person1 = ["kirtti", 24, false];
var person2 = ["pritam", 23, true];
console.log(displayinfo(person1));
console.log(displayinfo(person2));
var displayprd = function (product) {
    var name = product[0], price = product[1], stock = product[2];
    return "".concat(name, " of price\u20B9").concat(price, " of unit ").concat(stock);
};
var product01 = ["Laptop", 50000, 20];
var product02 = ["Android", 20000, 50];
console.log(displayprd(product01));
console.log(displayprd(product02));
// Create an array of SubjectGrade tuples for a student
var student1Grades = [
    ["Math", 85],
    ["English", 90],
    ["Science", 78],
];
// Calculate the average grade for the student
var totalGrades = student1Grades.reduce(function (acc, _a) {
    var grade = _a[1];
    return acc + grade;
}, 0);
var averageGrade = totalGrades / student1Grades.length;
console.log("Average Grade:", averageGrade.toFixed(2));
var displayWeather = function (w) {
    w.forEach(function (_a) {
        var city = _a[0], temp = _a[1], cond = _a[2];
        console.log("".concat(city, " - ").concat(temp, "\u2103 - ").concat(cond));
    });
};
var weather = [
    ["Bbsr", 20, "freeze"],
    ["bdk", 25, "windy"],
];
displayWeather(weather);
