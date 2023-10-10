import { Container, Text } from "@chakra-ui/react";
import { H3 } from "../components/Headings/H3";
import { typeInfo } from "../pages";

export const About = (aboutSection: { about: typeInfo["aboutSection"]["html"] }) => {
  return (
    <Container maxW="6xl" my={16}>
      <H3 size={{ base: "lg", md: "xl" }} my={4}>
        ABOUT
      </H3>
      <Text
        fontSize={{ base: "lg", md: "xl" }}
        dangerouslySetInnerHTML={{ __html: aboutSection.about }}
      />
    </Container>
  );
};
