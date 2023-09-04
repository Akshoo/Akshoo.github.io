'use strict';

const inputBox = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const message = document.querySelector(".message");
const scoreContent = document.querySelector(".score");
const highScoreContent = document.querySelector(".highscore");
const reveal = document.querySelector(".number");

let hasWon = false;
let score = 20;
let highScore = 0;

let secretNumber;

// generating a secret number
const generateSecretNumber = function () {
    let secNum = Math.trunc(Math.random() * 21);
    secretNumber = secNum;
    console.log(secNum);
    return secNum;
}
generateSecretNumber();

//taking input on click of Check button
checkButton.addEventListener("click", function () {
    console.log(inputBox.value)
    if (hasWon)
        message.textContent = "Already Won!!... Play Again!";

    else if (score == 0)
        message.textContent = "You Lose💔... Try Again";

    else if (inputBox.value == "")
        message.textContent = "No input...⛔";

    else if (inputBox.value > secretNumber) {
        message.textContent = "Too High...📈";
        scoreContent.textContent = String(--score);
    }
    else if (inputBox.value < secretNumber) {
        message.textContent = "Too low...📉";
        scoreContent.textContent = String(--score);
    }
    else {
        message.textContent = "Correct!! 🎉";
        document.querySelector("body").style.backgroundColor = "#60b347";
        reveal.textContent = secretNumber;
        hasWon = true;
        highScore = score > highScore ? score : highScore;
        highScoreContent.textContent = String(highScore);
    }

});

// Playing again
againButton.addEventListener("click", function () {
    message.textContent = "Start guessing...";
    scoreContent.textContent = "20";
    score = 20;
    document.querySelector("body").style.backgroundColor = "#222";
    generateSecretNumber();
    hasWon = false;
    reveal.textContent = "?";
    inputBox.value = null;
});