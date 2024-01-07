const heading = React.createElement(
  "h1",
  { id: "head" },
  "My First React Code"
);
const para = React.createElement(
  "p",
  { id: "para" },
  "Writing some more HTML. Cool stuff!"
);
const container = React.createElement("div", { id: "main-con" }, [
  heading,
  para,
]);

// Nested Elements
const List = React.createElement("ol", {}, [
  React.createElement("h2", { key: 1 }, "Hii, There"),
  React.createElement("li", { key: 2 }, "Humty Dumty learning Call!"),
  React.createElement("li", { key: 3 }, "Humty Dumty Making Call!"),
  React.createElement("li", { key: 4 }, "Humty Dumty Breaking Wall!"),
]);

const HeadNest = React.createElement("h1", {}, [
  "I'm an Heading",
  React.createElement("h2", { style: { color: "red" } }, "I'm an Heading 2"),
]);

console.log(List); //it is an object

ReactDOM.render([container, List, HeadNest], document.getElementById("root"));
