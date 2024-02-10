const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

// Middleware to parse JSON in request body
app.use(express.urlencoded({ extended: true }));

// Route for the home page
app.get("/", (req, res) => {
  res.send("<h1>Hello, World</h1>");
});

// Route for the login page
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "static/greet.html"));
});

//Route for process from data
app.post("/process", (req, res) => {
  const fromData = req.body.name;
  console.log(fromData);
  res.send("data received successfully");
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running on http://localhost:${PORT}`);
  } else {
    console.error("Error starting the server:", err);
  }
});
