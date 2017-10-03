'use strict';

const colors = require('colors');

const Dictionary = require('./packages/dictionary');

const Dutch = require('./packages/dutch');
const German = require('./packages/german');
const Spanish = require('./packages/spanish');

const Logger = require('./packages/logger');
const ErrorManager = require('./packages/error');

const Container = require('./container');

const packagesRegister = {
  Dutch: {
    dependent: ['Dictionary', 'ErrorManager']
  },
  German: {
    dependent: ['Dictionary', 'ErrorManager']
  },
  Dictionary: {
    dependent: ['ErrorManager']
  },
  ErrorManager: {
    dependent: ['Logger']
  }
};

// const TranslateContainer = new Container(packagesRegister, Logger);

// const TranslateContainer = new Container(packagesRegister, Logger, {red: ()=>{}});

const TranslateContainer = new Container(packagesRegister, Logger, colors);


setTimeout(() => TranslateContainer.register(ErrorManager), 1000);
setTimeout(() => TranslateContainer.register(German), 2000);
setTimeout(() => TranslateContainer.register(Spanish), 3000);
setTimeout(() => TranslateContainer.register(() => {}), 4000);
setTimeout(() => TranslateContainer.register(Dictionary), 5000);
setTimeout(() => TranslateContainer.register(Dutch), 6000);
setTimeout(() => TranslateContainer.register(German), 7000);

setTimeout(() => console.log(TranslateContainer.getPackages()), 8000);


