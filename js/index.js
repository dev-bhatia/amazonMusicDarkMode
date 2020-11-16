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

const a3 = annotate(document.querySelector("#e3"), {
  type: "highlight",
  color: "yellow",
  multiline: "true",
  animationDuration: 1000
});

// SHOW ANIMATION
const ag = annotationGroup([a3]);
hello(ag);
