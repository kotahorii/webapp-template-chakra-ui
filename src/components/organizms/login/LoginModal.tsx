import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { VFC } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  resetIsOpenLogin,
  selectIsLogin,
  setIsOpenRegister,
} from "../../../features/loginSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Stack, Text } from "@chakra-ui/layout";

export const LoginModal: VFC = () => {
  const dispatch = useAppDispatch();
  const isOpenLogin = useAppSelector(selectIsLogin);
  const navigate = useNavigate();

  type IFormInput = {
    username: string;
    password: string;
  };

  const schema = yup.object({
    username: yup.string().required().min(2),
    password: yup.string().required().min(4),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    localStorage.setItem("username", data.username);
    localStorage.setItem("password", data.password);
    dispatch(resetIsOpenLogin());
    navigate("/posts");
  };
  const changeToRegister = () => {
    dispatch(resetIsOpenLogin());
    dispatch(setIsOpenRegister());
  };
  return (
    <>
      <Modal isOpen={isOpenLogin} onClose={() => dispatch(resetIsOpenLogin())}>
        <ModalOverlay />
        <ModalContent px="8" pb="8">
          <ModalHeader textAlign="center">Login</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing="4">
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input variant='flushed' type="text" {...register("username")} />
                  <Text pt="2" color="pink.400">
                    {errors.username?.message}
                  </Text>
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input variant='flushed' type="password" {...register("password")} />
                  <Text pt="2" color="pink.400">
                    {errors.password?.message}
                  </Text>
                </FormControl>
                <Stack spacing="5">
                  <Text
                    color="blue.300"
                    cursor="pointer"
                    onClick={changeToRegister}
                  >
                    You don't have account?
                  </Text>
                  <Button
                    isLoading={isSubmitting}
                    type="submit"
                    bg="blue.400"
                    color="white"
                    _hover={{ bg: "blue.500" }}
                  >
                    Login
                  </Button>
                </Stack>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
