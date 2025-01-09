import { Container, Heading } from "@chakra-ui/react";
import { Transit } from "@/context";
import { useEffect } from "react";
import { getApiData } from "@/api";
import { URL } from "@/constants";
import { addProduct } from "@/store/productsListReducer/clices";
import { useDispatch } from "react-redux";

export const MainPage = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    getApiData(URL).then((response) => {
      if (response === undefined) return;
      dispatch(addProduct(response));
    });
  }, []);

  return (
    <Container>
      <Heading p={5}>Hello! This is the main page</Heading>
      <Transit to={"/products"}>Go to List products</Transit>
    </Container>
  );
};
