import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      direction="row"
      justifyContent="center"
      alignContent="center"
      flexWrap="wrap"
    >
      <VStack>
        <Box>
          <Heading>&#123;401&#125;</Heading>
        </Box>
        <Box>
          <Heading as="h3">Unauthorized</Heading>
        </Box>
        <Box>
          <Text>
            You are not authorized to view this page. Please login or register
          </Text>
        </Box>
        <Box>
          <Link to="/">&#91;Back to Login&#93;</Link>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Unauthorized;
