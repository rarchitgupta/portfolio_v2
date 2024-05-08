import { Container, Divider, Text } from "@chakra-ui/react";
import { typeInfo } from "../pages";
import { H1 } from "../components/Headings/H1";

const About = (aboutSection: { about: typeInfo["aboutSection"]["html"] }) => {
  return (
    <Container maxW="6xl" my={16}>
      <H1 size={{ base: "xl", md: "2xl" }} my={8} fontWeight={500}>
        About
      </H1>
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        dangerouslySetInnerHTML={{ __html: aboutSection.about }}
      />
      <Divider mt={8} />
    </Container>
  );
};

export default About;
