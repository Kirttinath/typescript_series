"use strict";
//! GETTER & SETTER
//* In TypeScript classes, you can use getter and setter methods to control the access and modification of class properties. Getter methods allow you to retrieve the value of a property, while setter methods allow you to set the value of a property with additional logic or validation.
//TODO The get method doesn't take any parameters, and the set method takes only one parameter.
class Persons_gs {
    name;
    hobbies;
    _age;
    constructor(
    //*This is shorthand property
    name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    set age(age) {
        if (age > 100 || age <= 0) {
            throw new Error("Invalid Age");
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("Age is not defined.");
        }
        else {
            return this._age;
        }
    }
    introducePerson() {
        return `Hi, I'm ${this.name}, I'm ${this._age} and I love to ${this.hobbies.join(",")}`;
    }
}
const person_gs = new Persons_gs("Kirtti", ["reading", "coding"]);
person_gs.age = 24;
console.log(person_gs.introducePerson());
console.log(person_gs.age);
//* PRACTICE TIME
//? Q1: Bank Account Balance
// Create-a-TypeScript class-BankAccount with a private property balance initialized to 0.
// Implement a getter method balance that returns the current balance.
// Implement a setter method balance that updates the balance if the new value is non-negative. Otherwise log an error message.
// Instantiate an object-of-the-BankAccount-class
// Use the setter to set the balance to 1000 and use the getter to display the updated balance.
// Try setting a negative balance using the setter. What output do you expect?
//! class BankAccount {
//   private _balance: number = 0;
//   // Getter method for balance
//   public get balance(): number {
//     return this._balance;
//   }
//   // Setter method for balance
//   public set balance(newBalance: number) {
//     if (newBalance >= 0) {
//       this._balance = newBalance;
//     } else {
//       throw new Error("Invalid balance..");
//     }
//   }
// }
// // Instantiate an object of the BankAccount class
// const myAccount = new BankAccount();
// // Use the setter to set the balance to 1000
// myAccount.balance = 1000;
// // Use the getter to display the updated balance
// console.log(myAccount.balance);
// // Try setting a negative balance using the setter
// myAccount.balance = -500;
//? Q2: Temperature Converter
// Define a TypeScript class Temperature with a private property celsius set to 0.
// Implement a getter method celsius that returns the temperature in Celsius.
// Implement a setter method celsius that sets the temperature in Celsius.
// Implement a getter method fahrenheit that converts Celsius to Fahrenheit using the formula (C9/5) + 32.
// Implement a setter method fahrenheit that converts Fahrenheit to Celsius using the formula (F32) 5/9.
// Create an instance of the Temperature class.
// Use the setter to set the temperature in Celsius to 25 and then use the getter for Fahrenheit. What Fahrenheit value do you expect?
// Use the setter to set the temperature in Fahrenheit to 98.6 and then use the getter for Celsius. What Celsius value do you expect?
class Temperature {
    _celsius = 0;
    // Getter method for Celsius
    get celsius() {
        return this._celsius;
    }
    // Setter method for Celsius
    set celsius(newCelsius) {
        this._celsius = newCelsius;
    }
    // Getter method for Fahrenheit
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
    // Setter method for Fahrenheit
    set fahrenheit(newFahrenheit) {
        this._celsius = ((newFahrenheit - 32) * 5) / 9;
    }
}
// Create an instance of the Temperature class
const myTemperature = new Temperature();
// Use the setter to set the temperature in Celsius to 25
myTemperature.celsius = 25;
// Use the getter for Fahrenheit
console.log("Fahrenheit Value:", myTemperature.fahrenheit);
// Use the setter to set the temperature in Fahrenheit to 98.6
myTemperature.fahrenheit = 98.6;
// Use the getter for Celsius
console.log("Celsius Value:", myTemperature.celsius);
