var startButton = document.getElementById("start-button");
var timerEl = document.querySelector(".timer-count");
var intro = document.querySelector(".home");
var flagEl = document.querySelector(".flag");


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

const questions = ['Q1: What is another term for zero when scoring tennis?', 'Q2: What is the fewest number of points needed to win a 12 point tie breaker?', 'Q3: What are the numbers used to keep track of the number of points a player has?', 'Q4: how manyy points does a player need to win by to win a game?', 'Q5: what is it called when tow players are even in points?'];

const answers1 = ['Love', '13', '0, 1, 2, 3, 4', '1', 'tied'];
const answers2 = ['Base', '12', '1, 2, 3, 4, game', '2', 'Draw'];
const answers3 = ['Start', '7', 'love 10, 20, 30 game', '3', 'fetter'];
const answers4 = ['Null', '9', '0, 15, 30, 40, game', '4', 'duce'];

var i = 0;

startButton.addEventListener("click", startQuiz);

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
var nextQuestion = function (event) {
  event.preventDefault();

  console.log(i)
  generateQuestion()
}

function generateQuestion() {
  question.textContent = questions[i];
  flagEl.appendChild(question);
  answer1.textContent = answers1[i];
  question.appendChild(answer1);
  answer2.textContent = answers2[i];
  question.appendChild(answer2);
  answer3.textContent = answers3[i];
  question.appendChild(answer3);
  answer4.textContent = answers4[i];
  question.appendChild(answer4);
  i++
  console.log(i, + "first")

  var answerEl = document.querySelector('.answers');
  answerEl.addEventListener("click", nextQuestion);
}

 
// .classList('')11-007
