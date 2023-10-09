import {
  Box,
  Flex,
  MenuButton,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  return (
    <Box>
      <Flex direction={"row"} alignItems={"center"} justifyContent={"flex-end"}>
        <DarkModeSwitch />
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="solid"
            colorScheme="teal"
            size="lg"
          />
          <MenuList>
            <MenuItem command="⌘T">New Tab</MenuItem>
            <MenuItem command="⌘N">New Window</MenuItem>
            <MenuItem command="⌘⇧N">Open Closed Tab</MenuItem>
            <MenuItem command="⌘O">Open File...</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};
