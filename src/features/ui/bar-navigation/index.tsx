import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { RefObject } from "react";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ifpi_logo from "../../../shared/images/topo_ifpi.png";
import useAuth from "../../auth/hooks/useAuth";

const Barnavigation = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef() as RefObject<any>;

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // const getUserData = async () => {
  //   try {
  //     const docRef = doc(db, "users", `${user.id}`);
  //     const docSnap = await getDocFromServer(docRef);
  //     if (docSnap.exists()) {
  //       console.log("Data: ", docSnap.data());
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getUserData();
  // }, []);

  return (
    <Box w="full" bg="green.500" py="2" mb="4">
      <Container minW="full">
        <Flex justify="space-between">
          <Box display="flex" gap="5" alignItems="center">
            <Image
              src={ifpi_logo}
              alt="imagem"
              boxSize="50px"
              bg="whiteAlpha.400"
              rounded="md"
            />
            <Link to={"/"}>
              <Text fontSize="2xl" fontWeight="bold" color="white">
                Egresso IFPI
              </Text>
            </Link>
          </Box>
          <Flex align="center" gap="5" display={{ base: "none", md: "flex" }}>
            <Text>Bem vindo: {user.email}</Text>
            <Link to="/" onClick={handleLogOut}>
              <Button rightIcon={<FaSignOutAlt />}>Sair</Button>
            </Link>
          </Flex>
          <Box display={{ base: "block", md: "none" }}>
            <Button onClick={onOpen} ref={btnRef}>
              <Icon as={FaBars} />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent bg='green.500'>
                <DrawerCloseButton />
                <DrawerHeader></DrawerHeader>
                <DrawerBody>
                  <VStack>
                    <Text>Bem vindo: {user.email}</Text>
                  </VStack>
                </DrawerBody>
                <DrawerFooter>
                  <Link to="/" onClick={handleLogOut}>
                    <Button rightIcon={<FaSignOutAlt />}>Sair</Button>
                  </Link>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Barnavigation;
