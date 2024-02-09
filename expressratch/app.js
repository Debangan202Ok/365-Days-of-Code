const exp = require("express");
const app = exp();
const port = 3000;


app.get("/",(req,res)=> {
    res.status(200)
    res.send("Welcome to the root route")
})

app.listen(3000, (res) => {
  if (!res) {
    console.log("Server is Successfully Running, App is listening on port ");
  } else {
    console.log("Error", res);
  }
});
