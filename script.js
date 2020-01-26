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
var introEl = document.querySelector("#intro")

//Questionaire
var codingPool = {
  "codingQuest": [
    {
      "questions": "What does CSS mean?",
      "sel": [
        "1) Condensed Style Sheets",
        "2) Cascading Style Sheets",
        "3) Cookies Style Sheets",
        "4) Coding Style Sheets"
      ],
      "answer": "2"
    },
    {
      "questions": "Where do you reference the CSS sheet in the HTML",
      "sel": [
      "1) Right after the HTML tag",
      "2) Inside the head tag",
      "3) Inside the body tag",
      "4) Anywhere in the HTML"
      ],
      "answer": "2"
      },
    {
      "questions": "In this for loop: 'for(i=0, i<6, i++){}', how many times will the loop run?",
      "sel": [
      "1) 7",
      "2) 0",
      "3) 3",
      "4) 6"
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
var rightWrong = "Yes"


//Initial parameters
headerEl.textContent = "Welcome to the code quiz!"
answer1El.setAttribute("style", "visibility: hidden");
answer2El.setAttribute("style", "visibility: hidden");
answer3El.setAttribute("style", "visibility: hidden");
answer4El.setAttribute("style", "visibility: hidden");

//Functions
function visibility(){
  startBut.setAttribute("style", "visibility: hidden");
  answer1El.setAttribute("style", "visibility: visible");
  answer2El.setAttribute("style", "visibility: visible");
  answer3El.setAttribute("style", "visibility: visible");
  answer4El.setAttribute("style", "visibility: visible");
  introEl.setAttribute("style", "visibility: hidden")
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
    answerEl.textContent = "Your answer is right"
    return questionPull++;
  }
  else{
    answerEl.textContent = "Your answer is wrong"
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
      setTimeout(function(){ answerEl.textContent === ""; }, 1000)        
    }
    else{
      clearInterval(timerInterval);
      var finalScore = quizTimer
      hidden()
      headerEl.textContent = "You finished the quiz! Your final score is " + finalScore
    }
    if(quizTimer === 0) {
      hidden()
      clearInterval(timerInterval);
      headerEl.textContent = "Time's up!"
    }
  }, 1000);
}


//events
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