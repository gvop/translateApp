'use strict';

module.exports = class Container {
  constructor(packagesList, Logger, colors = false) {
    this.packagesList = packagesList;
    this.registeredPackages = {
      Logger: this._registerLogger(Logger, colors)
    };
  }

  register(inputPackage) {
    if (!inputPackage.name) {
      return this.registeredPackages.ErrorManager.errorMessageWrongType('You can only add Classes...');
    } else if (!this.packagesList[inputPackage.name]) {
      return this.registeredPackages.ErrorManager.errorMessage('This packages is not allowed.');
    }

    const missingDependencies = this._checkForMissingDependencies(inputPackage);
    if (!missingDependencies[0]) {
      this._setPackage(inputPackage);
    } else {
      missingDependencies.forEach(data => {
        if (data) {
          this.registeredPackages.ErrorManager.errorMessage(`This package needs ${data}`);
        }
      });
    }
  }

  getPackages() {
    return this.registeredPackages;
  }

  _registerLogger(Logger, colors) {
    if(Logger && (colors && colors.red && colors.red.underline && colors.green)) {
      return new Logger(colors);
    } else {
      console.log("INITIAL ERROR: You need to add the COLORS packages, with the right atributes to initialization this class..");
      process.exit();
    }
  }

  _setPackage(singlePackage) {
    this.registeredPackages[singlePackage.name] = new singlePackage(this._checkForDependencies(singlePackage));
    if (this.registeredPackages[singlePackage.name]) {
      this.registeredPackages.Logger.successMessage(`${singlePackage.name} has been registered Successfully`);
    } else {
      this.registeredPackages.Logger.errorMessageWrongType(`Something has gone wrong during the register of ${singlePackage.name}`);
    }
  }

  _checkForMissingDependencies(inputPackage) {
    const packageDependency = this.packagesList[inputPackage.name].dependent;

    const missingDependencies = packageDependency.map(data => {
      if (!this.registeredPackages[data]) return data;
    });
    return missingDependencies;
  }

  _checkForDependencies(inputPackage) {
    const packageDependency = this.packagesList[inputPackage.name].dependent;

    const needDependencies = packageDependency.map(data => {
      if (this.registeredPackages[data]) {
        return this.registeredPackages[data];
      }
    });
    return needDependencies;
  }

};