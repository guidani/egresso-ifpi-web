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
  Radio,
  RadioGroup,
  Select,
  Stack,
  useToast,
  UseToastOptions,
} from "@chakra-ui/react";
import { useFieldArray, useForm } from "react-hook-form";
import {
  FaPlusSquare,
  FaSave,
  FaTimesCircle,
  FaTrashAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { TipoOcupacao } from "../../../types";
import { BackButton } from "../../ui/BackButton";
import { addAlunoToDatabase } from "../api/addAlunoToDatabase";
import { IAluno } from "../types/IAluno";
import MatriculaForm from "./MatriculaForm";

const fieldArrayName = "matriculas";

const CadastroAluno = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
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
    try {
      await addAlunoToDatabase(data);
      showToast("Dados adicionados com sucesso", "success");
    } catch (error) {
      console.log(error);
      if (error) {
        showToast("OPS! Ocorreu um erro inesperado!", "error");
      }
    }
  };

  return (
    <Container minW="full">
      <BackButton />
      <Center>
        <Heading fontSize="2xl">Novo cadastro</Heading>
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
        {/*  */}
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
            Adicionar nova matricula
          </Button>
        </Center>
        <Divider m="4" />
        <Heading as="h2" size="md">
          Ocupação
        </Heading>

        {/*  */}
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
        {/*  */}
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
            <RadioGroup >
              <Stack spacing="5" direction="row" >
                <Radio
                  {...register("trabalhoRemunerado")}
                  type="radio"
                  value="Sim"
                >
                  Sim
                </Radio>
                <Radio
                  {...register("trabalhoRemunerado")}
                  type="radio"
                  value="Não"
                >
                  Não
                </Radio>
              </Stack>
            </RadioGroup>
            <FormErrorMessage>
              {errors.trabalhoRemunerado && <p>Este campo é obrigatório.</p>}
            </FormErrorMessage>
          </FormControl>
        </Stack>
        {/* ### */}
        <Flex gap="2" my="4">
          <Button colorScheme="green" type="submit" rightIcon={<FaSave />}>
            Cadastrar
          </Button>

          <Button
            colorScheme="red"
            type="reset"
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

export default CadastroAluno;
