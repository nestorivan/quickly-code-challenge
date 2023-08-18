import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getUser } from "../services/auth";
import { User } from "../models/user";
import { useNavigate } from "react-router-dom";
import ProfileAvatar from "../components/profile/ProfileAvatar";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>();
  const { removeValue } = useLocalStorage();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {
          data: { user },
        } = await getUser();

        setUser(user);
      } catch (err) {
        if ((err as any).response?.status === 401) {
          navigate("/unauthorized");
        }
      }
    };
    fetchUser();
  }, []);

  const handleLogOut = () => {
    removeValue("token");
    navigate("/login");
  };

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Card maxW="md">
        <CardHeader>
          <ProfileAvatar user={user} />
        </CardHeader>
        <CardBody>
          <Flex>
            <VStack>
              <Box w="100%" justifyContent="start">
                <Heading size="xs">Company</Heading>
                <Text>{user?.Company?.name}</Text>
              </Box>
              <Box w="100%" justifyContent="start">
                <Heading size="xs">Company Id:</Heading>
                <Text>{user?.Company?.id}</Text>
              </Box>
              <Box w="100%" justifyContent="start">
                <Text>- All user information would go here -</Text>
              </Box>
            </VStack>
          </Flex>
          <CardFooter justifyContent="flex-end">
            <ButtonGroup spacing="2">
              <Button colorScheme="red" onClick={handleLogOut}>Log out</Button>
            </ButtonGroup>
          </CardFooter>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Profile;
