import { Transit } from "@/context";
import { useFilter, useFetchProductList } from "@/scripts/hooks";
import { Box, Button, Flex, For, Text } from "@chakra-ui/react";
import { ProductCard } from "../ProductCard";
import { useProductListView } from "@/scripts/hooks/useProductListView/useProductListView";

export const ProductListView = (): JSX.Element => {
  const { state, refetch } = useFetchProductList();
  const { filteredProducts } = useFilter();

  const { handelOnClick } = useProductListView();

  switch (state.status) {
    case "idel":
    case "pending":
      console.log("Loading")
      return <Text>Loading...</Text>;

    case "success":
      console.log(filteredProducts);
      return (
        <Flex gap="4" wrap="wrap" justify="center">
          <For each={filteredProducts}>
            {(product) => (
              <Box key={product.id} p={5}>
                <Transit to={`/products/${product.id}`}>
                  <ProductCard product={product} onClick={handelOnClick} />
                </Transit>
              </Box>
            )}
          </For>

          {filteredProducts.length === 0 && <Text>Products not found</Text>}
        </Flex>
      );

    case "error":
      return (
        <Box>
          <Text>error!</Text>
          <Button onClick={refetch}>Refetch</Button>
        </Box>
      );

    default:
      return <Text>Not found...</Text>;
  }
};
