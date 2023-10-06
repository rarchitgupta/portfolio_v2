import { Container, Text } from "@chakra-ui/react";
import { H3 } from "../components/Headings/H3";

export const About = () => {
  return (
    <Container maxW="3xl">
      <H3 size={{ base: "lg", md: "xl" }}>Lorem ipsum</H3>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>
    </Container>
  );
};
