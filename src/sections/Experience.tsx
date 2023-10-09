import { Badge, Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { H3 } from "../components/Headings/H3";
import { H2 } from "../components/Headings/H2";
import { ExperienceStack } from "../components/ExperienceStack";

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
          <ExperienceStack
            key={experience.key}
            position={experience.position}
            duration={experience.duration}
            skills={experience.skills}
            description={experience.description}
            organization={experience.organization}
          />
        );
      })}
    </Container>
  );
};
