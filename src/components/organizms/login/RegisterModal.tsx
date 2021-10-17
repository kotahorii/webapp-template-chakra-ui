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
  resetIsOpenRegister,
  selectIsRegister,
  setIsOpenLogin,
} from "../../../features/loginSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Stack, Text } from "@chakra-ui/layout";

export const RegisterModal: VFC = () => {
  const dispatch = useAppDispatch();
  const isOpenRegister = useAppSelector(selectIsRegister);
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
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    localStorage.setItem("username", data.username);
    localStorage.setItem("password", data.password);
    setValue("username", "");
    setValue("password", "");
    dispatch(resetIsOpenRegister());
    navigate("/posts");
  };

  const changeToLogin = () => {
    dispatch(resetIsOpenRegister());
    dispatch(setIsOpenLogin());
  };
  return (
    <>
      <Modal
        isOpen={isOpenRegister}
        onClose={() => dispatch(resetIsOpenRegister())}
      >
        <ModalOverlay />
        <ModalContent px="8" pb="8" bg="gray.50">
          <ModalHeader textAlign="center">Register</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing="4">
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input
                    variant="flushed"
                    type="text"
                    {...register("username")}
                  />
                  <Text pt="2" color="pink.400">
                    {errors.username?.message}
                  </Text>
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    variant="flushed"
                    type="password"
                    {...register("password")}
                  />
                  <Text pt="2" color="pink.400">
                    {errors.password?.message}
                  </Text>
                </FormControl>
                <Stack spacing="5">
                  <Text
                    color="blue.300"
                    cursor="pointer"
                    onClick={changeToLogin}
                  >
                    You Already have account?
                  </Text>
                  <Button
                    isLoading={isSubmitting}
                    type="submit"
                    bg="blue.400"
                    color="white"
                    _hover={{ bg: "blue.500" }}
                  >
                    Register
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
