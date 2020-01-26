var startBut = document.querySelector("#start")
var headerEl = document.querySelector("#header")
var quizTimer = 10



var codingPool = {
  "codingQuest": [
    {
      "question": "Question 1 here",
      "sel": [
        "answer 1a",
        "answer 2a",
        "answer 3a",
        "answer 4a"
      ],
      "answer": "answer 1a"
    },
    {
      "question": "Question 2 here",
      "sel": [
        "answer 1b",
        "answer 2b",
        "answer 3b",
        "answer 4b"
        ],
      "answer": "answer 2b"
    },
    {
      "question": "Question 3 here",
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


headerEl.textContent = "Welcome to the code quiz!"

function quizStart() {
    startBut.setAttribute("style", "visibility: hidden");
    var timerInterval = setInterval(function() {
      quizTimer--;
      headerEl.textContent = quizTimer + " is how much time left in the quiz";
      if(quizTimer === 0) {
        clearInterval(timerInterval);
        headerEl.textContent = "Quiz is done!"
      }
    }, 1000);
  }

startBut.addEventListener("click", quizStart)