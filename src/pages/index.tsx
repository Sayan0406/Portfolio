'use client'
import Contact from "@/components/ui/contact";
import { MyContainer } from "@/components/ui/container";
import Projects from "@/components/ui/projects";
import Sidebar from "@/components/ui/sidebar";
import TechStack from "@/components/ui/tech-stack";
import Work from "@/components/ui/work";
import { GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <MyContainer>
      <SimpleGrid columns={{base : 1, md : 3}} gap={8} p={{base : 2 , md : 0}}>
        <GridItem hideFrom={'md'}>
        <Text onClick={handleToggleSidebar}>{isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}</Text>
        {isSidebarOpen && <Sidebar />}
        </GridItem>
        <GridItem hideBelow={'md'}>
        <Sidebar />
        </GridItem>
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
