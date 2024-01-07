//Hoisting Mechanism in js where the variables declaration are moved to the top of the scope before execution
var x = 10

console.log("hoisting")
console.log(x)
console.log(tojo)
console.log(z)
z()


function tojo() {
    console.log(y)
    var y = 10
    console.log("alu mota valu")
}

tojo()

function z() {
    console.log(x)
    console.log("X is try to log before it inialization")
    var x=100
    console.log(x)
}
z()