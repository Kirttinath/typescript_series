"use strict";
class Persons_sh {
    name;
    age;
    hobbies;
    constructor(
    //*This is shorthand property
    name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduceParents() {
        return `Hi, I'm ${this.name}, I'm ${this.age} and I love to ${this.hobbies}`;
    }
}
class Students_sh extends Persons_sh {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return this.hobbies;
    }
}
const person_sh = new Persons_sh("Kirtti", 24, [
    "coding",
    "reading",
]);
console.log(person_sh);
