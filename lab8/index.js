const NeuralNetwork = require("./nn");

const trainInput = [1, 1, 1, 1, -1, 1, 1, -1, 1];
const trainInput1 = [1, -1, -1, 1, -1, -1, 1, 1, 1];

const neuralNetwork = new NeuralNetwork(9, 0);

neuralNetwork.train(trainInput);
neuralNetwork.train(trainInput1);

const input = [1, -1, 1, 1, -1, 1, 1, 1, 1];
const output = neuralNetwork.handle(input);

console.log("\n");
console.log("Input data: ");
console.log(...input);

console.log("\n");

console.log("Result:");
console.log(...output);
console.log("\n");
