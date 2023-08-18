import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => (
  <Flex w="100%" direction="row" bgColor="gray.100">
    <Flex
      w="100vw"
      h="100vh"
      direction="row"
      justifyContent="center"
      alignContent="center"
      flexWrap="wrap"
    >
      <Flex w="50%" direction="column" bg="white" p="30px 30px">
        <Outlet />
      </Flex>
    </Flex>
  </Flex>
);

export default AuthLayout;
