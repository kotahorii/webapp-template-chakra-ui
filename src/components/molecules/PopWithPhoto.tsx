import { VFC } from "react";
import { Popover, PopoverBody, PopoverTrigger } from "@chakra-ui/popover";
import { Avatar } from "@chakra-ui/avatar";
import { PopoverContent } from "@chakra-ui/react";
import { Flex, Stack, StackDivider, Text } from "@chakra-ui/layout";
import { PopupText } from "./PopupText";
import { useNavigate } from "react-router";

export const PopWithPhoto: VFC = () => {
  const username: string = localStorage.username;
  const navigate = useNavigate();
  const BEFORE_LOGIN = [
    { text: "登録", onclick: () => {} },
    { text: "ログイン", onClick: () => {} },
    { text: "ヘルプ", onClick: () => {} },
  ];

  const AFTER_LOGIN = [
    {
      text: "ログアウト",
      onclick: () => {
        localStorage.removeItem("username");
        navigate("/");
      },
    },
    { text: "ヘルプ", onclick: () => {} },
  ];

  const userProf = username?.length
    ? "https://holosoku.com/wp-content/uploads/2021/06/gnvtjlKu_400x400.jpg"
    : "https://bit.ly/broken-link";
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Avatar cursor="pointer" src={userProf} />
        </PopoverTrigger>
        <PopoverContent _focus={{ boxShadow: "none" }} w="200px" boxShadow="lg">
          <PopoverBody>
            <Flex direction="column" spacing="5" align="flex-start">
              {username?.length
                ? AFTER_LOGIN.map((data) => (
                    <PopupText
                      key={data.text}
                      text={data.text}
                      onClick={data.onclick}
                    />
                  ))
                : BEFORE_LOGIN.map((data) => (
                    <PopupText
                      key={data.text}
                      text={data.text}
                      onClick={data.onclick}
                    />
                  ))}
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};
