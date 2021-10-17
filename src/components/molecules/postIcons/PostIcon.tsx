import { VFC } from "react";
import { Icon } from "@chakra-ui/icon";
import { RiSendPlaneFill } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectIsOpenPost, setIsOpenPost } from "../../../features/postSlice";

export const PostIcon: VFC = () => {
  const dispatch = useAppDispatch();
  const isOpenPost = useAppSelector(selectIsOpenPost);
  return (
    <>
      <Icon
        as={isOpenPost ? RiSendPlaneFill : FiSend}
        color="blue.400"
        _hover={{ color: "blue.500" }}
        cursor="pointer"
        fontSize="2xl"
        onClick={() => {
          dispatch(setIsOpenPost());
        }}
      />
    </>
  );
};
