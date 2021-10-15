import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { LoginModal } from "../organizms/login/LoginModal";
import { RegisterModal } from "../organizms/login/RegisterModal";

import { Header } from "../organizms/mainpage/Header";

export const MainPage = () => {
  return (
    <>
      <Header />
      <LoginModal />
      <RegisterModal />
      <Flex h="100%" bg="gray.50" color="gray.600" p="8">
        <Outlet />
      </Flex>
    </>
  );
};
