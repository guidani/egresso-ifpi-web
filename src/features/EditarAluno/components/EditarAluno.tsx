import {
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  useToast,
  UseToastOptions,
  Box,
  Link
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
      <BackButton/>
      <Center>
        <Heading fontSize="2xl">Editar aluno</Heading>
      </Center>
      <Divider orientation="horizontal" m="2" />
      <div className="novo-aluno_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-input-section">
            <div className="input-group">
              <label htmlFor="nomealuno">Nome:</label>
              <input
                type="text"
                placeholder="Nome do aluno"
                id="nomealuno"
                {...register("nome", { required: true })}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                placeholder="email@email.com.br"
                id="emailaluno"
                {...register("email", { required: true })}
              />
            </div>
            <div className="input-group">
              <label htmlFor="telefonealuno">Telefone:</label>
              <input
                type="string"
                id="telefonealuno"
                placeholder="86912345678"
                {...register("telefone")}
              />
            </div>
            <div className="input-group">
              <label htmlFor="datanascimentoaluno">Data de nascimento:</label>
              <input
                type="date"
                id="datanascimentoaluno"
                {...register("dataDeNascimento")}
              />
            </div>
            <div className="input-group">
              <label htmlFor="cpfaluno">CPF:</label>
              <input
                type="text"
                placeholder="123.456.789-00"
                maxLength={14}
                id="cpfaluno"
                {...register("cpf")}
              />
            </div>
          </div>
          {/* //TODO deve ser possível adicionar várias matrículas */}
          <Divider m="4" />
          <div className="form-input-section">
            <Heading as="h2" size="md">
              Matrículas
            </Heading>
            {fields.map((field, index) => (
              <fieldset key={field.id}>
                <MatriculaForm
                  control={control}
                  index={index}
                  update={update}
                  value={field}
                />
                <Button
                  rightIcon={<FaTrashAlt />}
                  mt="2"
                  colorScheme="red"
                  onClick={() => remove(index)}
                >
                  Remover
                </Button>
              </fieldset>
            ))}
            <br />
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
          </div>
          {/* // TODO end */}
          <Divider m="4" />
          <div className="form-input-section">
            <h2>Ocupação</h2>
            <div className="input-group">
              <label htmlFor="">Tipo de ocupação:</label>

              <select {...register("tipoDeOcupacao")}>
                <option value="" disabled>
                  --ESCOLHA--
                </option>
                <option value={TipoOcupacao.efetivo}>efetivo</option>
                <option value={TipoOcupacao.estagio}>estagio</option>
                <option value={TipoOcupacao.iniciacaoCientifica}>
                  iniciacaoCientifica
                </option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="localdetrabalhoaluno">Local:</label>
              <input
                type="text"
                placeholder="Nome do local de trabalho"
                id="localdetrabalhoaluno"
                {...register("localDeTrabalho")}
              />
            </div>
            <div className="input-group">
              <label htmlFor="datainiciotrabalhoaluno">Data de início:</label>
              <input
                type="date"
                id="datainiciotrabalhoaluno"
                {...register("dataDeInicioTrabalho")}
              />
            </div>
            <div className="input-group">
              <label htmlFor="dataencerramentotrabalhoaluno">
                Data de encerramento:
              </label>
              <input
                type="date"
                id="dataencerramentotrabalhoaluno"
                {...register("dataDeEncerramentoTrabalho")}
              />
            </div>
            <div className="input-group">
              Trabalho Remunerado:
              <label htmlFor="alunoocupacaoremuneradosim">Sim</label>
              <input
                {...register("trabalhoRemunerado")}
                type="radio"
                value="Sim"
              />
              <label htmlFor="alunoocupacaoremuneradonao">Não</label>
              <input
                {...register("trabalhoRemunerado")}
                type="radio"
                value="Não"
              />
            </div>
          </div>
          {/* ### */}
          <Flex gap="2" mb="4">
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
      </div>
    </Container>
  );
};

export default EditarAluno;
