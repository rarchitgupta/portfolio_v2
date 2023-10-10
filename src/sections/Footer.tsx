import {
  Button,
  Container,
  Divider,
  Flex,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { typeInfo } from "../pages";
import { H2 } from "../components/Headings/H2";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { SiChakraui, SiTypescript } from "react-icons/si";

interface FooterProps {
  email: typeInfo["contactAndFooterSection"]["email"];
  socialLinks: typeInfo["contactAndFooterSection"]["socialLinks"];
}
export const Footer: React.FC<FooterProps> = ({ socialLinks, email }) => {
  const { colorMode } = useColorMode();
  return (
    <Container maxW="6xl" my={16}>
      <H2 size={{ base: "lg", md: "xl" }} my={4} fontWeight={400}>
        GET IN TOUCH
      </H2>
      <Text fontSize={{ base: "md", md: "lg" }}>
        You can reach out to me at
      </Text>
      <Link href={`mailto: ${email}`}>
        <Button variant={"link"} colorScheme="teal" size="lg">
          {email}
        </Button>
      </Link>
      <Text my={4} fontSize={{ base: "md", md: "lg" }}>
        Or
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }}>Contact me through</Text>
      <Flex my={2} gap={2}>
        <Link href={socialLinks.github}>
          <IconButton
            aria-label="GitHub"
            icon={<FaGithub />}
            size="lg"
            variant={"outline"}
            colorScheme="teal"
          />
        </Link>
        <Link href={socialLinks.linkedIn}>
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            size="lg"
            variant={"outline"}
            colorScheme="teal"
          />
        </Link>
        <Link href={socialLinks.twitter}>
          <IconButton
            aria-label="Twitter"
            icon={<FaTwitter />}
            size="lg"
            variant={"outline"}
            colorScheme="teal"
          />
        </Link>
      </Flex>
      <Divider my={8} />
      <Text>Made with</Text>
      <Flex my={2} gap={4}>
        <SiChakraui
          size={30}
          color={colorMode === "dark" ? "#82e6d9" : "#309795"}
        />
        <SiTypescript
          size={30}
          color={colorMode === "dark" ? "#82e6d9" : "#309795"}
        />
      </Flex>
    </Container>
  );
};
