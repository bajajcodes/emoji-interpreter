import React, { useState } from "react";
import "./styles.css";

const gesturesDB = {
  "🙍": "Frowning",
  "🙆": "Gesturing Ok",
  "🙇": "Bowing",
  "🕴️": "Suit Levitating",
  "🙎‍♂️": "Pouting",
  "💁‍♂️": "Tripping Hand",
  "🤦‍♂️": "Facepalming",
  "🤷‍♂️": "Shrugging",
  "🙅‍♀️": "Gesturing No",
  "🙋‍♀️": "Raising Hand",
  "🤷‍♀️": "Struggling",
  "👈": "Pointing Left",
  "🖖": "Vulcan salute",
  "✊": "Raised Fist",
  "👊": "Oncoming Fist",
  "👉": "Pointing Right",
  "🤘": "Sign of the Horns",
  "🤙": "Call me Hand",
  "👆": "Pointing Up",
  "😟": "Worried",
  "😯": "Hushed",
  "😀": "Grinning",
  "😕": "Confused",
  "😑": "Expressionless",
  "😌": "Relieved",
  "😐": "Neutral",
  "😂": "Tears of Joy",
  "😫": "Tired"
};

const title = "Emoji Interpreter 🙂";
const inputHeadline = "Enter a emoji below to see it's meaning";
// let username = prompt("Enter name here: ");

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function getEmojiMeaning(event) {
    let emoji = "";
    let meaning = "";

    if (!emoji.target) {
      emoji = event;
    } else {
      emoji = event.target.value;
    }

    if (!gesturesDB[emoji]) {
      meaning = "Emoji not found!!";
    } else {
      meaning = gesturesDB[emoji];
    }

    if (emoji) {
      setEmojiMeaning(meaning);
    }
  }

  return (
    <div className="App">
      <h1>{title}</h1>

      <p>
        Interpret an emoji in mind then click on that emoji to see it's meaning,
        and also enter an emoji to know it's meaning.
      </p>

      <div className="div-user-panel">
        <h3>{inputHeadline}</h3>
        <div>
          <input
            type="text"
            id="emoji-input"
            onChange={getEmojiMeaning}
          ></input>
          <h3>{emojiMeaning}</h3>
        </div>
      </div>

      <div className="emojis-display">
        {Object.keys(gesturesDB).map((emoji) => {
          return (
            <span
              className="span-emoji"
              key={emoji}
              onClick={() => getEmojiMeaning(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
