import React from "react";
import { Button, Card, Image, Text } from "@chakra-ui/react";
import { IProductCardProps } from "./interface";
import { IconLike } from "@/icons/IconLike";

export const ProductCard: React.FC<IProductCardProps> = ({
  product,
  onClick,
}): JSX.Element => {
  return (
    <Card.Root
      id={`${product.id}`}
      width={320}
      height={500}
      key={product.id}
      onClick={onClick}
    >
      <Image
        src={product.image}
        alt={product.title}
        height={200}
        fit="contain"
      />

      <Card.Body gap="2">
        <Card.Title mb="2" lineClamp="2">
          {product.title}
        </Card.Title>
        <Card.Description lineClamp="2">{product.description}</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {product.price}
        </Text>
      </Card.Body>

      <Card.Footer justifyContent="flex-end">
        <Button id="buttonLike" variant="outline">
          <IconLike colorIcon={product.like ? "pink.700" : "white"} />
        </Button>

        <Button id="buttonDelete" variant="outline">
          Delete
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
