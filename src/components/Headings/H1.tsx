import { Heading, useColorMode } from "@chakra-ui/react";

export const H1 = (props) => {
  const { colorMode } = useColorMode();
  return (
    <Heading
      as="h1"
      size={props.size}
      my={1}
      {...props}
      fontWeight={400}
      color={`headingColors.${colorMode}.h1`}
    />
  );
};
