"use strict";

const text = [
  "Tech news for everyone. ",
  "Collaborative People",
  "Fresh news from Bangkok",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let now;

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

  document.getElementById("date").innerHTML = `${date} (Last updated 24 Sep)`;
}, 1000);

const hero = document.querySelector(".hero");
let blurValue = 0;

document.getElementById("body").onscroll = function myFunction() {
  let scrolltotop = document.scrollingElement.scrollTop;
  let target = document.querySelector(".hero");
  let xvalue = "center";
  let factor = 0.5;
  let yvalue = scrolltotop * factor;
  console.log(scrolltotop / 1000)
  scrolltotop / 1000 <= 1.3 ? blurValue = scrolltotop / 1000 : blurValue = 1.3;
  console.log("Blur :" + blurValue)
  // console.log("Hello")
  target.style.backgroundPosition = xvalue + " " + yvalue + "px";
  const hello = `blur(${blurValue}rem)`;
  hero.style.filter = hello;

};
