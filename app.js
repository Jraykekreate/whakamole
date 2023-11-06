let score = document.querySelector(".score");
let container = document.querySelector(".container");
let timeLeft = document.querySelector(".timeLeft");
let time = 60;
let initialScore = 0;
let chosenDiv;
//console.log(container);
function style(element) {}
function createBoard(container) {
  for (let index = 0; index < 9; index++) {
    let div = document.createElement("div");
    div.setAttribute("data-id", index);
    div.setAttribute("data-flipped", false);
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.backgroundColor = "BBBDBD";
    container.appendChild(div);
  }
  let arr = container.children;
  arr = Array.from(arr);
  console.log(arr);

  randomBoardSelection();
  for (const div of arr) {
    div.addEventListener("click", hitOrMiss);
  }

  countDown();
}
function randomBoardSelection() {
  let selectedDiv;
  setInterval(() => {
    let containerChildren = document.querySelectorAll(".container div");
    let selection = Math.floor(Math.random() * 9);
    containerChildren = Array.from(containerChildren);
    selectedDiv = containerChildren[selection];
    chosenDiv = selectedDiv;
    console.log(selectedDiv.dataset.flipped);
    if (selectedDiv.dataset.flipped) {
      selectedDiv.style.backgroundImage = "url('./mole.jpg')";
      selectedDiv.style.backgroundSize = "contain";
      selectedDiv.style.backgroundRepeat = "no-repeat";
      selectedDiv.style.backgroundPosition = "center";

      selectedDiv.dataset.flipped = true;
      setTimeout(() => {
        selectedDiv.style.backgroundImage = "none";
        selectedDiv.style.backgroundColor = "BBBDBD";
        selectedDiv.dataset.flipped = false;
      }, 510);
    }
  }, 1000);
  selectedDiv;
}
createBoard(container);
function hitOrMiss(e) {
  let hit = e.target;
  let id = e.target.dataset.id;
  console.log("hit");
  if (e.target.dataset.id === chosenDiv.dataset.id) {
    console.log("hit2");
    scoreIt();
  } else {
    return;
  }
}
function scoreIt() {
  initialScore++;
  score.innerText = initialScore;
}

function countDown() {
  setInterval(() => {
    timeLeft.innerText = time;
    time--;
    if (time === 0 || time < 0) {
      endGameStyle();
      return;
    }
  }, 1000);
}

function endGameStyle() {
  let body = document.querySelector("body");
  let finalScore = document.querySelector(".finalScore");
  body.style.display = "flex";
  body.style.alignItems = "center";
  body.style.justifyContent = "center";
  body.style.fontSize = "2rem";
  body.style.flexDirection = "column";
  container.style.display = "none";
  score.innerText = initialScore;
  finalScore.innerText = "Your final score is " + initialScore;
  timeLeft.innerHTML = "<br> Your time is up <br> Refresh to replay";
}
