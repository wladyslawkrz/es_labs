const TrainNeuron = require("./TrainNeuron");

const prompt = require("prompt-sync")();

const neuron = new TrainNeuron();

// нейронка переводит пинту пива в литр.
// британская пинта = 0.568 литра

let i = 0;

const liter = 1000;
const pint = 568;

do {
  i++;
  neuron.train(liter, pint);
} while (neuron.checkTraining());

console.log(
  `Итераций тренировки нейрона: ${i}\nВероятность ошибки: ${neuron.lastError}\nВес: ${neuron.weight}\n`
);

let prompts = 2;

while (prompts >= 0) {
  const input = parseFloat(prompt("Введите количество пинт пива: "));

  console.log(`${input} пинт равно ${neuron.processInputData(input)} литров`);

  prompts--;
}
