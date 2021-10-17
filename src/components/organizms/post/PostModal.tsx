import { VFC, useState } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Flex, Stack, Text } from "@chakra-ui/layout";
import { resetIsOpenPost, selectIsOpenPost } from "../../../features/postSlice";
import { Textarea } from "@chakra-ui/textarea";
import { BsCardImage } from "react-icons/bs";
import Icon from "@chakra-ui/icon";

export const PostModal: VFC = () => {
  const dispatch = useAppDispatch();
  const isOpenPost = useAppSelector(selectIsOpenPost);
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>(null);

  const handlerInputPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput?.click();
  };

  type IFormInput = {
    title: string;
    text: string;
  };

  const schema = yup.object({
    title: yup.string().required().min(2).max(30),
    text: yup.string().max(140),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(resetIsOpenPost());
    navigate("/posts");
    setValue("title", "");
    setValue("text", "");
  };

  return (
    <>
      <>
        <Modal
          closeOnOverlayClick={false}
          isOpen={isOpenPost}
          onClose={() => {
            dispatch(resetIsOpenPost());
          }}
        >
          <ModalOverlay />
          <ModalContent px="8" pb="8" bg="gray.50">
            <ModalHeader textAlign="center" color="gray.600">
              Post
            </ModalHeader>
            <ModalCloseButton _focus={{ boxShadow: "none" }} />
            <ModalBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing="4">
                  <input
                    type="file"
                    id="imageInput"
                    hidden={true}
                    onChange={(e) => setImage(e.target.files![0])}
                  />
                  <FormControl>
                    <FormLabel color="gray.500">Title</FormLabel>
                    <Input
                      variant="flushed"
                      type="text"
                      {...register("title")}
                    />
                    <Text pt="2" color="pink.400">
                      {errors.title?.message}
                    </Text>
                  </FormControl>
                  <FormControl>
                    <FormLabel color="gray.500">Text</FormLabel>
                    <Textarea {...register("text")} />
                    <Text pt="2" color="pink.400">
                      {errors.text?.message}
                    </Text>
                  </FormControl>

                  <Stack direction="row">
                    <Stack
                      direction="row"
                      spacing="5"
                      align="center"
                      w="100%"
                      justify="flex-start"
                      px="3"
                    >
                      <Icon
                        color="gray.600"
                        as={BsCardImage}
                        cursor="pointer"
                        fontSize="2xl"
                        onClick={handlerInputPicture}
                      />
                      <Text>{image?.name}</Text>
                    </Stack>
                    <Flex>
                      <Button
                        isLoading={isSubmitting}
                        type="submit"
                        color="white"
                        bg="blue.400"
                        _hover={{ bg: "blue.500" }}
                      >
                        New post
                      </Button>
                    </Flex>
                  </Stack>
                </Stack>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </>
  );
};
