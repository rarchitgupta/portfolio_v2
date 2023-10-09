import { Badge, Flex, Stack, Text } from "@chakra-ui/react";
import { H3 } from "./Headings/H3";
import { H2 } from "./Headings/H2";

export const ExperienceStack = (experience: {
  duration: string;
  position: string;
  organization: string;
  description: string;
  skills: string;
}) => {
  return (
    <Stack>
      <H3 size={{ base: "xs", md: "sm" }}>{experience.duration}</H3>
      <H2 size={{ base: "sm", md: "md" }}>
        {experience.position} • {experience.organization}
      </H2>
      <Text>{experience.description}</Text>
      <Flex flexWrap={"wrap"} gap={3}>
        {experience.skills.split(",").map((skill, index) => {
          return (
            <Badge key={index} fontSize={"sm"} colorScheme="teal">
              {skill}
            </Badge>
          );
        })}
      </Flex>
    </Stack>
  );
};
