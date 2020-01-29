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
var quizBox = document.querySelector("#quiz")
var highScore = document.querySelector("#highscore")
var submitButton = document.querySelector("#submit")
var nameInput = document.querySelector("#name")


//Questionaire
var codingPool = {
  "codingQuest": [
    {
      "questions": "1) What does CSS mean?",
      "sel": [
        "1) Condensed Style Sheets",
        "2) Cascading Style Sheets",
        "3) Cookies Style Sheets",
        "4) Coding Style Sheets"
      ],
      "answer": "2"
    },
    {
      "questions": "2) Where do you reference the CSS sheet in the HTML",
      "sel": [
      "1) Right after the HTML tag",
      "2) Inside the head tag",
      "3) Inside the body tag",
      "4) Anywhere in the HTML"
      ],
      "answer": "2"
      },
    {
      "questions": "3) In this for loop: 'for(i=0, i<6, i++){}', how many times will the loop run?",
      "sel": [
      "1) 7",
      "2) 0",
      "3) 3",
      "4) 6"
      ],
      "answer": "4"
    },
    {
      "questions": "4) What would x be if you add this together? x = '2' + 22 + '4'",
      "sel": [
        "1) 2224",
        "2) 28",
        "3) '2224'",
        "4) '6' + 22"
      ],
      "answer": "3"
    },
    {
      "questions": "5) 'for' and  'while' are examples of what in Javascript?",
      "sel": [
        "1) Loops",
        "2) Syntax",
        "3) Functions",
        "4) None of the above"
      ],
      "answer": "1"
    },
    {
      "questions": "6) Where can you edit HTML styling?",
      "sel": [
        "1) Javascript",
        "2) HTML",
        "3) CSS",
        "4) All of the above"
      ],
      "answer": "4"
    },
    {
      "questions": "7) When you are referencing something in CSS with a '#', what attribute is it?",
      "sel": [
        "1) Syntax",
        "2) Class",
        "3) ID",
        "4) Hashtag"
      ],
      "answer": "3"
    },
    {
      "questions": "8) How would you convert the string = '8' into an integer = 8?",
      "sel": [
        "1) parseInt()",
        "2) parse()",
        "3) stringify()",
        "4) It's already an integer",
      ],
      "answer": "1"
    },
    {
      "questions": "9) What does JSON stand for?",
      "sel": [
        "1) Java Source Object Notes",
        "2) JavaScript Object Notation",
        "3) Java Source Object Notation",
        "4) Javascript Object Notes"
      ],
      "answer": "2"
    },
    {
      "questions": "10) How can you label something to be a variable?",
      "sel": [
        "1) var",
        "2) let",
        "3) cont",
        "4) All of the above"
      ],
      "answer": "4"
    },
  ]
}


//Variables
var quizTimer = 70
var questionPull= 0
var userAnswer = ""
var totalQ = codingPool.codingQuest.length


//Initial parameters
headerEl.textContent = "Welcome to the code quiz!"
quizBox.setAttribute("style", "display: none");
highScore.setAttribute("style", "display: none")
endEl.setAttribute("style", "display: none")

//Functions
function visibility(){
  startBut.setAttribute("style", "visibility: hidden");
  introEl.setAttribute("style", "display: none");
  quizBox.setAttribute("style", "display: block");
}

function hidden(){
  quizBox.setAttribute("style", "visibility: hidden");
  highScore.setAttribute("style", "display: flex")
  questionEl.textContent =""
  endEl.setAttribute("style", "display: block")
}

function questionSelect(qNum){
  var qPull = codingPool.codingQuest[qNum];
  questionEl.textContent = qPull.questions;
  answer1El.textContent = qPull.sel[0];
  answer2El.textContent = qPull.sel[1];
  answer3El.textContent = qPull.sel[2];
  answer4El.textContent = qPull.sel[3];
}

function input(a){
  var qPull = codingPool.codingQuest[questionPull].answer
  if(qPull === a){
    questionPull++
    if(questionPull == totalQ){
      hidden()
    }
    else{
      answerEl.textContent = "Your answer is right"
      setTimeout(function(){ answerEl.textContent = ""; }, 2000)
      questionSelect(questionPull)
    }
  }
  else{
    questionPull++  
    if(questionPull == totalQ){
      hidden()      
      quizTimer = quizTimer - 7
      return quizTimer;
    }
    else{
      answerEl.textContent = "Your answer is wrong"
      quizTimer = quizTimer - 7
      setTimeout(function(){ answerEl.textContent = ""; }, 2000)
      questionSelect(questionPull)
      return quizTimer;
    }
  }
}



function quizStart() {
  questionSelect(questionPull) 
  visibility()  
  headerEl.textContent = quizTimer + " is how much time left in the quiz";
  var timerInterval = setInterval(function() {
    quizTimer--;
    headerEl.textContent = quizTimer + " is how much time left in the quiz";
    if(questionPull < totalQ){
    }
    else{
      clearInterval(timerInterval);
      var finalScore = quizTimer
      headerEl.textContent = "You finished the quiz! Your final score is " + finalScore
    }
    if(quizTimer <= 0) {
      hidden()
      clearInterval(timerInterval);
      headerEl.textContent = "Time's up!"
    }
  }, 1000);
}

function scoreBox(){
  if(nameInput.value == ""){
    alert("Please enter a name")
  }
  else{
    
  }

}


//events
startBut.addEventListener("click", quizStart)
submitButton.addEventListener("click",scoreBox)
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