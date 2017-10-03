'use strict';

module.exports = class ErrorManager {
  constructor([Logger]) {
    this.logger = Logger;
  }

  errorMessage(message) {
    return this.logger.errorMessage(`Error: ${message}`);
  }

  errorMessageWrongType(message) {
    return this.logger.errorMessageWrongType(`Error: ${message}`);
  }

};

