"use strict";

//this inside a global space
console.log(this); //it's a globalObject

//this inside a function
function a() {
  //the value depends on strict or non-strict mode
  console.log(this);
}
a(); //undefined in case of strict

//this in strict mode - (this substitution)

/* If the value of this keyword is undefined or null. so,
   in this case this keyword will be replaced with globalObject
   in non-strict mode */

// this keyword value depends on how the function is called
window.a() //globalObject 

//this inside a object's method
/* if a function is a part of an object is known as method */
const obj = {
    a: 10,
    x: function () {
        console.log(this)
    }
}
obj.x() //for reffernce of the object the value of "this" is the object


const student = {
    Sname: "Akshay",
    printName: function () {
        console.log(this.Sname)
    }
}

const student2 = {
    Sname: "Dipika",
}

student.printName()
student.printName.call(student2)

//call apply bind methods (sharing methods)