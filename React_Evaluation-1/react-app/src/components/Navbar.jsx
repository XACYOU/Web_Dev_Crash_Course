import React, { useContext } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Link as ChakraLink,
  Text,
  Flex,
  HStack,
  Box,
  Button,
} from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContextProvider";

const Navbar = () => {
  const { authDetails, logout } = useContext(AuthContext);

  return (
    <Flex p={4} bg="gray.500">
      {authDetails.isAuthenticated ? (
        <HStack width="100%" justify="space-between">
          <Text fontSize="3xl"> {authDetails.email} </Text>
          <HStack spacing={6}>
            <ChakraLink as={ReactRouterLink} to="/">
              <Text fontSize="3xl"> Home </Text>
            </ChakraLink>
            <Button onClick={()=> logout}>
              <Text fontSize="2xl"> Logout </Text>
            </Button>
          </HStack>
        </HStack>
      ) : (
        <ChakraLink as={ReactRouterLink} to="/login">
          <Text fontSize="3xl"> Login </Text>
        </ChakraLink>
      )}
    </Flex>
  );
};

export default Navbar;
