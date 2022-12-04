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
import { FirebaseError } from "firebase/app";
import { UserCredential } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link as RouterDomLink, useNavigate } from "react-router-dom";
import { db } from "../../../../database/firebase/config";
import useAuth from "../../hooks/useAuth";

interface IUserRegister {
  userName: string;
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
      await registerWithEmailAndPassword(data.userEmail, data.userPassword)
        .then((credential: UserCredential) => {
          const userID = credential.user.uid;
          const userEmail = credential.user.email;
          setDoc(doc(db, "users", `${userID}`), {
            email: `${userEmail}`,
          });
          showToast("Cadastro criado com sucesso.", "success");
        })
        .catch((err: FirebaseError) => {
          console.log(err.code);
          if (err.code == "auth/email-already-in-use") {
            showToast("E-mail já em uso.", "error");
          } else {
            showToast(
              "OPS! Ocorreu um erro inesperado. Tente mais tarde.",
              "error"
            );
          }
        });
    } catch (error) {
      showToast("OPS! Algo deu errado!", "error");
      return;
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
          <Center mb='4'>
            <Image src="topo_ifpi.png" alt="Logo_IFPI" />
          </Center>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.userName} mb='2'>
              <FormLabel htmlFor="userName">Seu nome</FormLabel>
              <Input
                {...register("userName", { required: true, minLength: 3, maxLength: 20 })}
                type="text"
                placeholder="Seu nome"
                id="userName"
                name="userName"
              />
              <FormErrorMessage>
                {errors.userName && "Insira um nome válido!"}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.userEmail}>
              <FormLabel htmlFor="userEmail">E-mail</FormLabel>
              <Input
                {...register("userEmail", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi })}
                type="email"
                placeholder="email@email.com"
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
                {...register("userPassword", { required: true, minLength: 7 })}
                type="password"
                placeholder="*******"
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
                {...register("confirmPassword", { required: true, minLength: 7 })}
                type="password"
                placeholder="*******"
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
  );
};

export default Register;
