"use strict"; // Use Strict Mode

// Looping Text
const text = [
  "Tech news from SS. ",
  "Collaborative People ",
  "Fresh news from Bangkok ",
  "@The Heart of Thailand ",
];

// Var
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let now;
let blurValue = 0;

// DOM Annouce
const hero = document.querySelector(".hero");

(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  now = `${letter}`;
  document.getElementById("typing").innerHTML = now;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 300);
})();

setInterval(() => {
  var date = new Date();
  console.log(date);

  document.getElementById("date").innerHTML = `${date}`;
}, 1000);

// Header (Top-Hero) Effect
document.getElementById("body").onscroll = function myFunction() {
  // Variables
  let scrolltotop = document.scrollingElement.scrollTop;
  let target = document.querySelector(".hero");
  let xvalue = "center";
  let factor = 0.5;
  let yvalue = scrolltotop * factor;

  // Calculate
  console.log("Before Calculation: " + scrolltotop / 1000);
  scrolltotop / 1000 <= 1.3
    ? (blurValue = scrolltotop / 1000)
    : (blurValue = 1.3);
  console.log("Blur: " + blurValue);
  // Display
  // BackGround & ForeGround
  target.style.backgroundPosition = xvalue + " " + yvalue + "px";
  // Blur by scroll
  const blurNow = `blur(${blurValue}rem)`;
  hero.style.filter = blurNow;
};
