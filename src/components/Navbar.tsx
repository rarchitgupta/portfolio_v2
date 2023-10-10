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
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import Link from "next/link";
import { typeInfo } from "../pages";

interface NavbarProps {
  resumeLink: typeInfo["experienceSection"]["resumeLink"];
  socialLinks: typeInfo["contactAndFooterSection"]["socialLinks"];
}

export const Navbar: React.FC<NavbarProps> = ({ resumeLink, socialLinks }) => {
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
            <Link href={socialLinks.github}>
              <MenuItem icon={<FaGithub />}>GitHub</MenuItem>
            </Link>
            <Link href={socialLinks.linkedIn}>
              <MenuItem icon={<FaLinkedin />}>LinkedIn</MenuItem>
            </Link>
            <Link href={socialLinks.twitter}>
              <MenuItem icon={<FaTwitter />}>Twitter</MenuItem>
            </Link>
            <Link href={resumeLink}>
              <MenuItem icon={<FaRegFileAlt />}>Résumé</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};
