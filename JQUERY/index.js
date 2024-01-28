import $ from "jquery";

console.log($("#btn"));

$("#btn").css("color", "green");

$("#btn").click(() => {
  console.log("Click");
  $("#heading").text("Hello,World");
  console.log($("#heading"));
});
