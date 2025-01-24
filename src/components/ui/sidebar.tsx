import { Button, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CNLink } from "../chakra-next";

export default function Sidebar() {
  return (
    <Stack
      p={5}
      borderWidth="1px"
      borderColor="brand.EMPHASIZED"
      borderRadius="md"
      height={"fit-content"}
      position={{ md: "sticky" }}
      top={{ md: 20 }}
    >
      <Heading as={"h2"} fontSize={"md"} color={"brand"}>
        Rahul Chaurasiya
      </Heading>
      <Text fontSize={"sm"} color={"brand.SECONDARY"}>
        👋 Hi, I&apos;m Dawa Sherpa, a Fullstack and AI Developer. I have built
        many projects and leveled up my skills while working in various
        companies. I work on personal cool projects like AI-related chatbots,
        Facebook chatbots, scrapers, and AI-driven automations. I also complete
        software projects for clients and have successfully delivered many.
        It&apos;s been 3 years of immersing myself in the world of development.
      </Text>
      <Center>
      {items.map((item) => (
          <Button
            key={item.title}
            variant={"outline"}
            p={2}
            borderRadius={"full"}
            border={0}
          >
            <CNLink href={item.href} color={'Brand'}>
              <item.Icon />
            </CNLink>
          </Button>
        ))}
      </Center>
    </Stack>
  );
}


const items: {
  Icon: IconType;
  href: string;
  title: string;
}[] = [
  {
    Icon: FaGithub,
    href: "https://github.com/therahulchaurasia",
    title: "Github",
  },
  {
    Icon: FaXTwitter,
    href: "https://x.com/thesohailjafri",
    title: "Twitter",
  },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/therahulchaurasia/",
    title: "LinkedIn",
  },
];