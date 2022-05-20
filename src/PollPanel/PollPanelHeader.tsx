import { ReactComponent as AddIcon } from "../icons/add.svg";
import CreatePollPopup from "../CreatePollPopup/index";

interface Props {
  availablePollCount: number;
  addNew: boolean;
  activePoll: boolean;
}

export default function PollPanelHeader(props: Props) {
  const { availablePollCount, addNew, activePoll } = props;

  return (
    <div className="poll-panel-header">
      <CreatePollPopup show={true} />
      {availablePollCount > 0 ? (
        <div className="poll-panel-header--description">All Avalible Polls</div>
      ) : null}
      {addNew ? (
        <div className="poll-panel-header--button">
          <button className="add-poll">
            <AddIcon />
            Create Poll
          </button>
        </div>
      ) : null}
    </div>
  );
}
