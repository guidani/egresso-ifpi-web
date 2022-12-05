import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  useToast,
  UseToastOptions,
  Link
} from "@chakra-ui/react";
import {
  collection,
  getDocsFromServer,
  query,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { db } from "../../../database/firebase/config";
import { ICurso, NivelCurso } from "../../../types";
import { BackButton } from "../../ui/BackButton";
import { addCursoToDatabase } from "../api/addCursoToDatabase";

const CadastroCurso = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICurso>();

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

  const submitForm = async (data: any) => {
    const colRef = collection(db, "CURSOS");
    const q = query(colRef, where("codcurso", "==", `${data?.codcurso}`));
    await getDocsFromServer(q)
      .then((resp) => {
        console.log(resp.size);
        if (resp.size !== 0) {
          showToast("Já existe um curso com esse código!", "info");
          return;
        } else {
          addCursoToDatabase(data);
          navigate(-1);
        }
      })
      .catch(() => {
        showToast("OPS! Ocorreu um erro inesperado!", "error");
      });
  };

  return (
    <Container minW="full">
      <BackButton/>
      <Center>
        <Heading fontSize="2xl">Novo curso</Heading>
      </Center>
      <Divider orientation="horizontal" m="2" />

      <form onSubmit={handleSubmit(submitForm)}>
        <FormControl isInvalid={errors.nome} mb="2">
          <FormLabel htmlFor="nomedocurso">Nome do curso*</FormLabel>
          <Input
            type="text"
            id="nomedocurso"
            placeholder="Nome do curso"
            {...register("nome", { required: true, minLength: 3 })}
          />
          <FormErrorMessage>
            {errors.nome && "Nome é obrigatório"}
          </FormErrorMessage>
        </FormControl>
        {/*  */}
        <FormControl isInvalid={errors.codcurso} mb="2">
          <FormLabel htmlFor="codcurso">Código do curso*</FormLabel>
          <Input
            type="text"
            id="codcurso"
            placeholder="Código do curso"
            {...register("codcurso", { required: true })}
          />
          <FormErrorMessage>
            {errors.codcurso && "Código do curso é obrigatório"}
          </FormErrorMessage>
        </FormControl>
        {/*  */}
        <FormControl isInvalid={errors.nivel} mb="2">
          <FormLabel htmlFor="niveldocurso">Nível do curso*</FormLabel>
          <Select
            variant="outline"
            id="niveldocurso"
            {...register("nivel", { required: true })}
          >
            <option value="" disabled>
              --ESCOLHA--
            </option>
            <option value={NivelCurso.bacharel}>{NivelCurso.bacharel}</option>
            <option value={NivelCurso.licenciatura}>
              {NivelCurso.licenciatura}
            </option>
            <option value={NivelCurso.medio_integrado}>
              {NivelCurso.medio_integrado}
            </option>
            <option value={NivelCurso.tecnico}>{NivelCurso.tecnico}</option>
            <option value={NivelCurso.tecnologo}>{NivelCurso.tecnologo}</option>
          </Select>
        </FormControl>
        {/*  */}
        <Flex gap="4">
          <Button colorScheme="green" type="submit">
            Cadastrar
          </Button>
          <Button colorScheme="red" type="reset" onClick={() => navigate(-1)}>
            Cancelar
          </Button>
        </Flex>
      </form>
    </Container>
  );
};

export default CadastroCurso;
