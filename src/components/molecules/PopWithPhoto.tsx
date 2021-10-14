import { VFC } from "react";
import { Popover, PopoverBody, PopoverTrigger } from "@chakra-ui/popover";
import { Avatar } from "@chakra-ui/avatar";
import { PopoverContent } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/layout";
import { PopupText } from "./PopupText";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../app/hooks";
import {
  resetIsOpenLogin,
  resetIsOpenRegister,
  setIsOpenLogin,
  setIsOpenRegister,
} from "../../features/loginSlice";

export const PopWithPhoto: VFC = () => {
  const username: string = localStorage.username;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const BEFORE_LOGIN = [
    {
      text: "登録",
      onClick: () => {
        dispatch(resetIsOpenLogin());
        dispatch(setIsOpenRegister());
      },
    },
    {
      text: "ログイン",
      onClick: () => {
        dispatch(resetIsOpenRegister());
        dispatch(setIsOpenLogin());
      },
    },
    { text: "ヘルプ", onClick: () => {} },
  ];

  const AFTER_LOGIN = [
    {
      text: "ログアウト",
      onClick: () => {
        localStorage.removeItem("username");
        navigate("/");
      },
    },
    { text: "ヘルプ", onClick: () => {} },
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
                      onClick={data.onClick}
                    />
                  ))
                : BEFORE_LOGIN.map((data) => (
                    <PopupText
                      key={data.text}
                      text={data.text}
                      onClick={data.onClick}
                    />
                  ))}
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};
