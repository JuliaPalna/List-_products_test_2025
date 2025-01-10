import { Stack, Flex, Container, Heading } from "@chakra-ui/react";
import { FilterCardList, ProductListView } from "@/components";
import { Transit } from "@/context";

export const ProductListPage = (): JSX.Element => {

  return (
    <Container>
      <Stack align="flex-start">
        <Transit to={"/"}>Back to main</Transit>
        <Transit to={"/form"}>Create new Product</Transit>
      </Stack>

      <Heading p={10} fontWeight="bold" size="2xl">
        List products
      </Heading>

      <Flex
        bgColor="#111"
        padding={5}
        borderWidth="1px"
        justify="center"
        borderColor="white"
      >
        <FilterCardList />
      </Flex>

      <ProductListView />

    </Container>
  );
};
