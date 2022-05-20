import "./styles.scss";
import PollDisplay from "../PollDisplay/index";
import PollPanelHeader from "./PollPanelHeader";
export default function PollPanel() {
  const type1 = "producer";
  const type2 = "viewer";

  return (
    <div className="page">
      <div className="top-panel"></div>
      <div className="page-wrap">
        <div className="left-panel"></div>
        <div className="livestream-panel">
          <PollDisplay type={type2} showResults={false} />
        </div>
        <div className="poll-tab-panel">
          <PollPanelHeader
            addNew={true}
            availablePollCount={1}
            activePoll={false}
          />
          <PollDisplay type={type1} showResults={false} />
        </div>
      </div>
    </div>
  );
}
