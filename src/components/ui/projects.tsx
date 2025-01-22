import { projects } from "@/data/project.data";
import { Heading, Stack, Text } from "@chakra-ui/react";
import { CNLink } from "../chakra-next";

export default function Projects() {
  return (
    <Stack gap={6} id="projects">
      <Heading as={"h2"} fontSize={"lg"} fontWeight={"bold"}>
        Projects
      </Heading>
      {projects.map((project, index) => {
          return (
           <>
            <CNLink
            key={index}
            href={project.href}
            borderWidth={'1px'}
            borderColor={'gray.700'}
            borderRadius={'lg'}
            p={6}
            
            _hover={{ textDecoration: "none", bgColor : "#0d1325" }}
            target="_blank"
          >
            <Stack  alignItems="start">
              <Heading as="h3" fontSize="lg" fontWeight="bold" textAlign="start">
               {project.title}
              </Heading>
              <Text color="gray.500" fontSize={'sm'} >
                {project.description}
              </Text>
            </Stack>
          </CNLink>
          
           </>
          )
        } )}
    </Stack>
  );
}
