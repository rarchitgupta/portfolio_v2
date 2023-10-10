import { Heading, HeadingProps, useColorMode } from "@chakra-ui/react";

export const H2 = (props: HeadingProps) => {
  const { colorMode } = useColorMode();
  return (
    <Heading
      as="h2"
      my={1}
      size={props.size}
      fontWeight={props.fontWeight && 500}
      {...props}
      color={`headingColors.${colorMode}.h2`}
    />
  );
};
