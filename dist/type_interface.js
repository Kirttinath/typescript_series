"use strict";
//! INTERFACE VS TYPE
const BioData = {
    name: "Kirtti",
    city: "Bbsr",
    state: "Odisha",
};
console.log(BioData);
class Biodatas {
    name;
    age;
    city;
    state;
    constructor(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
}
const std1 = new Biodatas("Kirtti", 24, "Bbsr", "Odisha");
console.log(BioData);
