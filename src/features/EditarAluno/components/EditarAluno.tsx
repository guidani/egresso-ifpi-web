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
  Stack,
  useToast,
  UseToastOptions,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import {
  FaPlusSquare,
  FaSave,
  FaTimesCircle,
  FaTrashAlt,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { TipoOcupacao } from "../../../types";
import { BackButton } from "../../ui/BackButton";
import { getStudentFromDatabase } from "../api/getStudentFromDatabase";
import { updateStudent } from "../api/updateStudent";
import { IAluno } from "../types/IAluno";
import MatriculaForm from "./MatriculaForm";

const fieldArrayName = "matriculas";

const EditarAluno = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { studentId } = useParams();
  const [loading, setLoading] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, defaultValues },
  } = useForm<IAluno>({
    defaultValues: {
      matriculas: [
        {
          curso: "",
          dataDeEncerramentoCurso: "",
          dataDeInicioCurso: "",
          numeroMatricula: "",
          statusDaMatricula: "",
        },
      ],
    },
  });
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: fieldArrayName,
  });

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

  const onSubmit = async (data: any) => {
    // Enviar dados do formulário para o banco de dados
    try {
      setLoading(true);
      await updateStudent(studentId!, data);
      showToast("As alterações foram salvas.", "success");
    } catch (error) {
      if (error) {
        showToast("OPS! Algo deu errado!", "error");
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStudentFromDatabase(studentId!).then((resp) => {
      reset({
        cpf: resp?.cpf,
        dataDeEncerramentoTrabalho: resp?.dataDeEncerramentoTrabalho,
        dataDeInicioTrabalho: resp?.dataDeInicioTrabalho,
        dataDeNascimento: resp?.dataDeNascimento,
        email: resp?.email,
        localDeTrabalho: resp?.localDeTrabalho,
        matriculas: resp?.matriculas,
        nome: resp?.nome,
        telefone: resp?.telefone,
        tipoDeOcupacao: resp?.tipoDeOcupacao,
        trabalhoRemunerado: resp?.trabalhoRemunerado,
      });
    });
  }, []);

  return (
    <Container minW="full">
      <BackButton />
      <Center>
        <Heading fontSize="2xl">Editar aluno</Heading>
      </Center>
      <Divider orientation="horizontal" m="2" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={Boolean(errors.nome)}>
          <FormLabel htmlFor="nomealuno">Nome:</FormLabel>
          <Input
            type="text"
            placeholder="Seu nome"
            id="nomealuno"
            {...register("nome", { required: true })}
          />
          <FormErrorMessage>
            {errors.nome && <p>Este campo é obrigatório.</p>}
          </FormErrorMessage>
        </FormControl>
        {/*  */}
        <Stack direction={{ base: "column", md: "row" }}>
          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel htmlFor="email">E-mail:</FormLabel>
            <Input
              type="email"
              placeholder="email@email.com.br"
              id="email"
              {...register("email", { required: true })}
            />
            <FormErrorMessage>
              {errors.email && <p>Este campo é obrigatório.</p>}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.telefone)}>
            <FormLabel htmlFor="telefonealuno">Telefone:</FormLabel>
            <Input
              type="text"
              id="telefonealuno"
              placeholder="86912345678"
              {...register("telefone")}
            />
            <FormErrorMessage>
              {errors.telefone && <p>Este campo é obrigatório.</p>}
            </FormErrorMessage>
          </FormControl>
        </Stack>
        <Stack direction={{ base: "column", md: "row" }}>
          <FormControl isInvalid={Boolean(errors.dataDeNascimento)}>
            <FormLabel htmlFor="datanascimentoaluno">
              Data de nascimento:
            </FormLabel>
            <Input
              type="date"
              id="datanascimentoaluno"
              {...register("dataDeNascimento", { required: true })}
            />
            <FormErrorMessage>
              {errors.dataDeNascimento && <p>Este campo é obrigatório.</p>}
            </FormErrorMessage>
          </FormControl>
          {/*  */}
          <FormControl isInvalid={Boolean(errors.cpf)}>
            <FormLabel htmlFor="cpfaluno">CPF:</FormLabel>
            <Input
              type="text"
              placeholder="123.456.789-00"
              maxLength={14}
              id="cpfaluno"
              {...register("cpf")}
            />
            <FormErrorMessage>
              {errors.cpf && <p>Este campo é obrigatório.</p>}
            </FormErrorMessage>
          </FormControl>
        </Stack>

        {/* //TODO deve ser possível adicionar várias matrículas */}
        <Divider m="4" />

        <Heading as="h2" size="md">
          Matrículas
        </Heading>
        {fields.map((field, index) => (
          <Box key={field.id}>
            <MatriculaForm
              control={control}
              index={index}
              update={update}
              value={field}
            />
            <Button
              rightIcon={<FaTrashAlt />}
              ml={2}
              mt={2}
              colorScheme="red"
              onClick={() => remove(index)}
            >
              Remover
            </Button>
          </Box>
        ))}
        <Center>
          <Button
            rightIcon={<FaPlusSquare />}
            mt="2"
            colorScheme="green"
            onClick={() => {
              append({
                curso: "",
                numeroMatricula: "",
                statusDaMatricula: "",
                dataDeInicioCurso: "",
                dataDeEncerramentoCurso: "",
              });
            }}
          >
            Nova matrícula
          </Button>
        </Center>
        {/* // TODO end */}
        <Divider m="4" />

        <Heading as="h2" size="md">
          Ocupação
        </Heading>
        <FormControl isInvalid={Boolean(errors.localDeTrabalho)}>
          <FormLabel htmlFor="localdetrabalhoaluno">Local:</FormLabel>
          <Input
            type="text"
            placeholder="Nome do local de trabalho"
            id="localdetrabalhoaluno"
            {...register("localDeTrabalho", { required: true })}
          />
          <FormErrorMessage>
            {errors.localDeTrabalho && <p>Este campo é obrigatório.</p>}
          </FormErrorMessage>
        </FormControl>
        {/*  */}
        <Stack direction={{ base: "column", md: "row" }}>
          <FormControl isInvalid={Boolean(errors.dataDeInicioTrabalho)}>
            <FormLabel htmlFor="datainiciotrabalhoaluno">
              Data de início:
            </FormLabel>
            <Input
              type="date"
              id="datainiciotrabalhoaluno"
              {...register("dataDeInicioTrabalho", { required: true })}
            />
            <FormErrorMessage>
              {errors.dataDeInicioTrabalho && <p>Este campo é obrigatório.</p>}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.dataDeEncerramentoTrabalho)}>
            <FormLabel htmlFor="dataencerramentotrabalhoaluno">
              Data de encerramento:
            </FormLabel>
            <Input
              type="date"
              id="dataencerramentotrabalhoaluno"
              {...register("dataDeEncerramentoTrabalho", { required: true })}
            />
            <FormErrorMessage>
              {errors.dataDeEncerramentoTrabalho && (
                <p>Este campo é obrigatório.</p>
              )}
            </FormErrorMessage>
          </FormControl>
        </Stack>
        <Stack direction={{ base: "column", md: "row" }}>
          <FormControl isInvalid={Boolean(errors.tipoDeOcupacao)}>
            <FormLabel htmlFor="">Tipo de ocupação:</FormLabel>
            <Select {...register("tipoDeOcupacao", { required: true })}>
              <option value="" disabled>
                --ESCOLHA--
              </option>
              <option value={TipoOcupacao.efetivo}>efetivo</option>
              <option value={TipoOcupacao.estagio}>estagio</option>
              <option value={TipoOcupacao.iniciacaoCientifica}>
                iniciacaoCientifica
              </option>
            </Select>
            <FormErrorMessage>
              {errors.tipoDeOcupacao && <p>Este campo é obrigatório.</p>}
            </FormErrorMessage>
          </FormControl>
          {/*  */}
          <FormControl my={2} isInvalid={Boolean(errors.trabalhoRemunerado)}>
            Trabalho Remunerado:
            <Stack direction="row">
              <FormLabel htmlFor="alunoocupacaoremuneradosim">Sim</FormLabel>
              <input
                {...register("trabalhoRemunerado")}
                id="alunoocupacaoremuneradosim"
                type="radio"
                value="Sim"
              />
            </Stack>
            <Stack direction="row">
              <FormLabel htmlFor="alunoocupacaoremuneradonao">Não</FormLabel>
              <input
                {...register("trabalhoRemunerado")}
                id="alunoocupacaoremuneradonao"
                type="radio"
                value="Não"
              />
            </Stack>
            <FormErrorMessage>
              {errors.trabalhoRemunerado && <p>Este campo é obrigatório.</p>}
            </FormErrorMessage>
          </FormControl>
        </Stack>

        {/* ### */}
        <Flex gap="2" my="4">
          <Button colorScheme="green" type="submit" rightIcon={<FaSave />}>
            Salvar
          </Button>

          <Button
            colorScheme="red"
            rightIcon={<FaTimesCircle />}
            onClick={() => navigate(-1)}
          >
            Cancelar
          </Button>
        </Flex>
      </form>
    </Container>
  );
};

export default EditarAluno;
