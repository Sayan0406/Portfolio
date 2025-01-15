import { Box, Button, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { MyContainer } from "./container";
import { Avatar } from "./avatar";
import { IoHomeOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <Box
      p={{ md: 12 }}
      mt={{ base: 10, md: 0 }}
      mb={{ base: 8, md: 0 }}
     
    >
      <MyContainer   borderWidth="1px"
      borderColor="gray.700"
      borderRadius="md">
        <Flex justifyContent={"space-between"} py={2}>
          <HStack gap={5}>
            <Avatar size={'sm'} name="rahul" src="./Assests/rahul.png" />
            <Button variant={"outline"} padding={2} _hover={{bg : "#0d1325"}} borderColor={'gray.600'}>
              <Link fontWeight={'bold'} color={'white'}  href="#" _focus={{ outline: "none", boxShadow: "none" }}>
                @rahulc_3
              </Link>
            </Button>
          </HStack>
          <HStack gap={5}>
            <Button variant={'outline'} border={0} p={2} color={'white'} _hover={{bg : "#0d1325"}} borderColor={'gray.600'}>
            <IoHomeOutline height={3} />
              Home
              </Button>
            <Text>Age</Text>
            <Text>Address</Text>
            <Text>Gender</Text>
            <Button variant={"outline"} p={3}>
              Toggle
            </Button>
          </HStack>
        </Flex>
      </MyContainer>
    </Box>
  );
}
