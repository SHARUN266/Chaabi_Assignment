import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
export default function SocialIcons() {
  function google() {
    console.log("Hello")
   // window.open("http://localhost:8080/auth/google", "_self");
  }
  return (
    <Flex cursor={'pointer'} gap={6} alignItems={"center"}>
      <Text>  Or login with </Text>
      <Flex gap={5}>
        {" "}
        <ImFacebook2 color="#4267B2" fontSize={"1.5rem"} onClick={google}  />{" "}
       
        <FcGoogle fontSize={"1.5rem"} onClick={google} />{" "}
        <FaTwitter fontSize={"1.5rem"} onClick={google}  color={"#1DA1F2"} />{" "}
      </Flex>
    </Flex>
  );
}
