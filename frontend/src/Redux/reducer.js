import { generate } from "../utils/RandomWordGenerator";
import * as acionTypes from "./actionTypes";
const initialWords = generate();
const initialState = {
  accuracy: 0,
  typedChars: "",
  startTime: null,
  wordCount: 0,
  wpm: 0,
  leftPadding: new Array(20).fill(" ").join(""),
  outgoingChars: "",
  currentChar: initialWords.charAt(0),
  incomingChars: initialWords.substr(1),
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case acionTypes.SET_ACCURACY: {
      return { ...state, accuracy: payload };
    }
    case acionTypes.SET_TYPED_CHARS: {
      return {
        ...state,
        typedChars: payload,
      };
    }

    case acionTypes.SET_START_TIME: {
      return {
        ...state,
        startTime: payload,
      };
    }

    case acionTypes.SET_WORD_COUNT: {
      return { ...state, wordCount: payload };
    }
    case acionTypes.SET_WPM: {
      return {
        ...state,
        wpm: payload,
      };
    }

    case acionTypes.SET_LEFT_PADDING: {
      return {
        ...state,
        outgoingChars: payload,
      };
    }
    case acionTypes.SET_CURRENT_CHAR: {
      return {
        ...state,
        currentChar: payload,
      };
    }
    case acionTypes.SET_INCOMING_CHARS: {
      return {
        ...state,
        incomingChars: payload,
      };
    }
    default: {
      return state;
    }
  }
};
