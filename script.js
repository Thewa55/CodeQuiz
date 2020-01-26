// ID + Class selector assignments
var startBut = document.querySelector("#start")
var headerEl = document.querySelector("#header")
var questionEl = document.querySelector("#question")
var answer1El = document.querySelector("#answer1")
var answer2El = document.querySelector("#answer2")
var answer3El = document.querySelector("#answer3")
var answer4El = document.querySelector("#answer4")
var buttonsEl = document.querySelector(".button")
var answerEl = document.querySelector("#response")
var endEl = document.querySelector("#end")

//Questionaire
var codingPool = {
  "codingQuest": [
    {
      "questions": "Question 1 here",
      "sel": [
        "1)answer 1a",
        "2)answer 2a (C)",
        "3)answer 3a",
        "4)answer 4a"
      ],
      "answer": "2"
    },
    {
      "questions": "Question 2 here",
      "sel": [
      "1) 2a",
      "2) 2b (C)",
      "3) 2c",
      "4) 2d"
      ],
      "answer": "2"
      },
    {
      "questions": "Question 3 here",
      "sel": [
      "1) answer 1c",
      "2) answer 2c",
      "3) answer 3c",
      "4) answer 4c (C)"
      ],
      "answer": "4"
    }
  ]
}

//Variables
var quizTimer = 30
var questionPull= 0
var userAnswer = ""
var totalQ = codingPool.codingQuest.length
var answertime = 2

headerEl.textContent = "Welcome to the code quiz!"
answer1El.setAttribute("style", "visibility: hidden");
answer2El.setAttribute("style", "visibility: hidden");
answer3El.setAttribute("style", "visibility: hidden");
answer4El.setAttribute("style", "visibility: hidden");

function visibility(){
  startBut.setAttribute("style", "visibility: hidden");
  answer1El.setAttribute("style", "visibility: visible");
  answer2El.setAttribute("style", "visibility: visible");
  answer3El.setAttribute("style", "visibility: visible");
  answer4El.setAttribute("style", "visibility: visible");
}


function hidden(){
  answer1El.setAttribute("style", "visibility: hidden");
  answer2El.setAttribute("style", "visibility: hidden");
  answer3El.setAttribute("style", "visibility: hidden");
  answer4El.setAttribute("style", "visibility: hidden");
  questionEl.textContent =""
}

function questionSelect(qNum){
    var qPull = codingPool.codingQuest[qNum]
    questionEl.textContent = qPull.questions;
    answer1El.textContent = qPull.sel[0];
    answer2El.textContent = qPull.sel[1];
    answer3El.textContent = qPull.sel[2];
    answer4El.textContent = qPull.sel[3];
}

function input(a){
    var qPull = codingPool.codingQuest[questionPull].answer
    if(qPull === a){
      answerEl.textContent = "Your last answer is right"
      return questionPull++;
    }
    else{
      answerEl.textContent = "Your last answer is wrong"
      return questionPull++;
    }
}


function quizStart() {
  var timerInterval = setInterval(function() {
      quizTimer--;
      headerEl.textContent = quizTimer + " is how much time left in the quiz";
      visibility()
      if(questionPull < totalQ){
        questionSelect(questionPull)
      }
      else{
        hidden()
        clearInterval(timerInterval);
        headerEl.textContent = "You finished the quiz!"
      }
      if(quizTimer === 0) {
        clearInterval(timerInterval);
        headerEl.textContent = "Time's up!"
      }
    }, 1000);
  }

startBut.addEventListener("click", quizStart)
answer1El.addEventListener("click",  function(){
  input("1")
})
answer2El.addEventListener("click",  function(){
  input("2")
})
answer3El.addEventListener("click",  function(){
  input("3")
})
answer4El.addEventListener("click",  function(){
  input("4")
})