const questions = [
  {
    question: "What is JSON",
    answers: [
      "JavaScript Official Notation",
      "Javascript Optional Notation",
      "Javascript Object Notation",
      "Just Some Other Notation"
    ],
    key: 2
  },
  {
    question: "What is Jquery",
    answers: [
      "A Html FrameWork",
      "A CSS Framework",
      "A JS Framework",
      "SQL Language"
    ],
    key: 2
  },
  {
    question: "What does DOM stand for",
    answers: [
      "Document Object Model",
      "Document Object Manipulation",
      "Data Object Model",
      "Delayed Onset MuscleSoreness"
    ],
    key: 0
  },
  {
    question: "What is NodeJS",
    answers: [
      "CSS FrameWork",
      "JS Server Environment",
      "JS UI Library",
      "Ruby on Rails Framework"
    ],
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
  quizGame.style = "display: flex;";
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
    endGame();
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
  score = time;
  time = 0;
  timer.innerHTML = "High Scores";
  clearInterval(timeThing);
  quizGame.style = "display: none;";
  scorediv.style = "display: flex";
  allScores = JSON.parse(localStorage.getItem("highscores"));
  allScores.push(score);
  for (var i = 0; i < allScores.length; i++) {
    scorediv.append(allScores[i]);
  }
  localStorage.setItem("highScores", JSON.stringify(allScores));
  var publishScores = JSON.parse(localStorage.getItem("highScores"));
  console.log(publishScores);
}
// console.log(data);
