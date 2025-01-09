import { Box, Text } from "@chakra-ui/react";
import { IMessegeInfo } from "./interface";

export const MessegeInfo: React.FC<IMessegeInfo> = ({
  messege,
}): JSX.Element => {
  return (
    <Box p={10}>
      <Text>{messege}</Text>
    </Box>
  );
};
