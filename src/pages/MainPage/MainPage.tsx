import { Button, Container, Heading } from "@chakra-ui/react";
import { Transit } from "@/context";

export const MainPage = (): JSX.Element => {

  const handelonClick = () => {

  }

  return (
    <Container>
      <Heading p={5}>Hello! This is the main page</Heading>
      <Button bgColor="#111" onClick={handelonClick}>
        <Transit to={"/products"}>Go to List products</Transit>
      </Button>
    </Container>
  );
};
