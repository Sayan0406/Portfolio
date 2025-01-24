import { projects } from "@/data/project.data";
import { Heading, Stack, Text } from "@chakra-ui/react";
import { CNLink } from "../chakra-next";

export default function Projects() {
  return (
    <Stack gap={6} id="projects">
      <Heading
        as={"h2"}
        fontSize={{ base: "xl", md: "2xl" }}
        color={"brand"}
        fontWeight={"bold"}
      >
        Projects
      </Heading>
      {projects.map((project, index) => {
        return (
          <>
            <CNLink
              key={index}
              href={project.href}
              borderWidth={"1px"}
              borderColor={"brand.EMPHASIZED"}
              _focus={{
                textDecoration: "none",
                boxShadow: "none",
                borderColor: "brand.EMPHASIZED",
                border: "none",
              }}
              borderRadius={"md"}
              p={6}
              _hover={{ textDecoration: "none", bgColor: "brand.MUTED" }}
              target="_blank"
            >
              <Stack alignItems="start">
                <Heading
                  as="h3"
                  fontSize="md"
                  color={"brand"}
                  fontWeight="bold"
                  textAlign="start"
                >
                  {project.title}
                </Heading>
                <Text color="brand.SECONDARY" fontSize={"sm"}>
                  {project.description}
                </Text>
              </Stack>
            </CNLink>
          </>
        );
      })}
    </Stack>
  );
}
