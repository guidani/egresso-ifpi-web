import { Button, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaSave } from "react-icons/fa";
import { StatusMatriculaAluno } from "../../../types";

const MatriculaForm = ({ update, index, value, control }) => {
  const toast = useToast();
  const { register, handleSubmit } = useForm({
    defaultValues: value,
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

  return (
    <div>
      <div className="input-group">
        <label htmlFor="matriculaaluno">Número da matrícula</label>
        <input
          type="text"
          {...register("numeroMatricula")}
          id="matriculaaluno"
          placeholder="número da matrícula"
        />
      </div>
      <div className="input-group">
        <label htmlFor="datainiciocursoaluno">Data de início:</label>
        <input
          type="date"
          id="datainiciocursoaluno"
          {...register("dataDeInicioCurso")}
        />
      </div>
      <div className="input-group">
        <label htmlFor="dataencerramentocursoaluno">
          Data de encerramento:
        </label>
        <input
          type="date"
          id="dataencerramentocursoaluno"
          {...register("dataDeEncerramentoCurso")}
        />
      </div>

      <div className="input-group">
        <label htmlFor="alunostatusmatricula">Status da matrícula:</label>
        <select
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
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="cursoaluno">Curso:</label>
        <input
          type="text"
          placeholder="Curso do aluno"
          id="cursoaluno"
          {...register("curso")}
        />
      </div>
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
    </div>
  );
};

export default MatriculaForm;
