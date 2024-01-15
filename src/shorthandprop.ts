class Persons_sh {
  constructor(
    //*This is shorthand property
    public name: string,
    public age: number,
    protected hobbies: string[]
  ) {}
  introduceParents(): string {
    return `Hi, I'm ${this.name}, I'm ${this.age} and I love to ${this.hobbies}`;
  }
}
class Students_sh extends Persons_sh {
  constructor(
    name: string,
    age: number,
    hobbies: string[],
    public grade: number
  ) {
    super(name, age, hobbies);
  }
  introduce(): string[] {
    return this.hobbies;
  }
}
const person_sh: Persons_sh = new Persons_sh("Kirtti", 24, [
  "coding",
  "reading",
]);
console.log(person_sh);
