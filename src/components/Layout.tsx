import { Container, useColorMode } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "#F8F9FA",
    dark: "#212529",
  };
  const color = {
    light: "#212529",
    dark: "#F8F9FA",
  };
  const transition = "background-color 1s, color 1s";
  return (
    <Container
      maxW="100%"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      transition={transition}
      padding={4}
    >
      {children}
    </Container>
  );
};
