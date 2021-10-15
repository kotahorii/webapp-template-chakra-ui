import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import { VFC } from "react";
import { Image } from "@chakra-ui/image";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../app/hooks";
import { setIsOpenRegister } from "../../features/loginSlice";

export const StartPage: VFC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <>
      <Container maxW={"7xl"} h="100vh">
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "red.400",
                  zIndex: -1,
                }}
              >
                Write once,
              </Text>
              <br />
              <Text as={"span"} color={"red.400"}>
                use everywhere!
              </Text>
            </Heading>
            <Text color={"gray.500"}>
              Snippy is a rich coding snippets app that lets you create your own
              code snippets, categorize them, and even sync them in the cloud so
              you can use them anywhere. All that is free!
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"blue"}
                bg={"blue.400"}
                _hover={{ bg: "blue.500" }}
                onClick={() => {
                  dispatch(setIsOpenRegister());
                }}
              >
                登録する
              </Button>
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                onClick={() => {
                  navigate("/posts");
                }}
              >
                登録せずに始める
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={
                  "https://prtimes.jp/i/30268/510/resize/d30268-510-2435c230d73768767e39-5.jpg"
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};
