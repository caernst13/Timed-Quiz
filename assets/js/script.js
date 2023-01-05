var startButton = document.getElementById("start-button");
var timerEl = document.querySelector(".timer-count");
var intro = document.querySelector(".home");
var flagEl = document.querySelector(".flag");


startButton.addEventListener("click", startQuiz);

const question = document.createElement("div");
question.classList.add("questions");
const answer1 = document.createElement("button");
answer1.classList.add("answers");
const answer2 = document.createElement("button");
answer2.classList.add("answers");
const answer3 = document.createElement("button");
answer3.classList.add("answers");
const answer4 = document.createElement("button");
answer4.classList.add("answers");

function startQuiz() {
    startTimer();
    intro.remove();
    generateQuestion();
}



function startTimer() {
    var timerCount = 61
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = timerCount;
      if (timerCount === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  function generateQuestion() {
    question.textContent = 'What is Another term for zero when scoring tennis?';
    flagEl.appendChild(question);
    answer1.textContent = "Love";
    question.appendChild(answer1);
    answer2.textContent = 'Base';
    question.appendChild(answer2);
    answer3.textContent = 'Start';
    question.appendChild(answer3);
    answer4.textContent = 'Null';
    question.appendChild(answer4);
    
  } 
  //.classList('')11-007