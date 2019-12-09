var data = {
  stuff: [
    {
      question: "What",
      answers: ["1", "2", "3", "4"],
      answer: 1
    },
    {
      question: "What2",
      answers: ["1", "2", "3", "4"],
      answer: 2
    },
    {
      question: "What3",
      answers: ["1", "2", "3", "4"],
      answer: 3
    },
    {
      question: "What4",
      answers: ["1", "2", "3", "4"],
      answer: 4
    }
  ]
};

let header = document.querySelector("#header");
let start = document.querySelector(".beginQuiz");
let index = 0;
function startQuiz() {
  start.style = "display: none;";
  header.innerHTML = data.stuff[index].question;
  for (var i = 0; i < 4; i++) {
    let question = document.getElementById(`${i}`);
    question.innerHTML = data.stuff[index].answers[i];
  }

  document.addEventListener("click", function() {
    event.stopPropagation();
    if ((this.value = data.stuff[index].answer)) {
      console.log("yes");
    } else {
      console.log("no");
    }
  });
  index++;
}

// console.log(data);
