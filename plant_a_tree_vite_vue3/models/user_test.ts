interface User {
  id: number;
  name: string;
  email: string;
};

const user: User = {
  id: 1,
  name: "John Doe",
  email: "ante@ante.hr",
};

function flipCoin() {
  return Math.random() < 0.5;
}

function greet(person: User, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet(user, new Date());

let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

let myName: string = "Alice";

// This is a function that takes a string and returns a number
function returnNumberForString(str: string): number {
  return parseInt(str);
}

returnNumberForString(myName);

const makePizza = (ingredients: string) => {
  console.log(`Making pizza with ${ingredients}`);
};

// The parameter's type annotation is an object type
function printCoord(pt: { x: number, y?: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3 });

let x = Math.random() < 0.5 ? 10 : "hello world!";

console.log(x); // x is of type 'string | number'
//x = true; // Error: Type 'true' is not assignable to type 'string | number'
