function fitnessFunction(x1, x2) {
  const deJongTheSecond = 100 * Math.pow(x1 * x1 - x2, 2) + Math.pow(1 - x1, 2);

  // Himmeblau test
  // const deJongTheSecond =
  //   Math.pow(x1 * x1 + x2 - 11, 2) + Math.pow(x1 + x2 * x2 - 7, 2);

  return deJongTheSecond;
}

function generateRandomChromosome() {
  const randomChromosome = Math.random() * 4.096 - 2.048;

  // Himmelblau test
  // const randomChromosome = Math.random() * 10 - 5;

  return randomChromosome;
}

function initializePopulation(populationSize) {
  const population = [];

  for (let i = 0; i < populationSize; i++) {
    const x1 = generateRandomChromosome();
    const x2 = generateRandomChromosome();

    population.push({ x1, x2 });
  }

  return population;
}

function crossover(parent1, parent2) {
  const crossoverPoint = Math.random();

  const x1 = crossoverPoint * parent1.x1 + (1 - crossoverPoint) * parent2.x1;
  const x2 = crossoverPoint * parent1.x2 + (1 - crossoverPoint) * parent2.x2;

  return { x1, x2 };
}

function mutate(chromosome, mutationRate) {
  if (Math.random() < mutationRate) {
    chromosome.x1 = generateRandomChromosome();
  }

  if (Math.random() < mutationRate) {
    chromosome.x2 = generateRandomChromosome();
  }
}

function selectParent(population) {
  const fitnessSum = population.reduce(
    (sum, individual) =>
      sum + 1 / fitnessFunction(individual.x1, individual.x2),
    0
  );

  let randomValue = Math.random() * fitnessSum;

  for (const individual of population) {
    randomValue -= 1 / fitnessFunction(individual.x1, individual.x2);

    if (randomValue <= 0) {
      return individual;
    }
  }
}

function geneticAlgorithm(populationSize, mutationRate, maxGenerations) {
  let population = initializePopulation(populationSize);

  for (let generation = 0; generation < maxGenerations; generation++) {
    population = population.map((individual) => ({
      ...individual,
      fitness: 1 / fitnessFunction(individual.x1, individual.x2),
    }));

    const newPopulation = [];

    for (let i = 0; i < populationSize; i++) {
      const parent1 = selectParent(population);
      const parent2 = selectParent(population);

      const child = crossover(parent1, parent2);
      mutate(child, mutationRate);

      newPopulation.push(child);
    }

    population = newPopulation;
  }

  const bestIndividual = population.reduce(
    (best, individual) =>
      individual.fitness > best.fitness ? individual : best,
    population[0]
  );

  bestIndividual.fitness = fitnessFunction(
    bestIndividual.x1,
    bestIndividual.x2
  );

  return bestIndividual;
}

const populationSize = 100;
const mutationRate = 0.01;
const maxGenerations = 100;

const bestIndividual = geneticAlgorithm(
  populationSize,
  mutationRate,
  maxGenerations
);

console.log("Наилучший индивид:", {
  x1: bestIndividual.x1,
  x2: bestIndividual.x2,
});
console.log("Значение функции:", bestIndividual.fitness);
