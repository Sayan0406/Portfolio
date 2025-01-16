import { Center, Heading, Stack, Text } from '@chakra-ui/react'

export default function Sidebar() {
  return (
    <Stack p={5} borderWidth="1px" borderColor="gray.700" borderRadius="md" width={200} height={'fit-content'}>
        <Heading as={'h2'} fontSize={'md'}>
        Rahul Chaurasiya
        </Heading>
        <Text fontSize={'xs'} color={'gray.400'} >
        👋 Hi, I&apos;m Dawa Sherpa, a Fullstack and AI Developer. I have built many projects and leveled up my skills while working in various companies. I work on personal cool projects like AI-related chatbots, Facebook chatbots, scrapers, and AI-driven automations. I also complete software projects for clients and have successfully delivered many. It&apos;s been 3 years of immersing myself in the world of development.
        </Text>
        <Center>
          
        </Center>
    </Stack>
  )
}
