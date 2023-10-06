import { Container, Text } from "@chakra-ui/react";
import { H1 } from "../components/Headings/H1";

export const About = () => {
  return (
    <Container maxW="3xl">
      <H1 size={{ base: "lg", md: "xl" }}>Lorem ipsum</H1>
      <Text size={{ base: "md", md: "lg" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>
    </Container>
  );
};
