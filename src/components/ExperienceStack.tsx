import { Flex, Stack, Tag, Text } from "@chakra-ui/react";
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
      <H3 size={{ base: "sm", md: "md" }}>{experience.duration}</H3>
      <H2 size={{ base: "md", md: "lg" }}>
        {experience.position} • {experience.organization}
      </H2>
      <Text fontSize={{ base: "sm", md: "xl" }}>{experience.description}</Text>
      <Flex flexWrap={"wrap"} gap={3}>
        {experience.skills.split(",").map((skill, index) => {
          return (
            <Tag
              key={index}
              fontSize={{ base: "sm", md: "lg" }}
              colorScheme="teal"
            >
              {skill}
            </Tag>
          );
        })}
      </Flex>
    </Stack>
  );
};