import {
  Heading,
  Flex,
  Stack,
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Link,
  Button,
} from "@chakra-ui/react";
import { VFC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export const Login: VFC = () => {
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
    navigate("/posts");
  };

  return (
    <>
      <Flex align="center" minH="100vh" justify="center" bg="gray.50">
        <Stack spacing={8} mx="auto" maxW="lg" py="12" px={6}>
          <Stack align="center">
            <Heading>Login</Heading>
            <Text fontSize="lg" color="gray.600">
              to enjoy our App
            </Text>
          </Stack>
          <Box rounded="sm" bg="white" boxShadow="lg" p="8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing="4">
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input type="text" {...register("username")} />
                  <Text color="pink.400">{errors.username?.message}</Text>
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" {...register("password")} />
                  <Text color="pink.400">{errors.password?.message}</Text>
                </FormControl>
                <Stack spacing="10">
                  <Stack direction={{ base: "column", sm: "row" }}>
                    <Checkbox>Remember me</Checkbox>
                    <Link color="blue.400">Forgot password?</Link>
                  </Stack>
                  <Button
                    isLoading={isSubmitting}
                    type="submit"
                    bg="blue.400"
                    color="white"
                    _hover={{ bg: "blue.500" }}
                  >
                    Sign In
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};
