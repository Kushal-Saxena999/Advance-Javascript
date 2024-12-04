const person = {
  name: "Kushal",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "Sandyyy"});
boundGreet();

//Bind, Call and Apply