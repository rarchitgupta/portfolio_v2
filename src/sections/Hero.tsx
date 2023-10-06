import { Container, Flex, useColorMode } from "@chakra-ui/react";
import { H3 } from "../components/Headings/H3";
import { H1 } from "../components/Headings/H1";
import Lottie from "react-lottie";
import codeAnimationLight from "../assets/code_lottie.json";
import codeAnimationDark from "../assets/codedark_lottie.json";

export const Hero = () => {
  const { colorMode } = useColorMode();
  const codeAnimationOptions = {
    loop: false,
    autoplay: true,
    animationData:
      colorMode === "light" ? codeAnimationLight : codeAnimationDark,
  };
  return (
    <Container maxW="6xl">
      <Flex justifyContent={"center"} h={"95vh"} alignItems={"center"} gap={10}>
        <Flex direction={"column"}>
          <H3 size={{ base: "md", md: "xl" }}>Lorem ipsum</H3>
          <H1 size={{ base: "lg", md: "3xl" }}>consectetur adipiscing elit</H1>
        </Flex>
        <Lottie options={codeAnimationOptions} height={350} width={350} />
      </Flex>
    </Container>
  );
};
