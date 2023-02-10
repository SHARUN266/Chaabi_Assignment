import React from "react";
import SocialIcons from "../components/SocialIcons";
import SideImage from "../assets/boy_with_keyboard.gif";
import {
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Image,
  Text,
  InputLeftElement,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import { HiUser } from "react-icons/hi";
import { MdAlternateEmail } from "react-icons/md";

import { useState } from "react";
export default function Form() {
  const [isLoading, setIsloading] = useState(false);

  const toast = useToast();

  const [text, setText] = useState({
    email: "",
    password: "",
  });
  function handleChange({ target: { name, value } }) {
    setText((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <Stack
      bg={"white"}
      shadow={"lg"}
      borderRadius={"3xl"}
      p="0.2em"
      w="100%"
      minH="65%"
      h="auto"
      m="auto"
      direction={{ base: "column", md: "row-reverse" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"4xl"}>Sign In</Heading>

          <InputGroup id="username">
            <InputLeftElement>
              <HiUser />
            </InputLeftElement>

            <Input
              //id={styles.Input}
              name="email"
              onChange={(e) => handleChange(e)}
              focusBorderColor="white"
              type="name"
              placeholder="Your Name"
            />
          </InputGroup>

          <InputGroup id="email">
            <InputLeftElement>
              <MdAlternateEmail />
            </InputLeftElement>
            <Input
              // id={styles.Input}
              name="password"
              onChange={(e) => handleChange(e)}
              type="email"
              focusBorderColor="white"
              placeholder="Email"
            />
          </InputGroup>

          <Stack spacing={6}>
            <Stack
              p="1px 0px"
              direction={{ base: "row", sm: "row" }}
              align={"center"}
              justify={"start"}
            ></Stack>
            <Button
              isLoading={isLoading}
              color={"white"}
              fontWeight={100}
              w="40%"
              //onClick={()=>handleClick(text,createSignIn,toast,dispatch)}
              colorScheme={"yellow"}
            >
              Submit
            </Button>
            <Stack
              p="1rem 0px"
              direction={{ base: "row", sm: "row" }}
              align={"center"}
              justify={["center", "center", "start"]}
            >
              <SocialIcons />
            </Stack>
          </Stack>
        </Stack>
      </Flex>
      <Stack
        h="100%"
        p="1rem"
        alignItems={"center"}
        justifyContent={"center"}
        flex={1}
      >
        <Image alt={"Login Image"} objectFit={"cover"} src={SideImage} />

        <Text color={"#555"} textDecoration={"underline"}>
          {" "}
        </Text>
      </Stack>
    </Stack>
  );
}
