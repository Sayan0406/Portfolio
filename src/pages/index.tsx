import { MyContainer } from "@/components/ui/container";
import Sidebar from "@/components/ui/sidebar";
import TechStack from "@/components/ui/tech-stack";
import { GridItem, SimpleGrid } from "@chakra-ui/react";


export default function Home() {
  return (
    <MyContainer>
      <SimpleGrid columns={3} gap={4}>

  <Sidebar />
  <GridItem colSpan={{md : 2}}>
<TechStack/>
  </GridItem>

      </SimpleGrid>
    </MyContainer>
  );
}
