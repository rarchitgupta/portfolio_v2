import { Container, Text } from "@chakra-ui/react";
import { H3 } from "../components/Headings/H3";

export const About = (aboutSection: { about: string }) => {
  return (
    <Container maxW="6xl" my={16}>
      <H3 size={{ base: "lg", md: "xl" }} my={8}>
        ABOUT
      </H3>
      <Text
        fontSize={{ base: "lg", md: "xl" }}
        dangerouslySetInnerHTML={{ __html: aboutSection.about }}
      />
    </Container>
  );
};
