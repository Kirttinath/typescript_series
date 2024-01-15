//! INTERFACE VS TYPE

// 1:
//? Use custom types when you need unions, intersections, or mapped types.
//? Use interfaces when defining object shapes or classes that adhere to a contract.

// 2:
//? Interfaces can extend other interfaces to inherit their members.
//? Custom types can use unions and intersections for more complex type compositions.

// same Interface name treated as one
type Studentss = {
  name: string;
  age: number;
};

type StudAddrs = {
  city: string;
  state: string;
};

type Datas = Studentss | StudAddrs;

const BioData: Datas = {
  name: "Kirtti",
  city: "Bbsr",
  state: "Odisha",
};
console.log(BioData);

//!Interface

interface Stud {
  name: string;
  age: number;
}

interface StudAddr {
  city: string;
  state: string;
}
interface Data extends Stud, StudAddr {}

class Biodatas implements Data {
  constructor(
    public name: string,
    public age: number,
    public city: string,
    public state: string
  ) {}
}
const std1 = new Biodatas("Kirtti", 24, "Bbsr", "Odisha");
console.log(BioData);
