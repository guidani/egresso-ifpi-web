import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Link,
  useToast,
  UseToastOptions,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link as RouterDomLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

interface IUserRegister {
  userEmail: string;
  userPassword: string;
  confirmPassword: string;
}

const Register = () => {
  const { registerWithEmailAndPassword } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<IUserRegister>();
  const navigate = useNavigate();
  const toast = useToast();

  const showToast = (
    title: string,
    status: UseToastOptions["status"],
    description?: string
  ) => {
    return toast({
      title: title,
      description: description,
      status: status,
      duration: 2000,
      isClosable: true,
    });
  };

  const onSubmit: SubmitHandler<IUserRegister> = async (data) => {
    try {
      if (data.userPassword !== data.confirmPassword) {
        showToast("As senhas precisam ser iguais.", "error");
        return;
      }
      if (data.userPassword.length <= 6) {
        showToast("A senha precisa ser maior que 6 digitos.", "error");
        return;
      }
      await registerWithEmailAndPassword(data.userEmail, data.userPassword);
      navigate("/");
    } catch (error) {
      showToast("OPS! Algo deu errado!", "error");
      return;
    }
  };

  return (
    <>
      <Container
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Center>
            <Image src="topo_ifpi.png" alt="Logo_IFPI" />
          </Center>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.userEmail}>
              <FormLabel htmlFor="userEmail">E-mail</FormLabel>
              <Input
                {...register("userEmail", { required: true })}
                type="email"
                placeholder="Seu e-mail"
                id="userEmail"
                name="userEmail"
              />
              <FormErrorMessage>
                {errors.userEmail && "Insira um e-mail!"}
              </FormErrorMessage>
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
              <FormErrorMessage>
                {errors.userPassword && "Insira a senha!"}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.confirmPassword}>
              <FormLabel htmlFor="confirmPassword">Repita a Senha</FormLabel>
              <Input
                {...register("confirmPassword", { required: true })}
                type="password"
                placeholder="Repita a senha"
                id="confirmPassword"
                name="confirmPassword"
              />
              <FormErrorMessage>
                {errors.confirmPassword && "Insira a senha novamente!"}
              </FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              w="full"
              bg="green.400"
              mt="4"
              isLoading={isSubmitting}
            >
              Cadastrar
            </Button>
          </form>
          <Link
            as={RouterDomLink}
            to="/"
            borderBottom="2px"
            borderBottomColor="green.400"
            _hover={{ textDecoration: "none" }}
          >
            voltar
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default Register;
