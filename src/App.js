import { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiDictonary = {
    "🙃": "Upside-Down Face[Used to convey Irony/Sarcasm/Throw Shade",
    "🤡": "Clown Face[Used when someone says something stupid ]",
    "😞": "Vibha Emoji :)",
    "👀": "Eyes[You know what it means👀]",
    "💀": "Skull['Omg!No way bro I'm dead']",
    "🤮":
      "Puking[Commonly used when people have bad taste(like eating biriyani with coke as a side)]"
  };

  var emojis = Object.keys(emojiDictonary); //To convert objects into emojis
  var [meaning, setMeaning] = useState("");

  function ClickHandler(item) {
    meaning = emojiDictonary[item];
    setMeaning(meaning);
  }

  function changeHandler(event) {
    var inputEmoji = event.target.value;
    if (inputEmoji === "") {
      setMeaning("Please enter an emoji");
    } else {
      meaning = emojiDictonary[inputEmoji];
      if (meaning === undefined) {
        setMeaning("I'm sorry! We don't have this Emoji in our data base");
      } else {
        setMeaning(meaning);
      }
    }
  }
  return (
    <div className="App">
      <header style={{ color: "aliceblue" }}>
        <span style={{ color: "red" }}>Emoji</span> Interpreter{" "}
        <span style={{ color: "red" }}>:)</span>
      </header>
      {/* <h1>
        <span style={{ color: "red" }}>Emoji</span> Interpreter :)
      </h1>
      <h2>Enter an emoji</h2> */}
      <input
        placeholder="Paste your emoji here"
        onChange={changeHandler}
      ></input>
      <div id="EmojiMeaning">meaning:{meaning}</div>
      <div id="DisplayMsg">List of Emojis in our Database</div>
      <ul>
        {emojis.map((item, index) => {
          return (
            <li key={item} onClick={() => ClickHandler(item)}>
              {item}
            </li>
          );
        })}
      </ul>
      <footer style={{ color: "aliceblue" }}>
        This is only a collection of few of{" "}
        <span style={{ color: "red" }}>
          my favourite/most frequently used emojis
        </span>
        . For getting more emojis check out{" "}
        <a
          href="https://emojipedia.org/"
          target="_blank"
          rel="noreferrer noopener"
          style={{ color: "red" }}
        >
          Emojipedia
        </a>
      </footer>
    </div>
  );
}
