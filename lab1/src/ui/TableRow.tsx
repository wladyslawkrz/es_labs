import { useState } from "react";

const TableRow = ({ expert }) => {
  const [val1, setVal1] = useState<number>(5);
  const [val2, setVal2] = useState<number>(5);
  const [val3, setVal3] = useState<number>(5);
  const [val4, setVal4] = useState<number>(5);

  const handleRangeChange1 = (event) => {
    setVal1(event.target.value);
  };

  const handleRangeChange2 = (event) => {
    setVal2(event.target.value);
  };

  const handleRangeChange3 = (event) => {
    setVal3(event.target.value);
  };

  const handleRangeChange4 = (event) => {
    setVal4(event.target.value);
  };

  return (
    <tr>
      <td>{expert}</td>
      <td>
        <input
          type="range"
          min={1}
          max={10}
          defaultValue={5}
          step={1}
          data-attr="manpower"
          onChange={handleRangeChange1}
        ></input>
        <span>{val1}</span>
      </td>
      <td>
        <input
          type="range"
          min={1}
          max={10}
          step={1}
          defaultValue={5}
          data-attr="goods"
          onChange={handleRangeChange2}
        ></input>
        <span>{val2}</span>
      </td>
      <td>
        <input
          type="range"
          min={1}
          max={10}
          step={1}
          defaultValue={5}
          data-attr="army"
          onChange={handleRangeChange3}
        ></input>
        <span>{val3}</span>
      </td>
      <td>
        <input
          type="range"
          min={1}
          max={10}
          step={1}
          defaultValue={5}
          data-attr="dev-potential"
          onChange={handleRangeChange4}
        ></input>
        <span>{val4}</span>
      </td>
    </tr>
  );
};

export default TableRow;
