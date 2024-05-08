import { Button, Container, Divider } from "@chakra-ui/react";
import { typeInfo } from "../pages";
import { ProjectStack } from "../components/ProjectStack";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { H1 } from "../components/Headings/H1";

interface ProjectsProps {
  projectsArray: typeInfo["projectSection"]["projects"];
  githubLink: typeInfo["projectSection"]["githubLink"];
}

const Projects: React.FC<ProjectsProps> = ({ projectsArray, githubLink }) => {
  return (
    <Container maxW="6xl">
      <H1 size={{ base: "xl", md: "2xl" }} my={8} fontWeight={500}>
        Projects
      </H1>
      {projectsArray?.map((project, index) => {
        return (
          <ProjectStack
            key={index}
            name={project.name}
            description={project.description}
            link={project.link}
            technologies={project.technologies}
          />
        );
      })}
      <Link href={githubLink}>
        <Button
          colorScheme="teal"
          variant="solid"
          leftIcon={<FaGithub />}
          width={{ base: "full", md: 80 }}
        >
          View Github
        </Button>
      </Link>
      <Divider mt={8} />
    </Container>
  );
};

export default Projects;
