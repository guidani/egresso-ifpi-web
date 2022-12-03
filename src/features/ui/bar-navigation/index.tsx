import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ifpi_logo from "../../../shared/images/topo_ifpi.png";
import useAuth from "../../auth/hooks/useAuth";

const Barnavigation = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box w="full" bg="green.500" py="2" mb="4">
        <Container minW="full">
          <Flex justify="space-between">
            <Box display="flex" gap='5' alignItems='center'>
              <Image src={ifpi_logo} alt="imagem" boxSize="50px" bg='whiteAlpha.400' rounded='md'/>
              <Link to={"/"}>
                <Text fontSize="2xl" fontWeight='bold' color='white'>Egresso IFPI</Text>
              </Link>
            </Box>
            <Flex align="center" gap="5">
              <Text>Bem vindo: {user.email}</Text>
              <Link to="/" onClick={handleLogOut}>
                <Button rightIcon={<FaSignOutAlt />}>Sair</Button>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Barnavigation;
