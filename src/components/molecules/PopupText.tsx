import { VFC } from "react";
import { Text } from "@chakra-ui/layout";

type Props = {
  text: string;
  onClick: (() => void) | undefined;
};

export const PopupText: VFC<Props> = ({ text, onClick }) => {
  return (
    <>
      <Text
        cursor="pointer"
        px="3"
        py="5"
        width="100%"
        _hover={{ bg: "gray.100" }}
        onClick={onClick}
      >
        {text}
      </Text>
    </>
  );
};
