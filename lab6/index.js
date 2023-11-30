const { NeuralNetwork, Topology } = require("./nnpkg");

function ShowResult(doubles) {
  for (let i = 0; i < doubles.length; i++) {
    console.log(doubles[i] + "\t");
  }
  console.log();
}

// Example usage
const topology = new Topology(6, 2, 4, 0.1);
const neuralNetwork = new NeuralNetwork(topology);

const trainInput1_1 = [0, 0, 0, 1, 1, 1];
const trainInput1_2 = [0, 0, 0, 1, 0, 1];
const trainInput1_3 = [0, 0, 0, 0, 1, 1];
const expectedResult1 = [0, 1, 1, 0];

const trainInput2_1 = [1, 1, 1, 0, 0, 0];
const trainInput2_2 = [1, 0, 1, 0, 0, 0];
const trainInput2_3 = [0, 1, 1, 0, 0, 0];
const expectedResult2 = [1, 0, 0, 1];

for (let i = 0; i < 1000; i++) {
  neuralNetwork.TrainNetwork(trainInput1_1, expectedResult1);
  neuralNetwork.TrainNetwork(trainInput1_2, expectedResult1);
  neuralNetwork.TrainNetwork(trainInput1_3, expectedResult1);
}

for (let i = 0; i < 1000; i++) {
  neuralNetwork.TrainNetwork(trainInput2_1, expectedResult2);
  neuralNetwork.TrainNetwork(trainInput2_2, expectedResult2);
  neuralNetwork.TrainNetwork(trainInput2_3, expectedResult2);
}

const input = [0, 0, 0, 0, 0, 1];
const input1 = [1, 0, 0, 0, 0, 0];

const output1 = neuralNetwork.Handle(input1);
const output = neuralNetwork.Handle(input);

ShowResult(output1);
ShowResult(output);
