let container = document.getElementById("container");
let display = document.getElementById("display");

document.addEventListener("keydown", (e) => {
  display.style.color = "blue";
  display.innerText = e.key + " is keyDown";
});

document.addEventListener("keyup", (e) => {
  display.style.color = "orange";
  display.innerText = e.key + " is keyUp";
});