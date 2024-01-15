"use strict";
//* Inheritance in TS
//* Inheritance allows a class to reuse the functionality of an existing class without rewriting it.
//? Inheritance is a mechanism in which one class acquires the property of another class. For example, a child inherits the traits of his/her parents
class Prsn {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    intro() {
        return `Hi, My name is ${this.name} and my age is ${this.age} and I love ${this.hobbies.join(",")}.`;
    }
}
class Students extends Prsn {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    intro() {
        return `${super.intro()}and my grade is ${this.grade}.`;
    }
}
const prsn01 = new Prsn("Kirtti", 24, ["reading", "coding"]);
const Prsn02 = new Prsn("Dipti", 23, ["writing", "coding"]);
const student01 = new Students("Sahil", 23, ["playing", "coding"], 12);
console.log(student01.intro());
