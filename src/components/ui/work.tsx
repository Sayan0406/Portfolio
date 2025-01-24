import { works } from "@/data/work.data";
import {
  Flex,
  Heading,
  HStack,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaRegCalendarDays } from "react-icons/fa6";

export default function Work() {
  return (
    <Stack gap={6} id="work">
      <Heading
        as={"h2"}
        fontSize={{ base: "xl", md: "2xl" }}
        color={"brand"}
        fontWeight={"bold"}
      >
        Work
      </Heading>
      <Stack
        gap={5}
        p={6}
        borderWidth={"1px"}
        borderColor={"brand.EMPHASIZED"}
        borderRadius={"lg"}
      >
        {works.map((work, index) => {
          return (
            <Stack gap={2} key={index} direction="column">
              <Flex justify={"space-between"}>
                <Heading
                  as="h3"
                  fontSize="md"
                  color={"brand"}
                  fontWeight="bold"
                  textAlign="start"
                >
                  {work.company}
                </Heading>
                <HStack
                  borderWidth={"1px"}
                  p={2}
                  borderRadius={"lg"}
                  borderColor={"brand.EMPHASIZED"}
                >
                  <FaRegCalendarDays size={14} />
                  <Text fontSize={"xs"} color={'brand'}>
                    {work.fromDate} - {work.toDate}
                  </Text>
                </HStack>
              </Flex>
              <Text fontSize={"sm"} color={"brand.SECONDARY"}>
                {work.description}
              </Text>
              <Separator opacity={1} color={"brand"} />
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
