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

// Field Guide 1E, 2B
function getDomain(objective) {
    switch (objective.charAt(0)) {
      case "1":
        return "Operators, Methods, and Keywords";
      case "2":
        return "Variables, Data Types, and Functions";
      case "3":
        return "Decisions and Loops";
      case "4":
        return "Document Object Model";
      case "5":
        return "HTML Forms";
      default:
        return "Unknown domain";
    }
  }
  
// Card constructor
function Card(question, answer, objective) {
    this.question = question;
    this.answer = answer;
    this.objective = objective;
    this.getLabel = function() {
      return "Obj " + this.objective + " | " + getDomain(this.objective);
    };
  }


  let deck = [
 new Card(
 '"5" + 3 ', "53", "1.1"
 ),
 new Card(
  "2", "let a = 5; let b = a++; what is the value of b?", "5", "1.1",
 ),
 new Card(
  "3", "typeof null", "object", "2.1",
 ),
new Card(
  "4", "typeof null",
)
]




  
