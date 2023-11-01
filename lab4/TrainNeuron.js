module.exports = class TrainNeuron {
  constructor() {
    this.weight = 0.5;
    this.lastError = 0;
    this.smoothing = 0.00001;
  }

  processInputData(input) {
    if (this.weight * input < 0) {
      return 0.1 * this.weight * input;
    } else {
      return this.weight * input;
    }
  }

  processRestoreData(output) {
    return output / (this.weight * 0.1);
  }

  train(input, expectedValue) {
    let result = 0;
    result = this.processInputData(input);

    this.lastError = expectedValue - result;
    const correction = (this.lastError / result) * this.smoothing;

    this.weight += correction;
  }

  checkTraining() {
    if (this.lastError > this.smoothing || this.lastError < -this.smoothing) {
      return true;
    }

    return false;
  }
};
