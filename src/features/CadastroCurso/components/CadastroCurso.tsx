import {
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ICurso, NivelCurso } from "../../../types";
import { addCursoToDatabase } from "../api/addCursoToDatabase";

const CadastroCurso = () => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICurso>();

  const submitForm = async (data: any) => {
    try {
      setLoading(true);
      await addCursoToDatabase(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container minW="full">
      <Center>
        <Heading fontSize="2xl">Novo curso</Heading>
      </Center>
      <Divider orientation="horizontal" m="2" />

      <div className="novo-curso_form">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="form-input-section">
            <div className="input-group">
              <label htmlFor="nomedocurso">Nome do curso*</label>
              <input
                type="text"
                id="nomedocurso"
                placeholder="Nome do curso"
                {...register("nome", { required: true, minLength: 3 })}
              />
              {errors.nome && "Nome é obrigatório"}
            </div>
            {/*  */}
            <div className="input-group">
              <label htmlFor="niveldocurso">Nível do curso*</label>
              <select
                id="niveldocurso"
                {...register("nivel", { required: true })}
              >
                <option value="" disabled>
                  --ESCOLHA--
                </option>
                <option value={NivelCurso.bacharel}>
                  {NivelCurso.bacharel}
                </option>
                <option value={NivelCurso.licenciatura}>
                  {NivelCurso.licenciatura}
                </option>
                <option value={NivelCurso.medio_integrado}>
                  {NivelCurso.medio_integrado}
                </option>
                <option value={NivelCurso.tecnico}>{NivelCurso.tecnico}</option>
                <option value={NivelCurso.tecnologo}>
                  {NivelCurso.tecnologo}
                </option>
              </select>
            </div>
          </div>
          {/*  */}
          <Flex gap="4">
            <Button colorScheme="green" type="submit">
              Cadastrar
            </Button>
            <Link to="/">
              <Button colorScheme="red" type="reset">
                Cancelar
              </Button>
            </Link>
          </Flex>
        </form>
      </div>
    </Container>
  );
};

export default CadastroCurso;
