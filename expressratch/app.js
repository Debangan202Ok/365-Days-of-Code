const exp = require("express");
const path = require("path");
const app = exp();

app.use("/static", exp.static(path.join(__dirname, "static")));

app.get("/",(req,res)=> {
  res.send("<h1>Hello From ExpressJS</h1>")
})

app.listen(3000, (res) => {
  if (!res) {
    console.log("Server is Successfully Running, App is listening on port ");
  } else {
    console.log("Error", res);
  }
});
