//?          | Parent Class| Child Class| Outside Class
//      ------------------------------------------------
//? Public   |     ✅      |    ✅     |   ✅

//? Protected|     ✅      |    ✅     |   ❌

//? Private  |     ✅      |    ❌     |   ❌

// class Prsn {
//     name: string;
//     age: number;
//     hobbies: string[];

//     constructor(name: string, age: number, hobbies: string[]) {
//       this.name = name;
//       this.age = age;
//       this.hobbies = hobbies;
//     }
//     intro(): string {
//       return `Hi, My name is ${this.name} and my age is ${
//         this.age
//       } and I love ${this.hobbies.join(",")}.`;
//     }
//   }

//   class Students extends Prsn {
//     grade: number;
//     constructor(name: string, age: number, hobbies: string[], grade: number) {
//       super(name, age, hobbies);
//       this.grade = grade;
//     }
//     intro(): string {
//       return `${super.intro()}and my grade is ${this.grade}.`;
//     }
//   }
//   const prsn01: Prsn = new Prsn("Kirtti", 24, ["reading", "coding"]);

//   const Prsn02: Prsn = new Prsn("Dipti", 23, ["writing", "coding"]);

//   const student01: Students = new Students(
//     "Sahil",
//     23,
//     ["playing", "coding"],
//     12
//   );

//   console.log(student01.intro());
