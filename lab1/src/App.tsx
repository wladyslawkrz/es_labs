import Slider from "react-slick";
import Criteria from "./ui/Сriteria";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { useEffect, useState } from "react";
import { GradeType } from "./types";
import { calculateResult } from "./utils";

function App() {
  const [globalGrades, setGlobalGrades] = useState<GradeType[][]>([]);
  const [results, setResults] = useState<number[]>([]);

  const settings = {
    dots: true,
    swipe: true,
    draggable: false,
    infinite: false,
  };

  const handleCalculateResults = () => {
    const result = calculateResult(globalGrades);

    setResults(result);
  };

  useEffect(() => {
    console.log(globalGrades);
  }, [globalGrades]);

  return (
    <div className="container">
      <h1>Выбор топ-5 стран в Europa Universalis IV</h1>
      <Slider {...settings}>
        <div>
          <h2>Франс</h2>
          <img src="/france.png" height={"500px"} alt="Изображение Франции" />
          <Criteria className={"france"} state={setGlobalGrades} />
        </div>
        <div>
          <h2>Ингланд</h2>
          <img src="/england.jpg" height={"500px"} alt="Изображение Англии" />
          <Criteria className={"england"} state={setGlobalGrades} />
        </div>
        <div>
          <h2>Бранденбург</h2>
          <img
            src="/brandenburg.jpg"
            height={"500px"}
            alt="Изображение Бранденбурга"
          />
          <Criteria className={"brandenburg"} state={setGlobalGrades} />
        </div>
        <div>
          <h2>Австрия</h2>
          <img src="/austria.jpg" height={"500px"} alt="Изображение Австрии" />
          <Criteria className={"austria"} state={setGlobalGrades} />
        </div>
        <div>
          <h2>Кастилия</h2>
          <img src="/castile.jpg" height={"500px"} alt="Изображение Кастилии" />
          <Criteria className={"castile"} state={setGlobalGrades} />
        </div>
        <div className="buttonWrapper">
          <button style={{ margin: "10px" }} onClick={handleCalculateResults}>
            Подсчитать результаты
          </button>
          <div>
            <h1>Результаты</h1>
            <div>{results}</div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default App;
