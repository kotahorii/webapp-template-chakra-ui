import React from "react";
import { ImageWithInfo } from "../organizms/mainpage/ImageWithInfo";
import { Wrap } from "@chakra-ui/layout";
export const Posts = () => {
  return (
    <>
      <Wrap justify="center" spacing="30px">
        <ImageWithInfo />
      </Wrap>
    </>
  );
};
