// ID + Class selector assignments
var startBut = document.querySelector("#start")
var headerEl = document.querySelector("#header")
var questionEl = document.querySelector("#question")
var answer1El = document.querySelector("#answer1")
var answer2El = document.querySelector("#answer2")
var answer3El = document.querySelector("#answer3")
var answer4El = document.querySelector("#answer4")
var buttonsEl = document.querySelector(".button")
var scoreEl = document.querySelector("#score")

//Variables
var quizTimer = 30
var  questionPull= 0
var userAnswer = ""


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
        "2a",
        "2b",
        "2c",
        "2d"
        ],
      "answer": "2b"
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
console.log(codingPool.codingQuest[0].answer)


function visibility(){
  startBut.setAttribute("style", "visibility: hidden");
  answer1El.setAttribute("style", "visibility: visible");
  answer2El.setAttribute("style", "visibility: visible");
  answer3El.setAttribute("style", "visibility: visible");
  answer4El.setAttribute("style", "visibility: visible");
  headerEl.textContent = ""
}

// function answerCheck1(i){
//     if (answer1El.textContent === codingPool.codingQuest[i].answer){
//         scoreEl.textContent = "You're right!"
//         i++
//         return i
//     }
//     else{
//         scoreEl.textContent = "You're wrong!"
//         i++
//         return i
//     }
// }

// function answerCheck2(i){
//     if (answer1El.textContent === codingPool.codingQuest[i].answer){
//         scoreEl.textContent = "You're right!"
//         i++
//         return i
//     }
//     else{
//         scoreEl.textContent = "You're wrong!"
//         i++
//         return i
//     }
// }

// function answerCheck3(i){
//     if (answer1El.textContent === codingPool.codingQuest[i].answer){
//         scoreEl.textContent = "You're right!"
//         i++
//         return i
//     }
//     else{
//         scoreEl.textContent = "You're wrong!"
//         i++
//         return i
//     }
// }

// function answerCheck3(i){
//     if (answer1El.textContent === codingPool.codingQuest[i].answer){
//         scoreEl.textContent = "You're right!"
//         i++
//         return i
//     }
//     else{
//         scoreEl.textContent = "You're wrong!"
//         i++
//         return i
//     }
// }

function questionSelect(){
    let qPull = codingPool.codingQuest[questionPull]
    questionEl.textContent = qPull.questions;
    answer1El.textContent = qPull.sel[0];
    answer2El.textContent = qPull.sel[1];
    answer3El.textContent = qPull.sel[2];
    answer4El.textContent = qPull.sel[3];
}


// function questionLoop(){
//   console.log(i)
//   i++
//   if (i < codingPool.codingQuest.length )

//   var varAnswer = codingPool.codingQuest[i].answer
//   console.log(varAnswer)
//   answer1El.addEventListener("click", function(){
//     if (answer1El.textContent === varAnswer){
//         scoreEl.textContent = "You're right!"
//         return i
//     }
//     else{
//         scoreEl.textContent = "You're wrong!"
//         return i
//     }
// })
//   answer2El.addEventListener("click",  function(){
//     if (answer2El.textContent === varAnswer){
//         scoreEl.textContent = "You're right!"
//         return i
//     }
//     else{
//         scoreEl.textContent = "You're wrong!"
//         return i
//     }
// })
//   answer3El.addEventListener("click",  function(){
//     if (answer3El.textContent === varAnswer){
//         scoreEl.textContent = "You're right!"
//     }
//     else{
//         scoreEl.textContent = "You're wrong!"
    
//     }
// })
//   answer4El.addEventListener("click",  function(){
//     if (answer4El.textContent === codingPool.codingQuest[i].answer){
//         scoreEl.textContent = "You're right!"
//     }
//     else{
//         scoreEl.textContent = "You're wrong!"
//     }
// })
// }

//   for(i = 0; i < codingPool.codingQuest.length; i++){
//     userAnswer = ""
//     questionEl.innerText = codingPool.codingQuest[i].questions;
//     answer1El.textContent = codingPool.codingQuest[i].sel[0];
//     answer2El.textContent = codingPool.codingQuest[i].sel[1];
//     answer3El.textContent = codingPool.codingQuest[i].sel[2];
//     answer4El.textContent = codingPool.codingQuest[i].sel[3];
//     var realAnswer = codingPool.codingQuest[i].answer;
//     while (userAnswer = ""){
//       answer1El.addEventListener("click", answerCheck1(i, userAnswer));
//       answer2El.addEventListener("click", answerCheck2(i, userAnswer));
//       answer3El.addEventListener("click", answerCheck3(i, userAnswer));
//       answer4El.addEventListener("click", answerCheck4(i, userAnswer));
//     }
//   }
// }



function quizStart() {
  var timerInterval = setInterval(function() {
      quizTimer--;
      headerEl.textContent = quizTimer + " is how much time left in the quiz";
      visibility()
      if(quizTimer> 0){
          questionSelect()
      }
      if(quizTimer === 0) {
        clearInterval(timerInterval);
        headerEl.textContent = "Quiz is done!"
      }
    }, 1000);
  }

startBut.addEventListener("click", quizStart)