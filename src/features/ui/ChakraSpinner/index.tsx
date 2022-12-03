import { Center, Spinner } from "@chakra-ui/react";

export const ChakraSpinner = () => {
  return (
    <Center>
      <Spinner
        size="xl"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.400"
      />
    </Center>
  );
};
