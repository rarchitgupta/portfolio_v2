import { Container, Stack, Text } from "@chakra-ui/react";
import { H3 } from "../components/Headings/H3";
import { H2 } from "../components/Headings/H2";

const experiences = [
  {
    key: 1,
    organization: "Bonatra",
    position: "Software Engineer",
    duration: "September 2022 - Present",
    description:
      "Currently working as a full stack software engineer creating systems for devices like the Bonatra X1 Smart Ring and experiences on the web and mobile app",
    skills: "Python, JavaScript, React, React Native, Frappe, SQL, MongoDB",
  },
];

export const Experience = () => {
  return (
    <Container maxW="6xl" my={16}>
      <H3 size={{ base: "lg", md: "xl" }} my={8}>
        EXPERIENCE
      </H3>
      {experiences?.map((experience) => {
        return (
          <Stack>
            <H3 size={{ base: "xs", md: "sm" }}>{experience.duration}</H3>
            <H2 size={{ base: "sm", md: "md" }}>
              {experience.position} • {experience.organization}
            </H2>
            <Text>{experience.description}</Text>
          </Stack>
        );
      })}
    </Container>
  );
};
