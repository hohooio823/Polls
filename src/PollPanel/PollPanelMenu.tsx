import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { pollStates } from "../helpers";
import { ReactComponent as DotsIcon } from "../icons/dots.svg";
import "./styles/poll-panel-menu.scss";

interface Props {
  pollState: number;
}

const getMenuItems = (state: number): Array<string> => {
  const items = ["Edit Poll", "Delete"];
  switch (state) {
    case pollStates.done:
      return ["Reactivate Poll", ...items];
    case pollStates.new:
      return ["Start Poll", ...items];
    case pollStates.inProgress:
      return ["Stop Poll", ...items];
    default:
      return items;
  }
};
const PollMenu = (props: Props) => {
  const { pollState } = props;
  const [show, toggleMenu] = useState(false);
  const items = getMenuItems(pollState);

  return (
    <div className="poll-menu__wrapper">
      <Dropdown.Toggle
        className="poll-menu__toggle-btn"
        id="poll-menu-toggle"
        onClick={() => toggleMenu(!show)}
        onBlur={() => toggleMenu(false)}
      >
        <DotsIcon />
      </Dropdown.Toggle>
      <Dropdown.Menu show={show} className="poll-menu">
        {items.map((variant, index) => (
          <Dropdown.Item
            key={variant}
            eventKey={index + 1}
            className="poll-menu__item"
          >
            {variant}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </div>
  );
};

export default PollMenu;
