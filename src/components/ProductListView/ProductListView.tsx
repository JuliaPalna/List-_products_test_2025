import { Transit } from "@/context";
import { useFilter } from "@/scripts/hooks";
import { Box, Flex, For, Text } from "@chakra-ui/react";
import { ProductCard } from "../ProductCard";
import { useProductListView } from "@/scripts/hooks/useProductListView/useProductListView";
import { REQUEST_STATE } from "@/api";
import { TypeRootState } from "@/store";
import { useSelector } from "react-redux";

export const ProductListView = (): JSX.Element => {
  const { filteredProducts } = useFilter();
  const state = useSelector((state: TypeRootState) => state.stateFetching);
  const { handelOnClick } = useProductListView();

  switch (state.status) {
    case REQUEST_STATE.idel:
    case REQUEST_STATE.pending:
      return <Text>Loading...</Text>;

    case REQUEST_STATE.success:
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

    case REQUEST_STATE.error:
      return <Text>error! Please try to log in again</Text>;

    default:
      return <Text>Not found...</Text>;
  }
};
