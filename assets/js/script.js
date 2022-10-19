var startButton = document.getElementById("start-button");
var timerEl = document.querySelector(".timer-count");



startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startTimer()
}



function startTimer() {
    var timerCount = 61
    console.log(timerCount)
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = timerCount;
      if (timerCount === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }