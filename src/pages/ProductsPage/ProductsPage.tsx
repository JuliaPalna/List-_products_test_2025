import { BaseSyntheticEvent } from "react";
import { Stack, For, Flex, Container, Heading } from "@chakra-ui/react";
import { FilterCards, MessegeInfo, ProductCard } from "@/components";
import { Transit } from "@/context";
import { useFilter } from "@/scripts/hooks";
import { isHTMLButtonElement } from "@/scripts/utils";
import { likeProduct, removeProduct } from "@/store/productsListReducer/clices";
import { useDispatch } from "react-redux";

export const ProductsPage = (): JSX.Element => {
  const dispatch = useDispatch();

  const { serchProduct, filteredProducts, handleSearchProduct } = useFilter();

  const handelOnClick = (event: BaseSyntheticEvent): void => {
    event.preventDefault();
    const buttonCard: HTMLElement | null = event.target.closest("button");
    const productCardId: number = +event.currentTarget.id;

    const isButton = isHTMLButtonElement(buttonCard);

    if (isButton) {
      event.stopPropagation();

      if (buttonCard.id === "buttonLike") {
        dispatch(likeProduct(productCardId));
      }

      if (buttonCard.id === "buttonDelete") {
        dispatch(removeProduct(productCardId));
      }

      return;
    }
  };

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
        <FilterCards value={serchProduct} onChange={handleSearchProduct} />
      </Flex>

      <Flex gap="4" wrap="wrap" justify="center">
        <For each={filteredProducts}>
          {(product) => (
            <Transit to={`/products/${product.id}`}>
              <ProductCard product={product} onClick={handelOnClick} />
            </Transit>
          )}
        </For>

        {filteredProducts.length === 0 && (
          <MessegeInfo messege="Products not found" />
        )}
      </Flex>
    </Container>
  );
};
