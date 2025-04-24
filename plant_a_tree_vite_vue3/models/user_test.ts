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
