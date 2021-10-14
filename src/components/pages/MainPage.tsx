import { Flex, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { Header } from "../organizms/mainpage/Header";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Flex h="100vh" bg="gray.50" color="gray.600">
        aaa
        <Outlet />
      </Flex>
    </>
  );
};
