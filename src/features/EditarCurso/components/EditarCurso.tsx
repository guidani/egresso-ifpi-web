import {
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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSave, FaTimesCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ICurso, NivelCurso } from "../../../types";
import { BackButton } from "../../ui/BackButton";
import { ChakraSpinner } from "../../ui/ChakraSpinner";
import { getCourseFromDatabase } from "../api/getCourseFromDatabase";
import { updateCourse } from "../api/updateCourse";

export const EditarCurso = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICurso>();
  const [loading, setLoading] = useState(false);

  // TODO: atualizar dados no banco
  const submitForm = async (data: any) => {
    try {
      setLoading(true);
      // Atualizar curso no banco de dados
      await updateCourse(courseId!, data);
      navigate(-1);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourseFromDatabase(courseId!)
      .then((resp) => {
        setLoading(true);
        reset({
          nome: resp?.nome,
          nivel: resp?.nivel,
          codcurso: resp?.codcurso,
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container minW="full">
      <BackButton />
      {loading && <ChakraSpinner />}
      <Center>
        <Heading fontSize="2xl">Dados do curso</Heading>
      </Center>
      <Divider orientation="horizontal" m="2" />
      <form onSubmit={handleSubmit(submitForm)}>
        <FormControl isInvalid={Boolean(errors.nome)} mb="2">
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
        <FormControl isInvalid={Boolean(errors.codcurso)} mb="2">
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
        <FormControl className="input-group">
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
        <Flex gap={2}>
          <Button colorScheme="green" rightIcon={<FaSave />} type="submit">
            Atualizar
          </Button>
          <Button
            colorScheme="red"
            rightIcon={<FaTimesCircle />}
            type="reset"
            onClick={() => navigate(-1)}
          >
            Cancelar
          </Button>
        </Flex>
      </form>
    </Container>
  );
};
