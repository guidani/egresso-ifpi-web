import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  useToast,
  UseToastOptions,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaSave } from "react-icons/fa";
import { StatusMatriculaAluno } from "../../../types";
import { useGetCourses } from "../hooks/useGetCourses";

const MatriculaForm = ({ update, index, value, control }: any) => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: value,
  });
  const { courses } = useGetCourses();
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

  return (
    <>
      <FormControl isInvalid={Boolean(errors.curso)}>
        <FormLabel htmlFor="cursoaluno">Curso:</FormLabel>
        <Select {...register("curso", { required: true })} defaultValue={value?.curso}>
          <option value="" disabled>
            --ESCOLHA--
          </option>
          {courses.map((course, index) => {
            return (
              <option key={index} value={course.nome}>
                {course.nome}
              </option>
            );
          })}
        </Select>
        <FormErrorMessage>
          {errors.curso && <p>Este campo é obrigatório.</p>}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.numeroMatricula)}>
        <FormLabel htmlFor="matriculaaluno">Número da matrícula</FormLabel>
        <Input
          type="text"
          {...register("numeroMatricula", { required: true })}
          id="matriculaaluno"
          placeholder="número da matrícula"
        />
        <FormErrorMessage>
          {errors.numeroMatricula && <p>Esse campo é obrigatório.</p>}
        </FormErrorMessage>
      </FormControl>
      <Stack direction={{ base: "column", md: "row" }}>
        <FormControl isInvalid={Boolean(errors.dataDeInicioCurso)}>
          <FormLabel htmlFor="datainiciocursoaluno">Data de início:</FormLabel>
          <Input
            type="date"
            id="datainiciocursoaluno"
            {...register("dataDeInicioCurso", { required: true })}
          />
          <FormErrorMessage>
            {errors.dataDeInicioCurso && <p>Este campo é obrigatório.</p>}
          </FormErrorMessage>
        </FormControl>
        {/*  */}
        <FormControl isInvalid={Boolean(errors.dataDeEncerramentoCurso)}>
          <FormLabel htmlFor="dataencerramentocursoaluno">
            Data de encerramento:
          </FormLabel>
          <Input
            type="date"
            id="dataencerramentocursoaluno"
            {...register("dataDeEncerramentoCurso", { required: true })}
          />
          <FormErrorMessage>
            {errors.dataDeEncerramentoCurso && <p>Este campo é obrigatório.</p>}
          </FormErrorMessage>
        </FormControl>
      </Stack>

      <FormControl isInvalid={Boolean(errors.statusDaMatricula)}>
        <FormLabel htmlFor="alunostatusmatricula">
          Status da matrícula:
        </FormLabel>
        <Select
          id="alunostatusmatricula"
          defaultValue=""
          {...register("statusDaMatricula")}
        >
          <option value="" disabled>
            --ESCOLHA--
          </option>
          <option value={StatusMatriculaAluno.emAndamento}>
            {StatusMatriculaAluno.emAndamento}
          </option>
          <option value={StatusMatriculaAluno.concluido}>
            {StatusMatriculaAluno.concluido}
          </option>
          <option value={StatusMatriculaAluno.desistente}>
            {StatusMatriculaAluno.desistente}
          </option>
          <option value={StatusMatriculaAluno.cancelado}>
            {StatusMatriculaAluno.cancelado}
          </option>
        </Select>
      </FormControl>

      <Button
        rightIcon={<FaSave />}
        colorScheme="green"
        onClick={handleSubmit((data) => {
          update(index, data);
          showToast("As alterações foram salvas.", "success");
        })}
      >
        Salvar
      </Button>
    </>
  );
};

export default MatriculaForm;
