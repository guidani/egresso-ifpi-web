import { Link as RouterDomLink, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Link,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

interface IUserLogin {
  userEmail: string;
  userPassword: string;
}

const Login = () => {
  const { logInWithEmailAndPassword } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<IUserLogin>();

  const onSubmit: SubmitHandler<IUserLogin> = async (data) => {
    try {
      await logInWithEmailAndPassword(data.userEmail, data.userPassword);
      navigate("/");
    } catch (error) {
      if (error) {
        return;
      }
    }
  };

  return (
    <Container
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="green.400"
      minWidth="full"
    >
      <Box w="40rem" bg="white" rounded="md" p="4">
        <Center mb="4">
          <Image src="topo_ifpi.png" alt="Logo_IFPI" />
        </Center>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.userEmail}>
            <FormLabel htmlFor="userEmail">E-mail</FormLabel>
            <Input
              {...register("userEmail", { required: true })}
              type="email"
              placeholder="Seu e-mail"
              id="userEmail"
              name="userEmail"
            />
            {errors.userEmail && "Insira um e-mail!"}
          </FormControl>
          <FormControl isInvalid={errors.userPassword}>
            <FormLabel htmlFor="userPassword">Senha</FormLabel>
            <Input
              {...register("userPassword", { required: true })}
              type="password"
              placeholder="Sua senha"
              id="userPassword"
              name="userPassword"
            />
            {errors.userPassword && "Insira a senha."}
          </FormControl>
          <Button
            type="submit"
            w="full"
            bg="green.400"
            mt="4"
            isLoading={isSubmitting}
          >
            Entrar
          </Button>
        </form>
        <Flex justify="space-between" mt="2">
          <Link
            as={RouterDomLink}
            to="/register"
            borderBottom="2px"
            borderBottomColor="green.400"
            _hover={{ textDecoration: "none" }}
          >
            Cadastre-se aqui.
          </Link>
          <Link
            as={RouterDomLink}
            to="/forgot-password"
            borderBottom="2px"
            borderBottomColor="green.400"
            _hover={{ textDecoration: "none" }}
          >
            Recuperar senha
          </Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Login;
