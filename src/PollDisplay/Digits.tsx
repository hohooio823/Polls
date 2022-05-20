import { useState } from "react";
import { NOFUN } from "../helpers";

interface Props {
  isResultView: boolean;
}

export default (props: Props) => {
  const { isResultView } = props;
  const digits = [5, 4, 3, 2, 1];
  const [selected, setActive] = useState(-1);

  return (
    <>
      {digits.map((number, index) => (
        <span
          onClick={isResultView ? NOFUN : () => setActive(index)}
          key={index}
          className={`rating-digit
          ${selected === index ? "rating-digit_selected" : ""} 
          ${isResultView ? "static" : ""}`}
        >
          {number}
        </span>
      ))}
    </>
  );
};
