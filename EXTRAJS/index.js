// console.log(num);
// console.log(square)

// var num = 2;

// function square(num) {
//     var ans = num * num;
//     return ans;
// }
// var square2 = function (add) {
//     return add*add;
// }
// console.log(square2(2));
// var sq1 = square(num);
// var sq2 = square(4);

// js and Variable environment

// var x;

// Xcrease();
// console.log(x);
// Xcrease2();

// console.log(x);
// function Xcrease () {
//     var x = 100;
//     console.log(x);
// }

// function Xcrease2 () {
//     x = 10;
//     console.log(x);
// }

// shortest js programm

// console.log(this)

// javascript is a Synchronus Single Threaded loosely type multiparadigm Programming Language

// var x = undefined;
// console.log(typeof x);

//losely type

// console.log("Example of losely type");
// let a = 21;
// console.log(typeof a);
// a = "hello";
// console.log(typeof a);
// a = true;
// console.log(typeof a);

// scope
//  {
//      let a = 10;
//      var b = 100;
//     console.log(a);
//  }
//  {
//     let a = true;
//     console.log(a)
//     console.log(b)
//  }

// closures

// function One() {
//     var a = 7;
//     function Two() {
//         console.log(a);
//     }
//     return Two
// }

// // console.log(One())
// let Three = One();
// console.log(Three())
// function time() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// time()

// beauty of javascript

// let Radius = [5,4,9,7,2];
// function CalArea(radius) {
//     let Area = [];
//     for (let i = 0; i < Radius.length; i++) Area.push(Math.PI * radius[i] * radius[i])
//     console.log(Area)
// }
// function CalDia(radius){
//     let Dia = [];
//     for (let i = 0; i < Radius.length; i++) Dia.push(2 * radius[i])
//     console.log(Dia)
// }
// function CalCircum(radius){
//     let Circum = [];
//     for (let i = 0;  i < Radius.length; i++) Circum.push(2 * Math.PI * radius[i])
//     console.log(Circum);
// }

// CalArea(Radius)
// CalDia(Radius)
// CalCircum(Radius)

// DRY (Dont Repeat Yourself)

// let Area = function (radius) {
//     return Math.PI * radius * radius
// }
// function Cal(radius,logic) {
//     let Output = [];
//     for (let i = 0; i < radius.length; i++) Output.push(logic(radius[i]))
//     console.log(Output);
// }

// Cal(Radius,Area)

// let Res = Radius.map((radius)=>{
//     return 2 * radius
// });

// let Res2 = Radius.filter((radius)=>{
//     return radius > 2
// })

// console.log(Res2)

// console.log(Res)

// let arr = [5,2,3,4,9,7,11,21]

// function Logic(arr) {
//     return arr * 2
// }
// function Maping(arr,logic) {
//     let NewArr = []
//     for (let i = 0; i<arr.length; i++)  NewArr[i] = logic(arr[i])
//     return NewArr
// }

// console.log(Maping(arr,Logic))

// function x(y) {
//     let a = 72;
//     y()
//     console.log(y)
// }

// x(function y () {
//     console.log(x)
// })