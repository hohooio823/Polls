import { useState } from "react";

interface Props {}
export default (props: Props) => {
  const [answer, setAnswer] = useState("");

  return (
    <>
      <textarea
        onKeyDown={(e) => setAnswer(e.target.value)}
        className="poll--free-text"
        placeholder=""
        defaultValue={answer}
      ></textarea>
    </>
  );
};
