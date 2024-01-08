//a prototype is a fundamental concept related to object-oriented programming. Every JavaScript object has a prototype, which is essentially a reference to another object

function Person(name) {
  this.name = name;
}

Person.prototype.Greet = function () {
  console.log(`Namaste ${this.name}`);
};

var Person1 = new Person("paul");

Array.prototype.reduceFilter = () => {};

Person1.Greet();
console.log(Person1.__proto__ == Person.prototype);
console.log(typeof Person1.__proto__ && typeof Person.__proto__);
console.log(typeof Person.prototype);
console.log(typeof Function.__proto__.__proto__);
console.log(typeof Array.__proto__.__proto__);
console.log(typeof Object.__proto__.__proto__ == typeof Array.prototype);
console.log(typeof Array.reduceFilter)
