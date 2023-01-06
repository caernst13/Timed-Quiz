// initalizing elements from the html
var startButton = document.getElementById("start-button");
var timerEl = document.querySelector(".timer-count");
var intro = document.querySelector(".home");
var flagEl = document.querySelector(".flag");
var scoreEl = document.getElementById("score")
var nameEl = document.getElementById("name")

//hiding the score button
scoreEl.style.visibility = 'hidden';

// initalizing elements for questions and answers and giving them classes
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

//elements for the results
const resultEl = document.createElement('div');
resultEl.classList.add("result")

//constants for taking in scores 
const userName = document.createElement('h1');
const userScore = document.createElement('h4');

//all questions stored in an array
const questions = ['Q1: What is another term for zero when scoring tennis?', 'Q2: What is the fewest number of points needed to win a 12 point tie breaker?', 'Q3: What are the numbers used to keep track of the number of points a player has?', 'Q4: how manyy points does a player need to win by to win a game?', 'Q5: what is it called when tow players are even in points?'];

//all answers also stored in an array
const answers1 = ['Love', '13', '0, 1, 2, 3, 4', '1', 'tied'];
const answers2 = ['Base', '12', '1, 2, 3, 4, game', '2', 'Draw'];
const answers3 = ['Start', '7', 'love 10, 20, 30 game', '3', 'fetter'];
const answers4 = ['Null', '9', '0, 15, 30, 40, game', '4', 'duce'];

//random variables used later
var i = 0;
var correct = 0;
var incorrect = 0;
var timerCount = 60;
var stop = false

//start button
startButton.addEventListener("click", startQuiz);

//clean up to start the quiz
function startQuiz() {
  startTimer();
  intro.remove();
  generateQuestion();
}

//clean up to show scores
var highScore = function (event) {
  event.preventDefault();
  
  //take in deta and stores them in local storage
  var userNames = nameEl.value.trim()
  var userScores = timerCount;
  localStorage.setItem("userNames", userNames)
  localStorage.setItem("userScores", userScores)

  //calls display scores function
  displayScores();
}

//creates timer
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;
    if (stop) {
      return(timerCount);
    }
    if (timerCount <= 0) {
      clearInterval(timer);
      gameOver();
      return(timerCount);
    }
  }, 1000);
}

//moves on to next question 
var nextQuestion = function (event) {
  event.preventDefault();

  //checks if answer was correct and either adds or subtracts time
  if(event.target.className[8]){
    correct++
    resultEl.textContent = 'Correct!'
    timerCount = timerCount + 10
  } else {
    incorrect++
    resultEl.textContent = 'Incorrect'
    timerCount = timerCount - 10;
  }

  //clean up to move on to next question 
  switch (i) {
    case 0: answer1.classList.remove('right'); break;
    case 1: answer3.classList.remove('right'); break;
    case 2: answer4.classList.remove('right'); break;
    case 3: answer2.classList.remove('right'); break;
    default: answer4.classList.remove('right'); 
  }

  //increases question count
  i++

  //checks if all questions are over, calls game over if they are and goes to next question if not
  if (i<5) {
    generateQuestion()
  } else {
    gameOver()
  }
}

//generates questions
function generateQuestion() {
  
  //adds the right class to coresponding answer 
  switch (i) {
    case 0: answer1.classList.add('right'); break;
    case 1: answer3.classList.add('right'); break;
    case 2: answer4.classList.add('right'); break;
    case 3: answer2.classList.add('right'); break;
    default: answer4.classList.add('right'); 
  }

  //adds text to questions and answers and appends them
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

  //shows reuslt of the last question 
  flagEl.appendChild(resultEl)

  //checks if a button was clicked and calls next question function 
  var subbmit = document.querySelector(".questions")
  subbmit.addEventListener("click", nextQuestion)
}

//function for end of game
function gameOver () {
  //clean up for showing results
  stop = true;
  question.remove();
  resultEl.remove();

  //displays resutls 
  question.textContent = 'All Done!'
  const displayResults = document.createElement('h4');
  displayResults.textContent = 'Your score was: ' + timerCount + '!'
  flagEl.appendChild(question);
  question.appendChild(displayResults);

  //shows the submit name for high score button 
  scoreEl.style.visibility = 'visible';
  timerEl.style.visibility = 'hidden';
  
  //calls highscore 
  scoreEl.addEventListener('submit', highScore);
}

//displays scores 
function displayScores () {
  question.remove();
  scoreEl.remove();
  var usrnm = localStorage.getItem("userNames")
  var usrsc = localStorage.getItem("userScores")
  userName.textContent = usrnm;
  userScore.textContent = usrsc;
  flagEl.append(userName);
  flagEl.append(userScore);

}
