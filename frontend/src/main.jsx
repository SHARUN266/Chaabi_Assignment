import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import { ContextProvider } from "./Context/CreateContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
