import { Button, Container, Divider } from "@chakra-ui/react";
import { ExperienceStack } from "../components/ExperienceStack";
import { typeInfo } from "../pages";
import { FaRegFileAlt } from "react-icons/fa";
import Link from "next/link";
import { H1 } from "../components/Headings/H1";

interface ExperienceProps {
  experienceArray: typeInfo["experienceSection"]["experiences"];
  resumeLink: typeInfo["experienceSection"]["resumeLink"];
}

const Experience: React.FC<ExperienceProps> = ({
  experienceArray,
  resumeLink,
}) => {
  return (
    <Container maxW="6xl" my={16}>
      <H1 size={{ base: "xl", md: "2xl" }} my={8} fontWeight={500}>
        Experience
      </H1>
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
      <Link href={resumeLink}>
        <Button
          colorScheme="teal"
          variant="solid"
          leftIcon={<FaRegFileAlt />}
          width={{ base: "full", md: 80 }}
        >
          Get my Résumé
        </Button>
      </Link>
      <Divider mt={8} />
    </Container>
  );
};

export default Experience;
