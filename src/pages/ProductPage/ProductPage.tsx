import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { TypeProduct } from "./typeProduct";
import { Transit } from "@/context";
import { IProductPageProps } from "./interface";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";

export const ProductPage: React.FC<IProductPageProps> = ({
  id,
}): JSX.Element => {
  const history = useSelector((state: IRootState) => state.productsList);

  const product: TypeProduct | undefined = history.find(
    (product: TypeProduct) => {
      return product.id === id;
    }
  );

  if (product === undefined) {
    return (
      <Container>
        <Transit to={"/products"}>Back</Transit>

        <Text>Product not found</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Flex direction="column" gap="4" justify="center">
        <Box w={1}>
          <Transit to={"/products"}>Back</Transit>
        </Box>

        <Image
          src={product.image}
          alt={product.title}
          height={500}
          fit="contain"
        />
        <Heading>{product.title}</Heading>

        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {product.price}
        </Text>

        <Text>{product.description}</Text>
      </Flex>
    </Container>
  );
};
