import "./styles.scss";
import MultipleChoicePoll from "./MultipleChoicePoll";
import RatingPoll from "./RatingPoll";
import { ReactComponent as CrossIcon } from "../icons/cross.svg";
import { ratingTypes } from "../helpers";

const answers = [
  {
    text:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.",
    percents: 100,
    highest: true
  },
  { text: "Hire new customers", percents: 20, highest: false },
  { text: "In graphic design", percents: 46, highest: false },
  { text: "Visual design", percents: 0, highest: false },
  {
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    percents: 1,
    highest: false
  },
  {
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    percents: 16,
    highest: false
  }
];
const answers2 = [
  { text: "Hire new customers", percents: 20, highest: false },
  { text: "Visual design", percents: 10, highest: false },
  { text: "In graphic design", percents: 46, highest: true }
];

const answers3 = [
  {
    text: "Hire new customers Hire new customers Hire new customers",
    percents: 20,
    highest: false
  },
  { text: "Visual design", percents: 10, highest: false },
  { text: "In graphic design", percents: 46, highest: true }
];

interface Props {
  type: string;
  showResults: boolean;
}

export default function PollDisplay(props: Props) {
  const { type, showResults } = props;

  return (
    <>
      <div className={`poll-display ${type}`}>
        <div className="poll-display--header">
          <p className="poll-display--title">
            Which topic is most interesting for you ?
            {type === "viewer" ? (
              <span className="poll-display--icon">
                <CrossIcon />
              </span>
            ) : null}
          </p>
        </div>
        <RatingPoll showResults={showResults} ratingType={ratingTypes.fire} />
      </div>

      <div className={`poll-display ${type}`}>
        <div className="poll-display--header">
          <p className="poll-display--title">
            Which topic is most interesting for you ?
            {type === "viewer" ? (
              <span className="poll-display--icon">
                <CrossIcon />
              </span>
            ) : null}
          </p>
        </div>
        <RatingPoll showResults={showResults} ratingType={ratingTypes.hand} />
      </div>

      <div className={`poll-display ${type}`}>
        <div className="poll-display--header">
          <p className="poll-display--title">
            Which topic is most interesting for you ?
            {type === "viewer" ? (
              <span className="poll-display--icon">
                <CrossIcon />
              </span>
            ) : null}
          </p>
        </div>
        <MultipleChoicePoll showResults={showResults} answers={answers2} />
      </div>

      <div className={`poll-display ${type}`}>
        <div className="poll-display--header">
          <p className="poll-display--title">
            Which topic is most interesting for you ?
            {type === "viewer" ? (
              <span className="poll-display--icon">
                <CrossIcon />
              </span>
            ) : null}
          </p>
        </div>
        <MultipleChoicePoll showResults={showResults} answers={answers3} />
      </div>

      <div className={`poll-display ${type}`}>
        <div className="poll-display--header">
          <p className="poll-display--title">
            Which topic is most interesting for you ?
            {type === "viewer" ? (
              <span className="poll-display--icon">
                <CrossIcon />
              </span>
            ) : null}
          </p>
        </div>
        <MultipleChoicePoll showResults={showResults} answers={answers} />
      </div>

      <div className={`poll-display ${type}`}>
        <div className="poll-display--header">
          <p className="poll-display--title">
            Which topic is most interesting for you ?
            {type === "viewer" ? (
              <span className="poll-display--icon">
                <CrossIcon />
              </span>
            ) : null}
          </p>
        </div>
        <RatingPoll showResults={showResults} ratingType={ratingTypes.star} />
      </div>

      <div className={`poll-display ${type}`}>
        <div className="poll-display--header">
          <p className="poll-display--title">
            Which topic is most interesting for you ?
            {type === "viewer" ? (
              <span className="poll-display--icon">
                <CrossIcon />
              </span>
            ) : null}
          </p>
        </div>
        <RatingPoll showResults={showResults} ratingType={ratingTypes.smile} />
      </div>

      <div className={`poll-display ${type}`}>
        <div className="poll-display--header">
          <p className="poll-display--title">
            Which topic is most interesting for you ?
            {type === "viewer" ? (
              <span className="poll-display--icon">
                <CrossIcon />
              </span>
            ) : null}
          </p>
        </div>
        <RatingPoll showResults={showResults} ratingType={ratingTypes.number} />
      </div>

      <div className={`poll-display ${type}`}>
        <div className="poll-display--header">
          <p className="poll-display--title">
            Which topic is most interesting for you ?
            {type === "viewer" ? (
              <span className="poll-display--icon">
                <CrossIcon />
              </span>
            ) : null}
          </p>
        </div>
        <RatingPoll showResults={showResults} ratingType={ratingTypes.text} />
      </div>
    </>
  );
}
