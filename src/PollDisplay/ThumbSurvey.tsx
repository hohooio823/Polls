import { useState } from "react";
import { ToggleButton, ButtonGroup } from "react-bootstrap";

interface Props {
  isResultView: boolean;
  yesEmoji: any;
  noEmoji: any;
}

export default (props: Props) => {
  const { isResultView, yesEmoji, noEmoji } = props;
  const [value, setValue] = useState("");
  const answers = [
    { label: yesEmoji, value: "yes" },
    { label: noEmoji, value: "no" }
  ];
  return (
    <ButtonGroup className="thumb--wrapper">
      {answers.map((radio, idx) => (
        <ToggleButton
          key={idx}
          className={`thumb ${radio.value === "yes" ? "thumb-up" : "thumb-down"}
            ${isResultView ? "static" : ""}
            ${value === radio.value ? "thumb_active" : ""}`}
          id={`radio-${idx}`}
          type="radio"
          variant="secondary"
          name={`radio-${idx}`}
          value={radio.value}
          onChange={(e) => setValue(e.currentTarget.value)}
        >
          {radio.label}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};
