import "./App.css";
import { Container, Flex } from "@chakra-ui/react";
import { PagesProvider, RenderPage } from "./context/PagesProvider";

function App(): JSX.Element {
  return (
    <PagesProvider>
      <Container>
        <Flex justify="center">
          <RenderPage />
        </Flex>
      </Container>
    </PagesProvider>
  );
}

export default App;
