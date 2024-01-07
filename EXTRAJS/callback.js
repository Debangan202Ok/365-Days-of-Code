// lets make coffe to build Asynchronous JS
function Customer(name, coffe) {
  let cus = {
    name: name,
    coffe: coffe,
  };
  console.log(`${cus.name} wait for your ${cus.coffe}`);
  function MakeCoffe(coffe) {
    console.log(`Your ${coffe} is prepearing....`);
    function FinalServe(coffe) {
      for (let i = 1; i <= 1000; i++) {}
      console.log(`${coffe} Served, Enjoy your Coffe`);
    }
    FinalServe(cus.coffe);
  }
  MakeCoffe(cus.coffe);
}
Customer("Rahul", "Black Coffe");

console.log("i'm last");

//problem 1 Async Addition
function asyncAdd(a,b,callback) {
  setTimeout(function () {
    let result = a + b
    callback(result)
  },3000)
}

asyncAdd(2,3,function (sum){
  console.log('Sum:',sum)
})

//problem 2 regarding callback -File Reading
function readFile(filename,callback) {
  setTimeout(function(){
    var content = "Contents of the  file";
    callback(filename,content);
  },2000)
}

readFile('example.txt',function (filename,content) {
  console.log('filename:',filename,'& Content:',content)
})

//problem 3 solution

function runMultipleCallbacks(functions,finalCallback) {
  function runNext(index) {
    if (index < functions.length) {
      functions[index] (function () {
        runNext(index + 1)
      })
    } else {
      finalCallback()
    }
  }
  runNext(0)
}

// Example usage
function task1(callback) {
  console.log("Task 1");
  setTimeout(callback, 1000);
}

function task2(callback) {
  console.log("Task 2");
  setTimeout(callback, 500);
}

function task3(callback) {
  console.log("Task 3");
  setTimeout(callback, 800);
}

// Array of functions to run
var tasks = [task1, task2, task3];

// Callback to be executed after all tasks are completed
function finalCallback() {
  console.log("All tasks completed!");
}

// Run the tasks sequentially
runMultipleCallbacks(tasks, finalCallback);

function PizzaOrder(name,callback) {
  console.log(`${name} is Prepearing`)
  callback(name)
}

PizzaOrder("ChiliSwezoan",function callback(name){
  console.log(`Your ${name} is going to Deliever`)
})