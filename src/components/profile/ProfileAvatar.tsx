import { Avatar, Badge, Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { User } from "../../models/user";

const defaultAvatar = "https://bit.ly/broken-link";

interface ProfileAvatarProps {
  user: User;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ user }) => {

  return (
    <Flex>
      <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
        <Avatar
          name={user?.full_name}
          src={user?.avatar_url ?? defaultAvatar}
        />
        <Box>
          <Heading size="sm">{user?.full_name}</Heading>
          <Text>{user?.email}</Text>
        </Box>
        <Center h="100%" alignItems="center">
          <Badge colorScheme={user.verified ? "green" : "red"}>
            {user.verified ? "Verified" : "Not Verified"}
          </Badge>
        </Center>
      </Flex>
    </Flex>
  );
};

export default ProfileAvatar;
