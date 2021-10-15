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
          <WrapItem
            key={i}
            mx="auto"
            boxSize={{ base: "270", xl: "270", sm: "330", xs: "440" }}
          >
            <Box>
              <Stack>
                <Image
                  zIndex="0"
                  cursor="pointer"
                  _hover={{ opacity: "0.85" }}
                  borderRadius="10"
                  alt="posts"
                  src="https://yuu01.jp/wp-content/uploads/2021/03/sOSXyDGZ_400x400.jpg"
                />
                <Text>Title</Text>
              </Stack>
            </Box>
          </WrapItem>
        ))}
    </>
  );
};
