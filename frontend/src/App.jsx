import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Timer from "./pages/Timer";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    setTimeout(() => {
      onOpen()
    }, 10);
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default App;
