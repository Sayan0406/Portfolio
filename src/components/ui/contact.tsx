import { Stack, Heading, Box, Text, Link } from "@chakra-ui/react";
import React from "react";

export default function Contact() {
  return (
    <Stack gap={6} marginBottom={10}>
      <Heading as={"h2"} fontSize={"lg"} fontWeight={"bold"}>
        Contact
      </Heading>
      <Box
        borderWidth={"1px"}
        p={5}
        borderRadius={"lg"}
        borderColor={"gray.700"}
      >
        <Text textAlign={"center"} fontSize={"sm"} color={"gray.500"}>
          Best way to reach me is through:{" "}
          <Link
            color={"gray.500"}
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
