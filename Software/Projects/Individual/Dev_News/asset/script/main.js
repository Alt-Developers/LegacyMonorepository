"use strict";

const text = [" Tech news for everyone. ", "Collaborative People", ];
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