import {
  Button,
  Flex,
  Heading,
  HStack,
  Separator,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineOpenAI } from "react-icons/ai";
import {
  BiLogoFirebase,
  BiLogoFlask,
  BiLogoMongodb,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMui, SiPrisma } from "react-icons/si";

export default function TechStack() {
  return (
    <Stack gap={6} id="home">
      <Heading as={"h1"} fontSize={"xl"} fontWeight={"bold"}>
        I convert YOUR digital vision into reality.
      </Heading>
      <Text fontSize={"md"} color={"gray.400"}>
        Focus. Consistent. Discipline.
      </Text>
      <Separator opacity={0.2} />
      <Flex justifyContent={"space-between"}>
        <Button
          borderRadius={"md"}
          bg={"white"}
          color={"black"}
          _hover={{ bg: "whiteAlpha.900" }}
        >
          <IoMdCheckmarkCircleOutline />
          Hire me
        </Button>
        <HStack gap={4}>
          <Flex direction="column">
            <Heading as="h3" fontSize="sm" fontWeight="bold" lineHeight="short">
              3 yrs
            </Heading>
            <Text fontSize="xs" color="gray.400">
              Experience
            </Text>
          </Flex>
          <Flex direction="column">
            <Heading as="h3" fontSize="sm" fontWeight="bold" lineHeight="short">
              Pratiksha Nagar
            </Heading>
            <Text fontSize="xs" color="gray.400">
              Location
            </Text>
          </Flex>
        </HStack>
      </Flex>
      <Heading as={"h2"} fontSize={"lg"} fontWeight={"bold"}>
        Tech Stack
      </Heading>
      <SimpleGrid columns={3} gap={3}>
        {technologies.map((tech, index) => {
          return (
            <>
              <Button
                variant={"outline"}
                _hover={{ bg: "#0d1325" }}
                color={"white"}
                borderColor={"gray.600"}
                key={index}
              >
                {tech.badge}
                {tech.name}
              </Button>
            </>
          );
        })}
      </SimpleGrid>
    </Stack>
  );
}

const technologies = [
  { name: "TypeScript", badge: <BiLogoTypescript /> },
  { name: "JavaScript", badge: <IoLogoJavascript /> },
  { name: "React", badge: <FaReact /> },
  { name: "Next", badge: <RiNextjsFill /> },
  { name: "Tailwind", badge: <BiLogoTailwindCss /> },
  { name: "Redux", badge: <BiLogoRedux /> },
  { name: "Flask", badge: <BiLogoFlask /> },
  { name: "HTML5", badge: <FaHtml5 /> },
  { name: "CSS3", badge: <FaCss3 /> },
  { name: "Node", badge: <FaNodeJs /> },
  { name: "Express", badge: <SiExpress /> },
  { name: "Python", badge: <FaPython /> },
  { name: "MongoDB", badge: <BiLogoMongodb /> },
  { name: "AWS", badge: <FaAws /> },
  { name: "OpenAI", badge: <AiOutlineOpenAI /> },
  { name: "Firebase", badge: <BiLogoFirebase /> },
  { name: "Git", badge: <FaGitAlt /> },
  { name: "Docker", badge: <FaDocker /> },
  { name: "Prisma", badge: <SiPrisma /> },
  { name: "MUI", badge: <SiMui /> },
];
