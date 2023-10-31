const prompt = require("prompt-sync")();

let probabilityB1A;
let probabilityB2A;
let probabilityB3A;

const enteredProbs = [];

enteredProbs.push(parseFloat(prompt(`Введите вероятность (0 - 1) B1: `)));
enteredProbs.push(parseFloat(prompt(`Введите вероятность (0 - 1) B2: `)));
enteredProbs.push(parseFloat(prompt(`Введите вероятность (0 - 1) B3: `)));
enteredProbs.push(parseFloat(prompt(`Введите вероятность (0 - 1) A|B1: `)));
enteredProbs.push(parseFloat(prompt(`Введите вероятность (0 - 1) A|B2: `)));
enteredProbs.push(parseFloat(prompt(`Введите вероятность (0 - 1) A|B3: `)));

const denominator =
  enteredProbs[0] * enteredProbs[3] +
  enteredProbs[1] * enteredProbs[4] +
  enteredProbs[2] * enteredProbs[5];

console.log(denominator);

probabilityB1A = (enteredProbs[0] * enteredProbs[3]) / denominator;
probabilityB2A = (enteredProbs[1] * enteredProbs[4]) / denominator;
probabilityB3A = (enteredProbs[2] * enteredProbs[5]) / denominator;

console.log(
  "\nB1A = " +
    probabilityB1A.toFixed(2) +
    "\nB2A = " +
    probabilityB2A.toFixed(2) +
    "\nB3A = " +
    probabilityB3A.toFixed(2)
);
