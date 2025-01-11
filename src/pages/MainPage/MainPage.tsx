import { Button, Container, Heading } from "@chakra-ui/react";
import { Transit } from "@/context";
import { useDispatch } from "react-redux";
import { addProduct } from "@/store/productsListReducer/clices";
import { fetchApiData, REQUEST_STATE } from "@/api";
import { URL } from "@/constants";
import { TypeApiDispatch } from "@/store";
import { toggleStateFetching } from "@/store/stateFetching/clices";

export const MainPage = (): JSX.Element => {
  const dispatch = useDispatch<TypeApiDispatch>();

  const handelClick = async () => {
    await fetchApiData(URL)
      .then((data) => {
        dispatch(toggleStateFetching({ status: REQUEST_STATE.success, data }));
        dispatch(addProduct(data));
      })
      .catch((error) => {
        dispatch(toggleStateFetching({ status: REQUEST_STATE.error, error }));
      });
  };

  return (
    <Container>
      <Heading p={5}>Hello! This is the main page</Heading>
      <Button bgColor="#111" onClick={handelClick}>
        <Transit to={"/products"}>Go to List products</Transit>
      </Button>
    </Container>
  );
};
