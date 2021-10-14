import { VFC } from "react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useNavigate, Link } from "react-router-dom";

export const Header: VFC = () => {
  const navigate = useNavigate();
  const username = localStorage.username;
  const password = localStorage.password;

  const logout = () => {
    localStorage.removeItem(username);
    localStorage.removeItem(password);
    navigate("/");
  };
  return (
    <>
      <Text>welcome {username}</Text>
      <Heading>MainPage</Heading>
      <Button variant="outline" onClick={logout}>
        Log out
      </Button>
      <nav>
        <Link to="myprof">My Profile</Link>
      </nav>
    </>
  );
};
