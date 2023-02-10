import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    setTimeout(() => {
      onOpen()
    }, 10);
  }, []);
  return <Login isOpen={isOpen} onClose={onClose} onOpen={onOpen} />;
}

export default App;
