import React, { useState } from "react";
import useKeyPress from "./components/KeyPress";
import { generate } from "./utils/RandomWordGenerator";
const initialWords = generate();
import "./App.css";
import { currentTime } from "./utils/CurrentTime";
function App() {
  const [accuracy, setAccuracy] = useState(0);
  const [typedChars, setTypedChars] = useState('');
  const [startTime, setStartTime] = useState();
  const [wordCount, setWordCount] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [leftPadding, setLeftPadding] = useState(
    new Array(20).fill(" ").join("")
  );
  const [outgoingChars, setOutgoingChars] = useState("");
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));
  useKeyPress((key) => {
    //1
    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;
    if (!startTime) {
      setStartTime(currentTime());
    }
    //2
    if (key === currentChar) {
      //3
      //2
      const updatedTypedChars = typedChars + key;
      setTypedChars(updatedTypedChars);
      //3
      setAccuracy(
        ((updatedOutgoingChars.length * 100) / updatedTypedChars.length).toFixed(
          2,
        ),
      );
      if (incomingChars.charAt(0) === " ") {
        //4
        setWordCount(wordCount + 1);
        //5
        const durationInMinutes = (currentTime() - startTime) / 60000.0;
        //6
        setWpm(((wordCount + 1) / durationInMinutes).toFixed(2));
      }
      if (leftPadding.length > 0) {
        setLeftPadding(leftPadding.substring(1));
      }
      //4
      updatedOutgoingChars += currentChar;
      setOutgoingChars(updatedOutgoingChars);

      //5
      setCurrentChar(incomingChars.charAt(0));

      //6
      updatedIncomingChars = incomingChars.substring(1);
      if (updatedIncomingChars.split(" ").length < 10) {
        updatedIncomingChars += " " + generate();
      }
      setIncomingChars(updatedIncomingChars);
    }
  });

  return (
    <div className="App">
      <p className="Character">
        <h3>WPM:{wpm} | ACC: {accuracy}%</h3>
        <span className="Character-out">
          {(leftPadding + outgoingChars).slice(-20)}
        </span>
        <span className="Character-current">{currentChar}</span>
        <span>{incomingChars}</span>
      </p>
    </div>
  );
}

export default App;
