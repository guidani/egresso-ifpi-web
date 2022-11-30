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
} from "@chakra-ui/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link as RouterDomLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import styles from "./styles.module.css";

interface IForgotPasswordForm {
  userEmail: string;
}

const ForgotPasswordForm = () => {
  const { resetPassword } = useAuth();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<IForgotPasswordForm>();

  const onSubmit: SubmitHandler<IForgotPasswordForm> = async (data) => {
    try {
      setLoading(true);
      await resetPassword(data.userEmail);
      return true;
    } catch (error) {
      if (error) {
        console.log("OPS! Algo deu errado.");
        return;
      }
    } finally {
      setLoading(false);
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
          <Center mb='4'>
            <Image src="topo_ifpi.png" alt="Logo_IFPI"/>
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
