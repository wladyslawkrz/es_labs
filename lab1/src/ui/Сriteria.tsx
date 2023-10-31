import "./criteria.css";
import { GradeType } from "../types";
import TableRow from "./TableRow";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Criteria({ className, state }) {
  const handleSendGrades = (_e) => {
    const newGrades: GradeType[] = [];

    const tableRows = document.querySelectorAll(`.${className} tbody tr`);

    const criterias: string[] = ["mp", "goods", "army", "potential"];

    for (const row of tableRows) {
      const cells = row.querySelectorAll("td");

      const concreteGrade = { expert: cells[0].innerText };

      for (let index = 0; index < cells.length; index++) {
        const inputElement = cells[index].querySelector("input");

        if (!index) {
          continue;
        }

        if (inputElement) {
          concreteGrade[criterias[index - 1] as keyof typeof concreteGrade] =
            inputElement.value;
        }
      }

      newGrades.push(concreteGrade as (typeof newGrades)[0]);
    }

    _e.currentTarget.disabled = true;

    state((current) => [...current, newGrades]);
  };

  return (
    <div className={`${className}`}>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Эксперт</th>
              <th>Оценка по людским ресурсам</th>
              <th>Оценка по товарам</th>
              <th>Оценка по армии</th>
              <th>Потенциал развития государства</th>
            </tr>
          </thead>
          <tbody>
            <TableRow expert={"Вася"} />
            <TableRow expert={"Абобус"} />
            <TableRow expert={"Чубрик"} />
          </tbody>
        </table>
      </div>
      <div className="buttonWrapper">
        <button onClick={handleSendGrades}>
          Отправить оценки для страны и продолжить
        </button>
      </div>
    </div>
  );
}

export default Criteria;
