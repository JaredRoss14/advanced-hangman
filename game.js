//Pulls in dependencies
var inquirer = require("inquirer");

//Pulls in required files
var wordConst = require("./word.js");
var wordArray = ["Spiders", "Josh Mohundro", "Fist of Five", "Yuri Tuppance", "Elijah Wilkes", "Javascript", "HTML", "CSS", "TrilogyEd", "Thomas Eaves", "Tasha Casagni", "JQuery", "Slack", "Bootcampspot", "Gitlab", "Github", "University of Richmond"];

//Define Variables
var lettersGuessed = [];
var gameHUD = [];
var guessesRemaining = 6;
var answer = [];
var letterArray = [];
var messages = {
  win: "You win!",
  lose: "You lose!",
  guessed: "Letter already guessed, please guess again...",
  validLetter: "Please enter a letter from A-Z",
  gameover: "Thanks for playing!"
}

//Picks a word from the array at random

function startGame() {
  reset();
  var selection = new wordConst.Word(wordArray[Math.floor(Math.random() * wordArray.length)])
  console.log(selection.choice);
  selection.splitIt();
  selection.logMe();
  selection.renderWord();
  selection.displayHUD();
};

function endGame() {
  console.log(messages.gameover);
};

function displayHUD() {
  console.log("----------------------------------------------")
  console.log("");
  console.log(gameHUD);
  console.log("Guesses Remaining: " + guessesRemaining);
};

function reset() {
  var lettersGuessed = [];
  var gameHUD = [];
  var guessesRemaining = 6;
  var answer = [];
  var letterArray = [];
};

startGame();

module.exports = { startGame };