import { Box, Button, Flex, HStack, Link } from "@chakra-ui/react";
import { BsBriefcase } from "react-icons/bs";
import { IoHomeOutline, IoMenu, IoMoonOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { PiProjectorScreen } from "react-icons/pi";
import { Avatar } from "./avatar";
import { MyContainer } from "./container";

export default function Navbar() {
  return (
    <Box p={{ md: 12 }} pt={10} mb={{ base: 8, md: 0 }}>
      <MyContainer borderWidth="1px" borderColor="gray.700" borderRadius="md">
        <Flex justifyContent={{
          base: "space-between",
          md: "space-between"
        }} py={2}>
          <HStack gap={3} >
            <Avatar size={"sm"} name="rahul" src="./Assests/rahul.png" />
            <Button
              variant={"outline"}
              padding={2}
              _hover={{ bg: "#0d1325" }}
              borderColor={"gray.600"}
              hideBelow={'md'}
            >
              <Link
                fontWeight={"bold"}
                color={"white"}
                href="#"
                _focus={{ outline: "none", boxShadow: "none" }}
                _hover={{textDecoration : "none"}}
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
              hideFrom={'md'}
            >
              <Link
                fontWeight={"bold"}
                color={"white"}
                href="#"
                _focus={{ outline: "none", boxShadow: "none" }}
                _hover={{textDecoration : "none"}}
              >
                @rahulc_3
              </Link>
            </Button>
          <HStack gap={5} hideBelow={'md'}>
            <Button
              variant={"outline"}
              border={0}
              p={2}
              color={"white"}
              _hover={{ bg: "#0d1325" }}
              borderColor={"gray.600"}
            >
              <IoHomeOutline />
              Home
            </Button>
            <Button
              variant={"outline"}
              border={0}
              p={2}
              color={"white"}
              _hover={{ bg: "#0d1325" }}
              borderColor={"gray.600"}
            >
              <PiProjectorScreen />
              Projects
            </Button>
            <Button
              variant={"outline"}
              border={0}
              p={2}
              color={"white"}
              _hover={{ bg: "#0d1325" }}
              borderColor={"gray.600"}
            >
              <BsBriefcase />
              Work{" "}
            </Button>
            <Button
              variant={"outline"}
              border={0}
              p={2}
              color={"white"}
              _hover={{ bg: "#0d1325" }}
              borderColor={"gray.600"}
            >
              <MdMailOutline />
              Contact{" "}
            </Button>
           
            <Button variant={"outline"} 
          color={'white'}
             padding={2}
             _hover={{ bg: "#0d1325" }}
             borderColor={"gray.600"}
            >
            <IoMoonOutline />

            </Button>
          </HStack>
          <Button p={2} hideFrom={'md'} variant={"outline"}  
              padding={2}
              _hover={{ bg: "#0d1325" }}
              borderColor={"gray.600"}
              color={'white'}
              border={0}
>
          <IoMenu />
          </Button>
        </Flex>
      </MyContainer>
    </Box>
  );
}
