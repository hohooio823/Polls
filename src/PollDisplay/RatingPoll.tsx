import { useState } from "react";
import { Button } from "react-bootstrap";
import { useAtom } from "jotai";
import Digits from "./Digits";
import RangeSurvey from "./RangeSurvey";
import ThumbSurvey from "./ThumbSurvey";
import { ReactComponent as StarIcon } from "../icons/star.svg";
import { ReactComponent as FailSmileIcon } from "../icons/smiles/fail.svg";
import { ReactComponent as AcceptableSmileIcon } from "../icons/smiles/acceptable.svg";
import { ReactComponent as GoodSmileIcon } from "../icons/smiles/good.svg";
import { ReactComponent as VeryGoodSmileIcon } from "../icons/smiles/very_good.svg";
import { ReactComponent as ExcellentSmileIcon } from "../icons/smiles/excellent.svg";
import { ratingTypes, NOFUN } from "../helpers";
import FreeTextPoll from "./FreeTextPoll";
import { emojiAtom, emojiNoAtom } from "../EmojiPicker";

const Description = () => (
  <div className="rating-text">
    <span>Optimistic</span>
    <span>Very excited</span>
  </div>
);

const classNames: string[] = ["star", "smile", "fire", "number", "hand"];

const Stars = [StarIcon, StarIcon, StarIcon, StarIcon, StarIcon];

const Smiles = [
  ExcellentSmileIcon,
  VeryGoodSmileIcon,
  GoodSmileIcon,
  AcceptableSmileIcon,
  FailSmileIcon
];

const iconsSets = {
  [ratingTypes.star]: Stars,
  [ratingTypes.smile]: Smiles
  // [ratingTypes.number]: Digits
};

interface Props {
  showResults: boolean;
  ratingType: number;
}

export default function RatingPoll(props: Props) {
  const { showResults, ratingType } = props;
  const [isResultView, toggleView] = useState(showResults);
  const [result, setResult] = useState(-1);
  const [onhovering, setOnHovering] = useState(-1);

  const Classname = classNames[ratingType];
  const setDescription = ratingType === 1 || ratingType === 3;
  const Icons = iconsSets[ratingType] || [null];

  const [emoji] = useAtom(emojiAtom);
  const [noEmoji] = useAtom(emojiNoAtom);

  const pollContent = () => {
    switch (ratingType) {
      case ratingTypes.number: {
        return <Digits isResultView={isResultView} />;
      }
      case ratingTypes.fire: {
        return <RangeSurvey isResultView={isResultView} emoji={emoji} />;
      }
      case ratingTypes.hand:
        return (
          <ThumbSurvey
            isResultView={isResultView}
            yesEmoji={emoji}
            noEmoji={noEmoji}
          />
        );

      case ratingTypes.text:
        return <FreeTextPoll />;

      case ratingTypes.multiple:
      default:
        return Icons.map((Icon, index) => {
          return (
            <span
              key={index}
              onMouseOver={isResultView ? NOFUN : () => setOnHovering(index)}
              onBlur={isResultView ? NOFUN : () => setOnHovering(result)}
              className={`${Classname} ${
                !~result || result > index ? "" : "selected"
              } ${!~onhovering || onhovering > index ? "gray" : ""} ${
                isResultView ? "" : "selectable"
              }`}
              onClick={isResultView ? NOFUN : () => setResult(index)}
            >
              <Icon />
            </span>
          );
        });
    }
  };

  return (
    <>
      <div className="ratings">{pollContent()}</div>
      {setDescription ? <Description /> : <></>}
      {isResultView ? (
        <></>
      ) : (
        <Button className="poll-vote" onClick={() => toggleView(!isResultView)}>
          Send
        </Button>
      )}
    </>
  );
}
