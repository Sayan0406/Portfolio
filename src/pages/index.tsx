import { MyContainer } from "@/components/ui/container";
import Sidebar from "@/components/ui/sidebar";
import { Heading, SimpleGrid } from "@chakra-ui/react";


export default function Home() {
  return (
    <MyContainer>
      <SimpleGrid columns={2} gap={8}>

  <Sidebar/>
  <Heading>Portfolio setting</Heading>

      </SimpleGrid>
    </MyContainer>
  );
}
