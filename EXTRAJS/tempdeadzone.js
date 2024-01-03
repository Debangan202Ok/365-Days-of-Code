// temporal dead zone in js
// Let are Const are hoisted differently in js
//Let are Const host within a Script not in a global context. that's why it not access in before intialization.

//console.log(ab)    /*--It will through refference error because, it cannot access before intialization*/

let ab = 10;        //it strict than var
console.log(ab)
ab = 100;
console.log(ab)

const Abcd = 1000;   //it more stricter than let because it

//use debugger to see how it's scope is different from var