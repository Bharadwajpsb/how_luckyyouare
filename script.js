const C = console;
const D = document;

let lucky = Math.floor(Math.random() * 20); //* PURE MATHS
let score = 10;
C.log(lucky);

// # ELEMENTS
const userInputFiled = D.getElementById("guessing");
const checkButton = D.getElementById("check");
const messageBox = D.getElementById("message");
const main = D.getElementById("main");
const scoreSection = D.getElementById("score");
const againButton = D.getElementById("again");
const leftSection = D.querySelector(".left");


//* Messages
const WIN_MESSAGE = "Wow! You guessed right! 🤯, You are a lucky person!";
const LOW_MESSAGE = "Your guess is too low! 📉 ";
const HIGH_MESSAGE = "Your guess is too high! 📈";
const OUT_OF_GUESSES_MESSAGE = "You have run out of score ⚠️⚠️";
const OUT_OF_RANGE = "Please enter a number between 0 and 20";

const checkFunction = () => {
  const userGuess = Number(userInputFiled.value);

  if (userGuess >= 20 || userGuess < 0) {
    messageBox.textContent = OUT_OF_RANGE;
    main.style.backgroundColor = "#333";
  } else {
    if (userGuess == lucky ) {
      messageBox.textContent = WIN_MESSAGE;
      main.style.backgroundColor = "#367E18";
      leftSection.style.visibility = "hidden";
    } else if (userGuess > lucky) {
      messageBox.textContent = HIGH_MESSAGE;
      main.style.backgroundColor = "#DD5353";
      score = score - 1;
    } else if (userGuess < lucky) {
      messageBox.textContent = LOW_MESSAGE;
      main.style.backgroundColor = "#DD5353";
      score = score - 1;
    }
  }
  if (score == 0) {
    leftSection.style.visibility = "hidden";
    messageBox.textContent = OUT_OF_GUESSES_MESSAGE;
    
    main.style.backgroundColor = "red";
  }
  scoreSection.textContent = score;
};

checkButton.addEventListener("click", checkFunction);
againButton.addEventListener("click", () => {
  lucky = Math.floor(Math.random() * 20);
  console.log(lucky);
  score = 10;
  scoreSection.textContent = score;

  main.style.backgroundColor = "#333";

  leftSection.style.visibility = "visible";
  messageBox.textContent = "Start guessing...";

  userInputFiled.value = "";
});
