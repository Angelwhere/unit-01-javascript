"use strict";
msg = "internal";
console.log(msg);
//field guide 1C,3E
const EXAM_DATE = new Date(2026, 10, 25); // November 25, 2026

// Field Guide 1B
function checkScreen() {
let screenMsg = document.getElementById("screenMsg");
if (window.innerWidth < 600) {
screenMsg.textContent = "Small screen: turn your device sideways for a bigger card.";
} else {
screenMsg.textContent = "Window width: " + window.innerWidth + "px";
}
}

// Field Guide 4D
function startApp() {
checkScreen();
}

