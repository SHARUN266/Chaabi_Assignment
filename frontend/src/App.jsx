import { Stack, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    setTimeout(() => {
      onOpen();
    }, 10);
  }, []);
  return (
    <div>
    <Login  isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Stack
        h="100vh"
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgImage={
          "https://images.unsplash.com/photo-1511057630-054448f045a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        }
      >
        <Stack
          h={["80vh", "70vh", "60vh"]}
          p="1rem"
          w={["95%", "80%", "80%"]}
          m="auto"
          bg="#fff"
          shadow={"lg"}
          borderRadius={"lg"}
          justifyContent={"center"}
          gap={"10%"}
        >
          <Home />
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
