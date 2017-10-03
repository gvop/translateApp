'use strict';

module.exports = class Logger {
  constructor(colors) {
    this.colors = colors;
  }
  errorMessage(message) {
    return console.log(this.colors.red(`A message via the logger:${message}`));
  }

  errorMessageWrongType(message) {
    return console.log(this.colors.red.underline(`A message via the logger:${message}`));
  }

  successMessage(message) {
    return console.log(this.colors.green(`A message via the logger:${message}`));
  }
};
