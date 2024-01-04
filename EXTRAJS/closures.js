var i = 1;
// here two concepts are connected each other one is Closure and another Lexical Scope.
function Increment(n) {
    let i = 1;   //it is in block scope
    return i=i+n
}
console.log(i)
console.log(Increment(4))
console.log(i)


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
console.log(Gblock)