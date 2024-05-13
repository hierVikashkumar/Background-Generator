const body = document.querySelector("body");
const first = document.querySelector(".first");
const second = document.querySelector(".second");

function gradient() {
  body.style.background = `linear-gradient(to right, ${first.value}, ${second.value})`
}

first.addEventListener("input", gradient);
second.addEventListener("input", gradient);