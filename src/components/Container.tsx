import { Flex, FlexProps } from "@chakra-ui/react";

export const FlexContainer = (props) => (
  <Flex
    direction="column"
    justifyContent="flex-start"
    bg="white"
    color="black"
    _dark={{
      bg: "blackAlpha.800",
      color: "white",
    }}
    transition="all 1s ease-out"
    {...props}
  />
);
