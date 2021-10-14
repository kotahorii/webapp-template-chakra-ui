import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../organizms/Header";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
