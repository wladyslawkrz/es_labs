module.exports = class Neuron {
  constructor(weightCount) {
    this.weights = new Array(weightCount).fill(0);
    this.output = 0;
  }
};
