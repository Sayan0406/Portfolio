import { Stack, Heading, Box, Text, Link } from "@chakra-ui/react";
import React from "react";

export default function Contact() {
  return (
    <Stack gap={6} marginBottom={10} id="contact">
      <Heading as={"h2"} fontSize={{base : "xl", md : "2xl"}} color={"brand"} fontWeight={"bold"}>
        Contact
      </Heading>
      <Box
        borderWidth={"1px"}
        p={5}
        borderRadius={"lg"}
        borderColor={"brand.EMPHASIZED"}
      >
        <Text textAlign={"center"} fontSize={"sm"} color={'brand.SECONDARY'}>
          Best way to reach me is through:{" "}
          <Link
            _hover={{color : "brand"}}
            color={'brand.SECONDARY'}
            _focus={{ boxShadow: "none" }}
            href="mailto:therahulchaurasia@gmail.com"
          >
            therahulchaurasia@gmail.com
          </Link>
        </Text>
      </Box>
    </Stack>
  );
}
