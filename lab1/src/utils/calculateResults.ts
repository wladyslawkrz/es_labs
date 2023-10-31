import { GradeType } from "../types";

export const calculateResult = (grades: GradeType[][]) => {
  const sums: number[] = [];
  const objects: number = grades.length;
  const experts: number = grades[0].length;

  const names: string[] = [
    "Франс",
    "Ингланд",
    "Бранденбург",
    "Австрия",
    "Кастилия",
  ];

  for (let i = 0; i < objects; i++) {
    let sum: number = 0;

    for (let j = 0; j < experts; j++) {
      sum +=
        parseInt(grades[i][j]["army"]) +
        parseInt(grades[i][j]["potential"]) +
        parseInt(grades[i][j]["goods"]) +
        parseInt(grades[i][j]["mp"]);
    }
    sums.push(sum);
  }

  const fullSum = sums.reduce((partialSum, a) => partialSum + a, 0);

  const vArray: number[] = sums.map((sum) => {
    return sum / fullSum;
  });

  for (let index = 0; index < objects; index++) {
    console.log(`${names[index]} - ${Math.round(vArray[index] * 100)}%`);
  }

  const avgGrades: number[] = sums.map((sum) => {
    return (sum / objects) * experts;
  });

  const dArray: number[] = [];

  for (const key in grades[0][0]) {
    if (key === "expert") {
      continue;
    }

    for (let i = 0; i < experts; i++) {
      let D: number = 0;
      for (let j = 0; j < objects; j++) {
        D += Math.pow(grades[j][i][key] - avgGrades[j], 2);
      }
      dArray.push(D);
    }

    return vArray;
  }
};
