//Letter Constructor
function Letter(ltr) {
  this.ltr = ltr;
  this.appear = false; 

  this.letterRender = function () {
    if (ltr === " ") {
      this.appear = true;
      return '  ';
    };
    if (this.appear === false) {
      return ' _ ';
    } else {
      return this.letter // Accounts for non-letters (apostrophe, etc.)
    };
  };
};

//Module Exports
module.exports = { Letter };
