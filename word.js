//Requires other files
var ltr = require("./letters.js");

//Word Array
var letterArray = [];
var gameHUD = [];

//Word Constructor
function Word(wordchoice) {
  this.choice = wordchoice;
  this.splitIt = function() {
    var letters = wordchoice.split('')
    letterArray.push(letters)
  };
  this.renderWord = function () {
    var letters = wordchoice.split('');
    letterArray.push(letters);
    for (i = 0; i < letterArray.length; i++) {
      var space = new ltr.Letter(letterArray[i])
      space.letterRender();
      gameHUD.push(space);
    }
  }
  this.logMe = function () {
    console.log(letterArray)
  };
}

//Module Exports
module.exports = { Word }