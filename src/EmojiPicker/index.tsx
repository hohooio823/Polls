import React, { useState } from "react";
import { atom, useAtom } from "jotai";
import Picker from "emoji-picker-react";
import { Button } from "react-bootstrap";

export const emojiAtom = atom(`👍`);
export const emojiNoAtom = atom(`👎`);

interface SyntenicEventTarget {
  contains(e: EventTarget): boolean;
}

interface SyntheticEvent {
  currentTarget: SyntenicEventTarget;
  target: EventTarget;
  relatedTarget: EventTarget | null;
}

interface IEmojiObject {
  emoji: string;
}

const EmojiPicker = () => {
  const [showFirstPicker, setFirstPickerState] = useState(false);
  const [showSecondPicker, setSecondPickerState] = useState(false);

  const [emoji, setEmoji] = useAtom(emojiAtom);
  const [noEmoji, setNoEmoji] = useAtom(emojiNoAtom);

  const closePickers = (event: React.FocusEvent | SyntheticEvent) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      // if (showFirstPicker) setFirstPickerState(false);
      // if (showSecondPicker) setSecondPickerState(false);
    }
  };

  const onEmojiClick = (event: React.MouseEvent, emojiObject: IEmojiObject) => {
    console.log(emojiObject);
    setEmoji(emojiObject.emoji);
  };

  const onNoEmojiClick = (
    event: React.MouseEvent,
    emojiObject: IEmojiObject
  ) => {
    setNoEmoji(emojiObject.emoji);
  };

  return (
    <div onBlur={(event: React.FocusEvent) => closePickers(event)}>
      <Button
        style={
          showFirstPicker
            ? {
                cursor: "pointer",
                background: "rgba(255, 255, 255, 0.6)"
              }
            : {
                cursor: "pointer"
              }
        }
        onClick={() => {
          setFirstPickerState(!showFirstPicker);
          if (showSecondPicker) setSecondPickerState(false);
        }}
      >
        {emoji}
      </Button>
      <Button
        style={
          showSecondPicker
            ? {
                cursor: "pointer",
                background: "rgba(255, 255, 255, 0.6)"
              }
            : {
                cursor: "pointer"
              }
        }
        onClick={() => {
          setSecondPickerState(!showSecondPicker);
          if (showFirstPicker) setFirstPickerState(false);
        }}
      >
        {noEmoji}
      </Button>
      {showFirstPicker ? (
        <Picker
          onEmojiClick={(event: React.MouseEvent, emojiObject: IEmojiObject) =>
            onEmojiClick(event, emojiObject)
          }
        />
      ) : (
        <></>
      )}
      {showSecondPicker ? (
        <Picker
          onEmojiClick={(event: React.MouseEvent, emojiObject: IEmojiObject) =>
            onNoEmojiClick(event, emojiObject)
          }
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default EmojiPicker;
