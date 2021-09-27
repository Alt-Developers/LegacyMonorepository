"use strict";

const text = [" Welcome to, Our Class", "Powered by Prawich", "Exam TimeTable"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let now;
let date;

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
    setTimeout(type, 400);

})();

setInterval(() => {
    var date = new Date();
    console.log(date);

    document.getElementById("date").innerHTML = date;
}, 1000);