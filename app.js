//Pulls in dependencies
var inquirer = require("inquirer");

//Requires additional files
var game = require("./game.js");

function begin() {
  inquirer.prompt([

    {
      type: "confirm",
      message: "Would you like to play a game of hangman?",
      name: "command"
    }

  ]).then(function (choice) {
    if (choice.command === true) {
      game.startGame();
    } else {
      game.endGame();
    }
  })
}

begin();