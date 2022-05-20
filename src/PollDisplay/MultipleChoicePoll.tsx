import { useState, useRef, useEffect } from "react";
import { ToggleButtonGroup, ToggleButton, Button } from "react-bootstrap";

interface Props {
  showResults: boolean;
  answers: any;
}

export default function MultipleChoicePoll(props: Props) {
  const innerWrapper = useRef(null);
  const { showResults, answers } = props;
  const [isResultView, toggleView] = useState(showResults);
  const [shortView, setView] = useState(true);
  const [definedClassName, setClassName] = useState("");
  const [radioValue, setRadioValue] = useState("1");
  useEffect(() => {
    if (innerWrapper && innerWrapper.current) {
      const realHeight = innerWrapper?.current?.clientHeight;
      const calcHeight = answers.length * (40 + 12);
      if (calcHeight < realHeight) {
        setClassName("poll-option_underline");
        setView(false);
      } else {
        setClassName("poll-option_fill");
        setView(true);
      }
    }
  }, [isResultView]);

  return (
    <>
      {isResultView ? (
        <div className="poll-results--wrapper">
          <div className="poll-results--inner" ref={innerWrapper}>
            {answers.map((answer: any, index: number) => {
              const { highest, percents, text } = answer;
              const delta = 0.16 * (100 - percents);

              return (
                <div
                  title={text}
                  key={index}
                  className={`poll-option ${
                    highest && shortView ? "highest" : ""
                  }
                  ${
                    shortView
                      ? "poll-option_fill-padding"
                      : "poll-option_underline-padding"
                  }`}
                >
                  <span
                    className={`poll-option--highlighter ${
                      definedClassName
                      // shortView ? "poll-option_fill" : "poll-option_underline"
                    }
                    ${highest && !shortView ? "highest" : ""}`}
                    style={
                      highest
                        ? {
                            width:
                              percents && definedClassName
                                ? `calc(2.38 * ${percents}px + (0.16 * ${percents}px))`
                                : "0px"
                          }
                        : {
                            width:
                              percents && definedClassName
                                ? `calc(${percents}% + (0.16 * ${percents}px))`
                                : "0px"
                          }
                    }
                  ></span>
                  <span
                    className={`poll-option--text ${
                      shortView ? "" : "poll-option--text_padding"
                    }`}
                    style={
                      highest && shortView
                        ? {
                            background: `linear-gradient(to right, black calc(2.38 * ${percents}px - ${delta}px), white calc(2.38 * ${percents}px - ${delta}px))`
                          }
                        : {}
                    }
                  >
                    {text}
                  </span>
                  <span className="poll-option--number">
                    {definedClassName ? `${percents}%` : ""}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="poll-options--wrapper">
          <ToggleButtonGroup type="radio" name="poll" defaultValue={1}>
            {answers.map((option: any, index: number) => {
              const checked = radioValue === `${index + 1}`;
              return (
                <ToggleButton
                  id={`poll_option_${index}`}
                  key={index}
                  className={`poll-option ${checked ? "checked" : ""}`}
                  name="radio"
                  value={index + 1}
                  checked={checked}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  <span className="poll-option_fill"></span>
                  <span className="poll-option--text">{option.text}</span>
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
          <Button
            className="poll-vote"
            onClick={() => toggleView(!isResultView)}
          >
            Send
          </Button>
        </div>
      )}
    </>
  );
}
