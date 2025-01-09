import { Box } from "@chakra-ui/react";
import { IForm } from "./interface";
import { useCreateProduct } from "@/scripts/hooks";
import { FormCreateNewProduct } from "@/components";

export const FormPages = (): JSX.Element => {
  const data: IForm = useCreateProduct();

  return (
    <Box bgColor="#09090B" padding="5" borderWidth="1px" maxW={420}>
      <FormCreateNewProduct data={data} />
    </Box>
  );
};
