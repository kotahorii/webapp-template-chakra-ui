import { Flex } from "@chakra-ui/layout";
import { PopoverBody } from "@chakra-ui/popover";
import { VFC } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../app/hooks";
import {
  resetIsOpenLogin,
  resetIsOpenRegister,
  setIsOpenLogin,
  setIsOpenRegister,
} from "../../../features/loginSlice";
import { PopupText } from "../../molecules/PopupText";

export const PopoverBodyWithData: VFC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const username = localStorage.username;

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
  ];

  const AFTER_LOGIN = [
    {
      text: "マップで検索",
      onClick: () => {
        navigate("/map");
      },
    },
    {
      text: "投稿一覧",
      onClick: () => {
        navigate("/posts");
      },
    },
    {
      text: "ユーザー一覧",
      onClick: () => {
        navigate("/posts");
      },
    },
    {
      text: "マイプロフィール",
      onClick: () => {
        navigate("/posts");
      },
    },
    {
      text: "ログアウト",
      onClick: () => {
        localStorage.removeItem("username");
        navigate("/");
      },
    },
  ];
  return (
    <>
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
    </>
  );
};
