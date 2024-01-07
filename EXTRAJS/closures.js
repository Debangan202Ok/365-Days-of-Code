var i = 1;
// here two concepts are connected each other one is Closure and another Lexical Scope.
function Increment(n) {
  let i = 1; //it is in block scope
  return (i = i + n);
}
console.log(i);
console.log(Increment(4));
console.log(i);

//  Always remember Let & Const Are Blocked Scope.
//Example

console.log("Scope");

let block = 10;
var Gblock = 150;
{
  let block = 100;
  var Gblock = 10;
  console.log(block);
}
console.log(block);
console.log(Gblock);
//closures in js are allow to use varibales of their parent lexical scope.
var tojos = 5;

function learn() {
  console.log(tojos);
}

function sum(i, j) {
  let result = 0;
  range(i, j);
  function range(i, j) {
    while (i <= j) {
      result += i;
      i++;
    }
  }
  return result;
}

console.log(sum(1, 100));

console.log("A new line character is be written like \\n.");
console.log('A newline character is written like "\\n".');
console.log(null==null)
console.log(null==undefined)