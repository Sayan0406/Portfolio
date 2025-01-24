"use client";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";
import { Box, Button, Flex, HStack, Link, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { BsBriefcase } from "react-icons/bs";
import { IoHomeOutline, IoMenu } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { PiProjectorScreen } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { Avatar } from "./avatar";
import { MyContainer } from "./container";
type NavLink = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleColorMode } = useColorMode();

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
        bg="bg"
      
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
              _hover={{ bg: "brand.MUTED" }}
              borderColor={"gray.600"}
              hideBelow={"md"}
            >
              <Link
                fontWeight={"bold"}
                
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
            _hover={{ bg: "brand.MUTED" }}
            borderColor={"brand.EMPHASIZED"}
            hideFrom={"md"}
          >
            <Link
              fontWeight={"bold"}
              
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
                  borderRadius={'md'}
                  _hover={{ bg: "brand.MUTED", textDecoration : "none" }}
                  
                >
                  {nav.icon}
                  {nav.label}
                </Link>
              );
            })}
            <ColorModeButton onClick={toggleColorMode} />
          </HStack>

          <Button
            p={2}
            hideFrom={"md"}
            variant={"outline"}
            padding={2}
            _hover={{ bg: "brand.MUTED" }}
            color={"brand"}
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
                    color="brand"
                    p={2}
                    
                    _hover={{ bg: "brand.MUTED", textDecoration : "none" }}
                    borderColor={"brand.EMPHASIZED"}
                  >
                    {nav.icon}
                    {nav.label}
                  </Link>
                );
              })}
              <ColorModeButton borderWidth={"1px"} borderRadius={'md'} borderColor={'border'} _hover={{bg : "brand.MUTED"}} />

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
