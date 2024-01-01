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
  React.createElement("h2", {}, "Hii, There"),
  React.createElement("li", {}, "Humty Dumty learning Call!"),
  React.createElement("li", {}, "Humty Dumty Making Call!"),
  React.createElement("li", {}, "Humty Dumty Breaking Wall!"),
]);

const HeadNest = React.createElement("h1", {}, [
  "I'm an Heading",
  React.createElement("h2", {}, "I'm an Heading 2"),
]);

ReactDOM.render([container, List, HeadNest], document.getElementById("root"));
