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
  Spacer,
  useToast,
  UseToastOptions,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link as RouterDomLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

interface IForgotPasswordForm {
  userEmail: string;
}

const ForgotPasswordForm = () => {
  const { resetPassword } = useAuth();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<IForgotPasswordForm>();

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

  const onSubmit: SubmitHandler<IForgotPasswordForm> = async (data) => {
    try {
      await resetPassword(data.userEmail);
      showToast(
        "Email enviado",
        "success",
        "Verifique sua caixa de entrada e/ou sua caixa de SPAM."
      );
      return true;
    } catch (error) {
      if (error) {
        showToast(
          "OPS! Algo deu errado!",
          "warning",
          "Verifique se o e-mail foi digitado corretamente."
        );
        return;
      }
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
        <Box w='40rem'>
          <Center mb="4">
            <Image src="topo_ifpi.png" alt="Logo_IFPI" />
          </Center>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.userEmail}>
              <FormLabel htmlFor="userEmail">E-mail</FormLabel>
              <Input
                {...register("userEmail", { required: true })}
                type="email"
                placeholder="email@email.com"
                id="userEmail"
                name="userEmail"
              />
              <FormErrorMessage>
                {errors.userEmail && errorMessage("Preencha com um e-mail!")}
              </FormErrorMessage>

              <Button
                type="submit"
                w="full"
                bg="green.400"
                mt="4"
                isLoading={isSubmitting}
              >
                Enviar email
              </Button>
            </FormControl>
          </form>
          <Spacer h="2" />
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

export default ForgotPasswordForm;

function errorMessage(message: string) {
  return `${message}`;
}
