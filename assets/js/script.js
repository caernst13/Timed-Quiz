var startButton = document.getElementById("start-button");
var timerEl = document.querySelector(".timer-count");
var intro = document.querySelector(".home");
var flagEl = document.querySelector(".flag");


const question = document.createElement("div");
question.classList.add("questions");
const answer1 = document.createElement("button");
answer1.classList.add("answers");
const answer2 = document.createElement("button");
answer2.classList.add("answers",);
const answer3 = document.createElement("button");
answer3.classList.add("answers",);
const answer4 = document.createElement("button");
answer4.classList.add("answers",);

const resultEl = document.createElement('div');
resultEl.classList.add("result")

const questions = ['Q1: What is another term for zero when scoring tennis?', 'Q2: What is the fewest number of points needed to win a 12 point tie breaker?', 'Q3: What are the numbers used to keep track of the number of points a player has?', 'Q4: how manyy points does a player need to win by to win a game?', 'Q5: what is it called when tow players are even in points?'];

const answers1 = ['Love', '13', '0, 1, 2, 3, 4', '1', 'tied'];
const answers2 = ['Base', '12', '1, 2, 3, 4, game', '2', 'Draw'];
const answers3 = ['Start', '7', 'love 10, 20, 30 game', '3', 'fetter'];
const answers4 = ['Null', '9', '0, 15, 30, 40, game', '4', 'duce'];

var i = 0;
var correct = 0;
var incorrect = 0;

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
  if(event.target.className[8]){
    correct++
    resultEl.textContent = 'Correct!'
  } else {
    incorrect++
    resultEl.textContent = 'Incorrect'
  }
  

  switch (i) {
    case 0: answer1.classList.remove('right'); break;
    case 1: answer3.classList.remove('right'); break;
    case 2: answer4.classList.remove('right'); break;
    case 3: answer2.classList.remove('right'); break;
    default: answer4.classList.remove('right'); 
  }
  i++

  if (i<5) {
    generateQuestion()
  } else {
    console.log('test over')
  }
}

function generateQuestion() {
  switch (i) {
    case 0: answer1.classList.add('right'); break;
    case 1: answer3.classList.add('right'); break;
    case 2: answer4.classList.add('right'); break;
    case 3: answer2.classList.add('right'); break;
    default: answer4.classList.add('right'); 
  }
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

  flagEl.appendChild(resultEl)

  var subbmit = document.querySelector(".questions")
  subbmit.addEventListener("click", nextQuestion)

}
