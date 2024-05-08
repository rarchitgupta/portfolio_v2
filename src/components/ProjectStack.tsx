import { Button, Flex, Stack, Tag, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";
import { typeInfo } from "../pages";
import { H2 } from "./Headings/H2";
import Link from "next/link";

export const ProjectStack = (
  project: typeInfo["projectSection"]["projects"][0]
) => {
  return (
    <Stack my={8}>
      <H2 size={{ base: "lg", md: "xl" }} fontWeight={500}>
        {project.name}
      </H2>
      <Text fontSize={{ base: "md", md: "2xl" }}>{project.description}</Text>
      <Flex flexWrap={"wrap"} gap={3}>
        {project.technologies.split(",").map((tech, index) => {
          return (
            <Tag
              key={index}
              fontSize={{ base: "md", md: "xl" }}
              colorScheme="teal"
            >
              {tech}
            </Tag>
          );
        })}
      </Flex>
      <Link href={project.link}>
        <Button
          my={2}
          colorScheme="teal"
          variant={"outline"}
          leftIcon={<FaGithub />}
          width={{ base: "100%", md: 60 }}
        >
          Source Code
        </Button>
      </Link>
    </Stack>
  );
};
