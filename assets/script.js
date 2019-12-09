const questions = [
  {
    question: "What is 1",
    answers: ["what", "what2", "what3", "what4"],
    key: 1
  },
  {
    question: "What is 2",
    answers: ["what", "what2", "what3", "what4"],
    key: 1
  },
  {
    question: "What is 3",
    answers: ["what", "what2", "what3", "what4"],
    key: 1
  },
  {
    question: "What is 4",
    answers: ["what", "what2", "what3", "what4"],
    key: 1
  }
];

let header = document.querySelector("#header");
let start = document.querySelector(".beginQuiz");
let next = document.querySelector("#next");
let result = document.querySelector(".result");
let index = 0;
let time = 59;
let score = 0;
let allScores = [];
var highScores = localStorage.getItem("highscores");
let timer = document.querySelector("#timer");
let quizGame = document.querySelector("#quizGame");
let scorediv = document.querySelector("#highscores");
next.addEventListener("click", nextQuestion);

function startQuiz() {
  timer.style = "display: flex;";
  start.style = "display: none;";
  next.style = "display: flex;";
  timeThing;
  header.innerHTML = questions[index].question;
  for (var i = 0; i < 4; i++) {
    let question = document.getElementById(`${i}`);
    question.innerHTML = questions[index].answers[i];
  }
}
var timeThing = setInterval(function() {
  timer.innerHTML = time;
  time--;
  if (time < 0) {
    clearInterval(timeThing);
    result.innerHTML = "Times Up!";
  }
}, 1000);

function checkAnswer() {
  var target = event.currentTarget;
  index++;
  console.log(index);
  if (index == 4) {
    console.log("hello");
    endGame();
  }
  if (target.id == questions[index].key) {
    result.innerHTML = "Correct!";
    score += time;
    nextQuestion();
    console.log(score);
    console.log("correct");
  } else {
    result.innerHTML = "Incorrect!";
    time -= 10;
    console.log("incorrect");
    nextQuestion();
  }
}

function nextQuestion() {
  header.innerHTML = questions[index].question;
  for (var i = 0; i < 4; i++) {
    let question = document.getElementById(`${i}`);
    question.innerHTML = questions[index].answers[i];
  }
}

function endGame() {
  console.log("im in");
  time = 0;
  timer.innerHTML = "High Scores";
  clearInterval(timeThing);
  quizGame.style = "display: none;";
  scorediv.style = "display: flex";
  let temp = { score };
  allScores.push(temp);
  localStorage.setItem("highScores", JSON.stringify(allScores));
  var publishScores = JSON.parse(localStorage.getItem("highScores"));
  console.log(publishScores);
}
// console.log(data);
