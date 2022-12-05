import { Box, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Box mb="4">
      <Link
        borderBottom="2px"
        borderBottomColor="green.400"
        _hover={{ textDecoration: "none" }}
        onClick={() => navigate(-1)}
      >
        voltar
      </Link>
    </Box>
  );
};
