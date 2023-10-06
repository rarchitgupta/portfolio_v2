import { Heading, useColorMode } from "@chakra-ui/react";

export const H2 = (props) => {
  const { colorMode } = useColorMode();
  return (
    <Heading
      as="h2"
      my={1}
      size={props.size}
      {...props}
      color={`headingColors.${colorMode}.h2`}
    />
  );
};
