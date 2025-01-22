"use client";
import { Box, Button, Flex, HStack, Link, Stack } from "@chakra-ui/react";
import { BsBriefcase } from "react-icons/bs";
import { IoHomeOutline, IoMenu, IoMoonOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { PiProjectorScreen } from "react-icons/pi";
import { Avatar } from "./avatar";
import { MyContainer } from "./container";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

type NavLink = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <Box zIndex={1} position={"sticky"} top={0}>
      <MyContainer
        mt={10}
        mb={10}
        borderWidth="1px"
        borderColor="gray.700"
        borderRadius="md"
        bgColor={"#030711"}
      >
        <Flex
          justifyContent={{
            base: "space-between",
            md: "space-between",
          }}
          py={2}
        >
          <HStack gap={3} px={{ base: 3, md: 0 }}>
            <Avatar size={"sm"} name="rahul" src="./Assests/rahul.png" />
            <Button
              variant={"outline"}
              padding={2}
              _hover={{ bg: "#0d1325" }}
              borderColor={"gray.600"}
              hideBelow={"md"}
            >
              <Link
                fontWeight={"bold"}
                color={"white"}
                href="#"
                _focus={{ outline: "none", boxShadow: "none" }}
                _hover={{ textDecoration: "none" }}
              >
                @rahulc_3
              </Link>
            </Button>
          </HStack>
          <Button
            variant={"outline"}
            padding={2}
            _hover={{ bg: "#0d1325" }}
            borderColor={"gray.600"}
            hideFrom={"md"}
          >
            <Link
              fontWeight={"bold"}
              color={"white"}
              href="#"
              _focus={{ outline: "none", boxShadow: "none" }}
              _hover={{ textDecoration: "none" }}
            >
              @rahulc_3
            </Link>
          </Button>
       
            <HStack gap={4} hideBelow={"md"}>
              {navitems.map((nav, index) => {
                return (
                  <Link
                    key={index}
                    href={nav.href}
                    border={0}
                    p={2}
                    color={"white"}
                    _hover={{ bg: "#0d1325" }}
                    borderColor={"gray.600"}
                  >
                    {nav.icon}
                    {nav.label}
                  </Link>
                );
              })}
              <Button
                variant={"outline"}
                color={"white"}
                padding={2}
                _hover={{ bg: "#0d1325" }}
                borderColor={"gray.600"}
              >
                {<IoMoonOutline />}
              </Button>
            </HStack>
        
          <Button
            p={2}
            hideFrom={"md"}
            variant={"outline"}
            padding={2}
            _hover={{ bg: "#0d1325" }}
            borderColor={"gray.600"}
            color={"white"}
            border={0}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <RxCross2 /> : <IoMenu />}
          </Button>
        </Flex>
        {isMenuOpen && (
          <Box hideFrom={"md"} p={2} color={"red"}>
            <Stack gap={4}>
              {navitems.map((nav, index) => {
                return (
                  <Link
                    key={index}
                    href={nav.href}
                    border={0}
                    p={2}
                    color={"white"}
                    _hover={{ bg: "#0d1325" }}
                    borderColor={"gray.600"}
                  >
                    {nav.icon}
                    {nav.label}
                  </Link>
                );
              })}
              <Button
                variant={"outline"}
                color={"white"}
                padding={2}
                _hover={{ bg: "#0d1325" }}
                borderColor={"gray.600"}
              >
                <IoMoonOutline />
              </Button>
            </Stack>
          </Box>
        )}
      </MyContainer>
    </Box>
  );
}

const navitems: NavLink[] = [
  {
    label: "Home",
    icon: <IoHomeOutline />,
    href: "#",
  },
  {
    label: "Projects",
    icon: <PiProjectorScreen />,
    href: "#projects",
  },
  {
    label: "Work",
    icon: <BsBriefcase />,
    href: "#work",
  },
  {
    label: "Contact",
    icon: <MdMailOutline />,
    href: "#contact",
  },
];
