class Topology {
  constructor(inputCount, outputCount, grossberg, learningRate) {
    this.KohonenInputCount = inputCount;
    this.KohonenOutputCount = outputCount;
    this.GrossbergCount = grossberg;
    this.LearningRate = learningRate;
  }
}

class Neuron {
  constructor(neuronAmount) {
    this.Weights = [];

    this.InitWeightsRandomValue(neuronAmount);
  }

  InitWeightsRandomValue(neuronAmount) {
    for (let i = 0; i < neuronAmount; i++) {
      this.Weights.push(Math.random());
    }
  }

  Sigmoid(x) {
    return 1.0 / (1.0 + Math.pow(Math.E, -x));
  }
}

class Layer {
  constructor(neurons) {
    this.Neurons = neurons;
  }
}

class NeuralNetwork {
  constructor(topology) {
    this.Topology = topology;
    this.Layers = [];

    this.CreateKohonenLayer();
    this.CreateGrossbergLayer();
  }

  Handle(input) {
    const signals = this.TrowToKohonenLayer(input);
    const result = this.TrowToGrossbergLayer(signals);
    return result;
  }

  TrainGrossberg(signal, expected) {
    const layer = this.Layers[this.Layers.length - 1];
    const results = this.TrowToGrossbergLayer(signal);

    for (let i = 0; i < layer.Neurons.length; i++) {
      for (let j = 0; j < layer.Neurons[i].Weights.length; j++) {
        layer.Neurons[i].Weights[j] +=
          (expected[i] - layer.Neurons[i].Weights[j]) * signal[j];
      }
    }
  }

  TrainKohonen(inputs) {
    const output = this.TrowToKohonenLayer(inputs);
    return output;
  }

  TrowToGrossbergLayer(signals) {
    const layer = this.Layers[this.Layers.length - 1];
    const results = new Array(this.Topology.GrossbergCount).fill(0);

    for (let i = 0; i < results.length; i++) {
      for (let j = 0; j < signals.length; j++) {
        results[i] += signals[j] * layer.Neurons[i].Weights[j];
      }
    }

    return results;
  }

  TrowToKohonenLayer(input) {
    const layer = this.Layers[0];
    const neurons = layer.Neurons;

    const results = new Array(this.Topology.KohonenOutputCount).fill(0);

    for (let i = 0; i < results.length; i++) {
      for (let j = 0; j < input.length; j++) {
        results[i] += input[j] * neurons[i].Weights[j];
      }
    }

    const maxValue = Math.max(...results);
    const maxIndex = results.indexOf(maxValue);

    const signals = new Array(results.length).fill(0);

    for (let i = 0; i < results.length; i++) {
      signals[i] = i === maxIndex ? 1 : 0;
    }

    for (let i = 0; i < neurons[maxIndex].Weights.length; i++) {
      neurons[maxIndex].Weights[i] +=
        this.Topology.LearningRate * (input[i] - neurons[maxIndex].Weights[i]);
    }

    return signals;
  }

  TrainNetwork(inputs, expectedResult) {
    const kohonenOutput = this.TrainKohonen(inputs);
    this.TrainGrossberg(kohonenOutput, expectedResult);
  }

  CreateKohonenLayer() {
    const outneurons = Array.from(
      { length: this.Topology.KohonenOutputCount },
      () => new Neuron(this.Topology.KohonenInputCount)
    );
    const outlayer = new Layer(outneurons);
    this.Layers.push(outlayer);
  }

  CreateGrossbergLayer() {
    const neurons = Array.from(
      { length: this.Topology.GrossbergCount },
      () => new Neuron(this.Topology.KohonenOutputCount)
    );
    const layer = new Layer(neurons);
    this.Layers.push(layer);
  }
}

module.exports = {
  Topology,
  NeuralNetwork,
};
