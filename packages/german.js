'use strict';

module.exports = class German {
    constructor([Dictionary, ErrorManager]) {
        this.dictionary = Dictionary;
        this.errorManager = ErrorManager;
    }
}