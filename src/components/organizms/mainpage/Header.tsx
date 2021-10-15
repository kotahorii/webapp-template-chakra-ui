import { VFC } from "react";
import { useNavigate } from "react-router";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { DesktopNav } from "./DesktopNav";
import { Collapse } from "@chakra-ui/transition";
import { BsApple } from "react-icons/bs";
import { Icon } from "@chakra-ui/icon";
import { PopWithPhoto } from "../../molecules/PopWithPhoto";
import styles from "./Header.module.css";

export const Header: VFC = () => {
  const navigate = useNavigate();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box className={styles.Nav} zIndex="1">
        <Flex
          color="gray.600"
          bg="gray.50"
          minH="60px"
          py={{ base: 4 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle="solid"
          borderColor="gray.200"
          align="center"
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              aria-label="Toggle Navigation"
              variant="ghost"
              onClick={onToggle}
              _focus={{ boxShadow: "none" }}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              textAlign={{ base: "center", md: "left" }}
              fontFamily="heading"
              color="gray.800"
              fontWeight="bold"
              cursor="pointer"
              onClick={() => {
                navigate("/posts");
              }}
            >
              <Icon as={BsApple} _hover={{ opacity: "0.8" }} w={8} h={8} />
            </Text>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Flex
            justify="flex-end"
            flex={{ base: 1, md: 0 }}
            direction="row"
            spacing={6}
            align="center"
          >
            <PopWithPhoto />
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity></Collapse>
      </Box>
    </>
  );
};
