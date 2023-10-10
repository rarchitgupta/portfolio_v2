import { Badge, Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { H3 } from "../components/Headings/H3";
import { ExperienceStack } from "../components/ExperienceStack";
import { typeInfo } from "../pages";

interface ExperienceProps {
  experienceArray: typeInfo["experienceSection"]
}

export const Experience: React.FC<ExperienceProps> = ({ experienceArray }) => {
  return (
    <Container maxW="6xl" my={16}>
      <H3 size={{ base: "lg", md: "xl" }} my={8}>
        EXPERIENCE
      </H3>
      {experienceArray?.map((experience, index) => {
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
