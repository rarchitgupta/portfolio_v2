import { Button, Center, Flex, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";
import { typeInfo } from "../pages";
import { H2 } from "./Headings/H2";

export const ProjectStack = (
  project: typeInfo["projectSection"]["projects"][0]
) => {
  return (
    <Stack my={8}>
      <H2 size={{ base: "md", md: "lg" }}>{project.name}</H2>
      <Text fontSize={{ base: "sm", md: "xl" }}>{project.description}</Text>
      <Flex flexWrap={"wrap"} gap={3}>
        {project.technologies.split(",").map((tech, index) => {
          return (
            <Tag
              key={index}
              fontSize={{ base: "sm", md: "lg" }}
              colorScheme="teal"
            >
              {tech}
            </Tag>
          );
        })}
      </Flex>
      <Button
        my={2}
        colorScheme="teal"
        variant={"outline"}
        leftIcon={<FaGithub />}
        width={{ base: "100%", md: 60 }}
      >
        Source Code
      </Button>
    </Stack>
  );
};
