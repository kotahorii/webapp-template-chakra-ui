import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, Text, WrapItem } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/react";
import React from "react";

export const ImageWithInfo = () => {
  return (
    <>
      {[...Array(7)]
        .map((_, i) => i)
        .map((i) => (
          <WrapItem key={i} mx="auto" cursor="pointer">
            <Box boxSize={{ sm: "lg", md: "xs" }} mb="40px">
              <Stack>
                <Image
                  zIndex="0"
                  _hover={{ opacity: "0.85" }}
                  w="100%"
                  h={{ md: "xs", sm: "lg" }}
                  fit="cover"
                  align="center"
                  borderRadius="10"
                  alt="posts"
                  src="https://yuu01.jp/wp-content/uploads/2021/03/sOSXyDGZ_400x400.jpg"
                />
                <Text fontWeight="bold">Title</Text>
              </Stack>
            </Box>
          </WrapItem>
        ))}
      {[...Array(7)]
        .map((_, i) => i)
        .map((i) => (
          <WrapItem key={i} mx="auto" cursor="pointer">
            <Box boxSize={{ sm: "lg", md: "xs" }} mb="40px">
              <Stack>
                <Image
                  zIndex="0"
                  _hover={{ opacity: "0.85" }}
                  w="100%"
                  h={{ md: "xs", sm: "lg" }}
                  fit="cover"
                  align="center"
                  borderRadius="10"
                  alt="posts"
                  src="https://shimashima01.net/wp-content/uploads/2021/06/oozora-1024x538.jpg"
                />
                <Text fontWeight="bold">Title</Text>
              </Stack>
            </Box>
          </WrapItem>
        ))}
      {[...Array(7)]
        .map((_, i) => i)
        .map((i) => (
          <WrapItem key={i} mx="auto" cursor="pointer">
            <Box boxSize={{ sm: "lg", md: "xs" }} mb="40px">
              <Stack>
                <Image
                  zIndex="0"
                  _hover={{ opacity: "0.85" }}
                  w="100%"
                  h={{ md: "xs", sm: "lg" }}
                  fit="cover"
                  align="center"
                  borderRadius="10"
                  alt="posts"
                  src="https://livedoor.blogimg.jp/reinobasyo/imgs/a/c/acd1f125.jpg"
                />
                <Text fontWeight="bold">Title</Text>
              </Stack>
            </Box>
          </WrapItem>
        ))}
    </>
  );
};
