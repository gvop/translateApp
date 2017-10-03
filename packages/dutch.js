'use strict';

module.exports = class Dutch {
   constructor([Dictionary, ErrorManager]) {
       this.dictionary = Dictionary;
       this.errorManager = ErrorManager;
   }
}