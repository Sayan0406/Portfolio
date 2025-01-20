import Contact from "@/components/ui/contact";
import { MyContainer } from "@/components/ui/container";
import Projects from "@/components/ui/projects";
import Sidebar from "@/components/ui/sidebar";
import TechStack from "@/components/ui/tech-stack";
import Work from "@/components/ui/work";
import { GridItem, SimpleGrid, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <MyContainer>
      <SimpleGrid columns={3} gap={8}>
        <Sidebar />
        <GridItem colSpan={{ md: 2 }}>
          <Stack gap={10}>
          <TechStack />
          <Projects />
          <Work/>
          <Contact/>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </MyContainer>
  );
}
