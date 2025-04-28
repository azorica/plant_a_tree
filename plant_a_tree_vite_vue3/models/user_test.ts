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

interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;          
    case "square":
      return shape.sideLength ** 2;
  }
}

// GENERIC OBJECT TYPES
//
// Think of Box as a template for a real type, where Type is a placeholder 
// that will get replaced with some other type. When TypeScript sees Box<string>, 
// it will replace every instance of Type in Box<Type> with string, 
// and end up working with something like { contents: string }. 
// In other words, Box<string> and our earlier StringBox work identically.

interface Box<Type> {
  contents: Type;
}
interface StringBox {
  contents: string;
}

let boxA: Box<string> = { contents: "hello" };
boxA.contents;

let boxB: StringBox = { contents: "world" };
boxB.contents;

// Box is reusable in that Type can be substituted with anything. 
// That means that when we need a box for a new type, 
// we don’t need to declare a new Box type at all (though we certainly could if we wanted to).

interface Box<Type> {
  contents: Type;
}
 
interface Apple {
  // ....
}
 
// Same as '{ contents: Apple }'.
type AppleBox = Box<Apple>;
