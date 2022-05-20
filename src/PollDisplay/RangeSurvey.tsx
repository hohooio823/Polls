import React from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 0.1;
const MIN = 0;
const MAX = 10;
interface Props {
  isResultView: boolean;
  emoji: any;
}

export default class RangeSurvey extends React.Component<Props> {
  state = {
    values: [5]
  };

  render() {
    const { isResultView, emoji } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%"
        }}
      >
        <Range
          values={this.state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => this.setState({ values })}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "auto",
                display: "flex",
                width: "100%"
              }}
            >
              <div
                className="range"
                ref={props.ref}
                style={{
                  background: getTrackBackground({
                    values: this.state.values,
                    colors: ["#fff", "#fff"],
                    min: MIN,
                    max: MAX
                  })
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              className={`range_thumb ${isResultView ? "disabled" : ""}`}
              {...props}
              style={{
                ...props.style,
                // top: "-7px",
                fontSize: `${34 + (34 * this.state.values[0]) / 10}px`
              }}
            >
              <>{emoji}</>
            </div>
          )}
        />
      </div>
    );
  }
}
