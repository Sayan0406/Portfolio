import { works } from "@/data/work.data";
import { Flex, Heading, HStack, Separator, Stack, Text } from "@chakra-ui/react";

export default function Work() {
  return (
    <Stack gap={6}>
      <Heading as={"h2"} fontSize={"lg"} fontWeight={"bold"}>
        Work
      </Heading>
      <Stack
        gap={5}
        p={5}
        borderWidth={"1px"}
        borderColor={"gray.700"}
        borderRadius={"lg"}
      >
        {works.map((work, index) => {
          return (
            <Stack gap={2} key={index} direction="column">
              <Flex justify={'space-between'}>
              <Heading
                as="h3" fontSize="lg" fontWeight="bold" textAlign="start"
              >
                {work.company}
              </Heading>
              <HStack borderWidth={'1px'} p={2} borderRadius={'lg'} borderColor={'gray.700'}>
            <Text fontSize={"xs"}>{work.fromDate} - {work.toDate}</Text>
              </HStack>
              </Flex>
              <Text  fontSize={"sm"} color={'gray.500'}>{work.description}</Text>
              <Separator opacity={0.2}/>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
