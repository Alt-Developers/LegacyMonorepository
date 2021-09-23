"use strict";

const text = [" Our website", " Our portal", " Our project", " Our World"];
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

    now = `Welcome to, ${letter}`;
    document.getElementById("typing").innerHTML = now;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 400);

})();