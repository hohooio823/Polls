import "./styles.scss";

interface Props {
  show: boolean;
}

export default function CreatePollPopup(props: Props) {
  const { show } = props;
  return show ? (
    <div className="poll-modal-wrapper">
      <div className="poll-add">
        <div className="poll-add--header"></div>
        <div className="poll-add--tabs"></div>
        <div className="poll-add--content"></div>
        <div className="poll-add__actions">
          <button className="poll-add__actions--cancel">Cancel</button>
          <button className="poll-add__actions--create">Create</button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
