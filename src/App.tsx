import { Provider } from "jotai";
import PollPanelMenu from "./PollPanel/PollPanelMenu";
import PollDisplay from "./PollDisplay/index";
import { pollStates } from "./helpers";
import EmojiPicker from "./EmojiPicker";
// import CreatePollPopup from "./CreatePollPopup/index";
import "./main.scss";

export default function App() {
  return (
    <Provider>
      {/* <PollPanel /> */}
      {/* <PollDisplay type="viewer" showResults={false} /> */}
      <EmojiPicker />
      <PollPanelMenu pollState={pollStates.new} />
      <PollPanelMenu pollState={pollStates.inProgress} />
      <PollPanelMenu pollState={pollStates.done} />
      <PollDisplay type="producer" showResults={false} />
      {/* <CreatePollPopup show /> */}
    </Provider>
  );
}
