import { Container, Flex, Heading } from "@chakra-ui/react";
import { H3 } from "../components/Headings/H3";
import { H1 } from "../components/Headings/H1";

export const Hero = () => {
  return (
    <Container maxW="3xl">
      <Flex direction={"column"} justifyContent={"center"} h={"95vh"}>
        <H3 size={{ base: "lg", md: "xl" }}>Lorem ipsum</H3>
        <H1 size={{ base: "xl", md: "3xl" }}>consectetur adipiscing elit</H1>
      </Flex>
    </Container>
  );
};
