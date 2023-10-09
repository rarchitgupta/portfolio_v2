import { Badge, Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { H3 } from "../components/Headings/H3";
import { ExperienceStack } from "../components/ExperienceStack";

export const Experience = (experienceArray: any) => {
  return (
    <Container maxW="6xl" my={16}>
      <H3 size={{ base: "lg", md: "xl" }} my={8}>
        EXPERIENCE
      </H3>
      {experienceArray.experienceArray.map((experience, index) => {
        return (
          <ExperienceStack
            key={index}
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
