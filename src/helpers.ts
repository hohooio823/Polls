interface RatingTypes {
  star: number;
  smile: number;
  fire: number;
  number: number;
  hand: number;
  multiple: number;
  text: number;
}
export const ratingTypes: RatingTypes = {
  star: 0,
  smile: 1,
  fire: 2,
  number: 3,
  hand: 4,
  multiple: 5,
  text: 6
};

interface IconTypes {
  fire: string;
  thumb: string;
}

export const NOFUN = () => null;

interface PollStates {
  new: number;
  inProgress: number;
  done: number;
}

export const pollStates: PollStates = {
  new: 0,
  inProgress: 1,
  done: 2
};
