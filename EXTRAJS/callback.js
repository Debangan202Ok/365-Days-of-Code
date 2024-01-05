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

function asyncAdd(a,b,callback) {
  setTimeout(function () {
    let result = a + b
    callback(result)
  },1000)
}

asyncAdd(2,3,function (sum){
  console.log('Sum:',sum)
})