import { Flex, Stack, Tag, Text } from "@chakra-ui/react";
import { H3 } from "./Headings/H3";
import { H2 } from "./Headings/H2";
import { typeInfo } from "../pages";

export const ExperienceStack = (
  experience: typeInfo["experienceSection"]["experiences"][0]
) => {
  return (
    <Stack my={8}>
      <H2 size={{ base: "sm", md: "md" }} fontWeight={400}>
        {experience.duration}
      </H2>
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
