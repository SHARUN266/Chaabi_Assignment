import React from "react";
import useKeyPress from "../components/KeyPress";
import { generate } from "../utils/RandomWordGenerator";

import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import click from "../media/sounds/click.mp3";
import clack from "../media/sounds/clack.mp3";
import { currentTime } from "../utils/CurrentTime";
import * as actionTypes from "../Redux/actionTypes";
function Home() {
  const dispatch = useDispatch();
  const {
    accuracy,
    typedChars,
    startTime,
    wordCount,
    wpm,
    leftPadding,
    outgoingChars,
    currentChar,
    incomingChars,
  } = useSelector((state) => state);
  const wrongSound = () => {
    const sound = new Audio(clack);
    return sound.play();
  };
  const playSound = () => {
    const sound = new Audio(click);
    return sound.play();
  };
  useKeyPress((key) => {
    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;
    if (!startTime) {
      dispatch({ type: actionTypes.SET_START_TIME, payload: currentTime() });
    }
    if (key === currentChar) {
      playSound();
      const updatedTypedChars = typedChars + key;
      dispatch({ type: actionTypes.SET_TYPED_CHARS, payload: updatedTypedChars });

      dispatch({
        type: actionTypes.SET_ACCURACY,
        payload: (
          (updatedOutgoingChars.length * 100) /
          updatedTypedChars.length
        ).toFixed(2),
      });
      if (incomingChars.charAt(0) === " ") {
        dispatch({ type: actionTypes.SET_WORD_COUNT, payload: wordCount + 1 });
        const durationInMinutes = (currentTime() - startTime) / 60000.0;
        dispatch({
          type: actionTypes.SET_WPM,
          payload: ((wordCount + 1) / durationInMinutes).toFixed(2),
        });
      }
      if (leftPadding.length > 0) {
        dispatch({ type: actionTypes.SET_LEFT_PADDING, payload: leftPadding.substring(1) });
      }
      updatedOutgoingChars += currentChar;
      dispatch({ type: actionTypes.SET_OUTGOING_CHARS, payload: updatedOutgoingChars });
      dispatch({ type: actionTypes.SET_CURRENT_CHAR, payload: incomingChars.charAt(0) });
      updatedIncomingChars = incomingChars.substring(1);
      if (updatedIncomingChars.split(" ").length < 10) {
        updatedIncomingChars += " " + generate();
      }
      dispatch({ type: actionTypes.SET_INCOMING_CHARS, payload: updatedIncomingChars });
    } else {
      wrongSound();
    }
  });

  return (
    <div className="App">
      <p className="Character">
        <h3>
          WPM:{wpm} | ACC: {accuracy}%
        </h3>
        <span className="Character-out">
          {(leftPadding + outgoingChars).slice(-20)}
        </span>
        <span className="Character-current">{currentChar}</span>
        <span>{incomingChars}</span>
      </p>
        <span>your have to type <strong> {currentChar==" "?"Click Space":currentChar}</strong> </span>
    </div>
  );
}

export default Home;
