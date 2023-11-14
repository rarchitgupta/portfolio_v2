import { Container, Divider, Text } from "@chakra-ui/react";
import { typeInfo } from "../pages";
import { H2 } from "../components/Headings/H2";

const About = (aboutSection: { about: typeInfo["aboutSection"]["html"] }) => {
  return (
    <Container maxW="6xl" my={16}>
      <H2 size={{ base: "xl", md: "2xl" }} my={4} fontWeight={400}>
        ABOUT
      </H2>
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        dangerouslySetInnerHTML={{ __html: aboutSection.about }}
      />
      <Divider mt={8} />
    </Container>
  );
};

export default About;
