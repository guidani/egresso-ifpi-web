import { Box, Container, Icon, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";

const Home = () => {
  return (
    <Box w="100%" h="100vh" px="10" display="flex" gap='5'>
      <LinkBox
        as="div"
        maxW={["sm", "md"]}
        height="max-content"
        px="20"
        py="2"
        borderWidth="1px"
        rounded="md"
        bg="green.400"
        textAlign="center"
      >
        <Text as="h4" fontSize="2xl" textAlign="center">
          <LinkOverlay href="/administrativo">Administrativo</LinkOverlay>
        </Text>
        <Icon as={FaUserTie} fontSize="4xl" />
      </LinkBox>

      <LinkBox
        as="div"
        maxW={["sm", "md"]}
        height="max-content"
        px="20"
        py="2"
        borderWidth="1px"
        rounded="md"
        bg="green.400"
        textAlign="center"
      >
        <Text as="h4" fontSize="2xl" textAlign="center">
          <LinkOverlay href="/egresso">Egresso</LinkOverlay>
        </Text>
        <Icon as={FaUserGraduate} fontSize="4xl" />
      </LinkBox>
    </Box>
  );
};

export default Home;
