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

//Questionaire
var codingPool = {
  "codingQuest": [
    {
      "questions": "Question 1 here",
      "sel": [
        "1)answer 1a",
        "2)answer 2a",
        "3)answer 3a",
        "4)answer 4a"
      ],
      "answer": "2"
    },
    {
      "questions": "Question 2 here",
      "sel": [
      "1) 2a",
      "2) 2b",
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
      "4) answer 4c"
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

headerEl.textContent = "Welcome to the code quiz!"
answer1El.setAttribute("style", "visibility: hidden");
answer2El.setAttribute("style", "visibility: hidden");
answer3El.setAttribute("style", "visibility: hidden");
answer4El.setAttribute("style", "visibility: hidden");

console.log(codingPool.codingQuest[0].questions)
console.log(codingPool.codingQuest[0].sel[0])
console.log(codingPool.codingQuest[0].sel[1])
console.log(codingPool.codingQuest[0].sel[2])
console.log(codingPool.codingQuest[0].sel[3])
console.log(codingPool.codingQuest.length)
console.log(codingPool.codingQuest[0].answer)


function visibility(){
  startBut.setAttribute("style", "visibility: hidden");
  answer1El.setAttribute("style", "visibility: visible");
  answer2El.setAttribute("style", "visibility: visible");
  answer3El.setAttribute("style", "visibility: visible");
  answer4El.setAttribute("style", "visibility: visible");
  headerEl.textContent = ""
}

function questionSelect(qNum){
    console.log(qNum)
    var qPull = codingPool.codingQuest[qNum]
    console.log(qPull)
    questionEl.textContent = qPull.questions;
    answer1El.textContent = qPull.sel[0];
    answer2El.textContent = qPull.sel[1];
    answer3El.textContent = qPull.sel[2];
    answer4El.textContent = qPull.sel[3];
}

function input(a){
    var qPull = codingPool.codingQuest[questionPull].answer
    console.log(qPull)
    if(qPull === a){
        answerEl.textContent = "Correct Answer!"
        return questionPull++;
    }
    else{
        answerEl.textContent = "Wrong Answer!"
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
      if(quizTimer === 0) {
        clearInterval(timerInterval);
        headerEl.textContent = "Quiz is done!"
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