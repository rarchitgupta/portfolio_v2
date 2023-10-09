import { Container, Flex, Show, useColorMode } from "@chakra-ui/react";
import { H3 } from "../components/Headings/H3";
import { H1 } from "../components/Headings/H1";
import Lottie from "react-lottie";
import codeAnimationLight from "../assets/code_lottie.json";
import codeAnimationDark from "../assets/codedark_lottie.json";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

interface HeroSectionProps {
  heroSection: {
    name: string;
    profession: string;
  };
}

export const Hero: React.FC<HeroSectionProps> = ({ heroSection }) => {
  const { name, profession } = heroSection;
  const { colorMode } = useColorMode();
  const codeAnimationOptions = {
    loop: false,
    autoplay: true,
    animationData:
      colorMode === "light" ? codeAnimationLight : codeAnimationDark,
  };
  return (
    <Container maxW="6xl" my={48}>
      <Flex alignItems={"center"} gap={200} justifyContent={"space-between"}>
        <Flex direction={"column"}>
          <H1 size={{ base: "3xl", md: "3xl" }}>{name}</H1>
          <H3 size={{ base: "lg", md: "xl" }}>{profession}</H3>
          <Flex direction={"row"} mt={8} gap={6}>
            <FaGithub size={30} />
            <FaLinkedin size={30} />
            <FaTwitter size={30} />
          </Flex>
        </Flex>
        <Show above="md">
          <Lottie options={codeAnimationOptions} height={450} width={450} />
        </Show>
      </Flex>
    </Container>
  );
};
