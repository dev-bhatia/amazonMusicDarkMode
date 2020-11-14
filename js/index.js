// All Javascript for index.html
import {
  annotate,
  annotationGroup,
} from "https://unpkg.com/rough-notation?module";

var delayInMilliseconds = 500; // Time Delay in (ms)
function hello(dispaly_element) {
  setTimeout(function () {
    dispaly_element.show();
  }, delayInMilliseconds);
}

// Intro
const a1 = annotate(document.querySelector("#e1"), {
  type: "highlight",
  color: "yellow",
  multiline: "true",
  animationDuration: 1000
});
const a2 = annotate(document.querySelector("#e2"), {
  type: "underline",
  color: "red",
  multiline: "true",
  animationDuration: 1000
});
const a3 = annotate(document.querySelector("#e3"), {
  type: "highlight",
  color: "yellow",
  multiline: "true",
  animationDuration: 1000
});

// SHOW ANIMATION
const ag = annotationGroup([a1, a2, a3]);
hello(ag);
