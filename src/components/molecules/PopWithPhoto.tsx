import { VFC } from "react";
import { Popover, PopoverBody, PopoverTrigger } from "@chakra-ui/popover";
import { Avatar } from "@chakra-ui/avatar";
import { PopoverContent } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../app/hooks";
import {
  resetIsOpenLogin,
  resetIsOpenRegister,
  setIsOpenLogin,
  setIsOpenRegister,
} from "../../features/loginSlice";
import { PopoverBodyWithData } from "../organizms/header/PopoverBodyWithData";

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
  ];

  const userProf = username?.length
    ? "https://holosoku.com/wp-content/uploads/2021/06/gnvtjlKu_400x400.jpg"
    : "https://bit.ly/broken-link";
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button _focus={{ boxShadow: "none" }} variant="unstyled">
            <Avatar
              display="block"
              src={userProf}
              boxShadow="sm"
              _hover={{ boxShadow: "lg" }}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent _focus={{ boxShadow: "none" }} w="200px">
          <PopoverBodyWithData />
        </PopoverContent>
      </Popover>
    </>
  );
};
