import {
  Box,
  Card,
  CardBody,
  CardHeader,
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


const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>();

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

  if (!user) {
    return null;
  }

  return (
    <Card maxW="md">
      <CardHeader>
        <ProfileAvatar user={user}/>
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
              <Text>
                - All user information would go here -
              </Text>
            </Box>
          </VStack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Profile;
