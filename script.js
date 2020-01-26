var startBut = document.querySelector("#start")
var headerEl = document.querySelector("#header")
var questionEl = document.querySelector("#question")
var answer1El = document.querySelector("#answer1")
var answer2El = document.querySelector("#answer2")
var answer3El = document.querySelector("#answer3")
var answer4El = document.querySelector("#answer4")
var buttonsEl = document.querySelector(".button")
var quizTimer = 10
var i = 0


headerEl.textContent = "Welcome to the code quiz!"
answer1El.setAttribute("style", "visibility: hidden");
answer2El.setAttribute("style", "visibility: hidden");
answer3El.setAttribute("style", "visibility: hidden");
answer4El.setAttribute("style", "visibility: hidden");

var codingPool = {
  "codingQuest": [
    {
      "questions": "Question 1 here",
      "sel": [
        "answer 1a",
        "answer 2a",
        "answer 3a",
        "answer 4a"
      ],
      "answer": "answer 1a"
    },
    {
      "questions": "Question 2 here",
      "sel": [
        "answer 1b",
        "answer 2b",
        "answer 3b",
        "answer 4b"
        ],
      "answer": "answer 2b"
    },
    {
      "questions": "Question 3 here",
      "sel": [
        "answer 1c",
        "answer 2c",
        "answer 3c",
        "answer 4c"
        ],
      "answer": "answer 3c"
      }
  ]
}
console.log(codingPool.codingQuest[0].questions)
console.log(codingPool.codingQuest[0].sel[0])
console.log(codingPool.codingQuest[0].sel[1])
console.log(codingPool.codingQuest[0].sel[2])
console.log(codingPool.codingQuest[0].sel[3])
console.log(codingPool.codingQuest.length)

function visibility(){
  startBut.setAttribute("style", "visibility: hidden");
  answer1El.setAttribute("style", "visibility: visible");
  answer2El.setAttribute("style", "visibility: visible");
  answer3El.setAttribute("style", "visibility: visible");
  answer4El.setAttribute("style", "visibility: visible");
}



function questionLoop(){
  questionEl.innerText = codingPool.codingQuest[i].questions;
  answer1El.textContent = codingPool.codingQuest[i].sel[0];
  answer2El.textContent = codingPool.codingQuest[i].sel[1];
  answer3El.textContent = codingPool.codingQuest[i].sel[2];
  answer4El.textContent = codingPool.codingQuest[i].sel[3];
  buttonsEl.addEventListener("click",function(){
  for(i = 0; i < codingPool.codingQuest.length; i++){
    questionEl.innerText = codingPool.codingQuest[i].questions;
    answer1El.textContent = codingPool.codingQuest[i].sel[0];
    answer2El.textContent = codingPool.codingQuest[i].sel[1];
    answer3El.textContent = codingPool.codingQuest[i].sel[2];
    answer4El.textContent = codingPool.codingQuest[i].sel[3];
    }
  })
}



function quizStart() {
  headerEl.textContent = ""
  var timerInterval = setInterval(function() {
      quizTimer--;
      headerEl.textContent = quizTimer + " is how much time left in the quiz";
      visibility()
      if(quizTimer> 0.00001){
        questionLoop()
      }
      if(quizTimer === 0) {
        clearInterval(timerInterval);
        headerEl.textContent = "Quiz is done!"
      }
    }, 1000);
  }

startBut.addEventListener("click", quizStart)