//* Function Declaration :
// ? We can declare a function using the function keyword, followed by the function name, a list of parameters enclosed in paranthesis, and a return type.
// ? The function body contains the code that will be executed when the function will called.

//* Function Invocation :
// ? To execute a function, you simply invoke it by using its name followed by parantheses.
// ? We can provide arguments (actual values) for the parameters defined in the function declaration.

//Function define
function greeting(name: string, id: number) {
  console.log(`Name : ${name} and id : ${id}`);
}
//function call
greeting("Kirtti", 18);

//Fat arrow function
const greet = (name: string, id: number) => {
  console.log(`Name : ${name} and id : ${id}`);
};
greet("Kirtti", 45);
