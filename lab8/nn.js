const Neuron = require("./neuron");

module.exports = class NeuralNetwork {
  constructor(numberOfNeurons, thresh) {
    this.thresh = thresh;
    this.outputs = new Array(numberOfNeurons).fill(0);
    this.neurons = Array.from(
      { length: numberOfNeurons },
      () => new Neuron(numberOfNeurons)
    );
  }

  train(input) {
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length; j++) {
        if (i !== j) {
          this.neurons[i].weights[j] +=
            (input[i] * input[j]) / this.neurons.length;
        }
      }
    }
  }

  handle(inputs) {
    for (let i = 0; i < inputs.length; i++) {
      this.outputs[i] = inputs[i];
      this.neurons[i].output = inputs[i];
    }

    const maxIterations = 1000;
    let iteration = 0;
    let stable = false;

    while (!stable && iteration < maxIterations) {
      stable = true;

      for (let i = 0; i < this.neurons.length; i++) {
        let sum = 0;

        for (let j = 0; j < this.neurons.length; j++) {
          sum += this.outputs[j] * this.neurons[i].weights[j];
        }

        if (sum > this.thresh) {
          this.neurons[i].output = 1;
        } else if (sum < -this.thresh) {
          this.neurons[i].output = -1;
        } else {
          this.neurons[i].output = this.outputs[i];
        }

        if (this.neurons[i].output !== this.outputs[i]) {
          stable = false;
        }

        this.outputs[i] = this.neurons[i].output;
      }

      iteration++;
    }

    return this.outputs;
  }
};
