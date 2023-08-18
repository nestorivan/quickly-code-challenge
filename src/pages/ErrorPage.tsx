import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Link, useRouteError } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

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
          <Heading>&#123;404&#125;</Heading>
        </Box>
        <Box>
          <Heading as="h3">Not Found</Heading>
        </Box>
        <Box>
          <Text>
            Sorry, an unexpected error occurred.
          </Text>
        </Box>
        <Box>
          <Link to="/">&#91;Back to Login&#93;</Link>
        </Box>
      </VStack>
    </Flex>
  );
}