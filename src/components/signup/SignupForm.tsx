import { Path, useForm } from "react-hook-form";
import RegisterModel from "../../models/register";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../../schemas/register.schema";
import { register as registerService } from "../../services/auth";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
  Heading,
} from "@chakra-ui/react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { setValue } = useLocalStorage();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, dirtyFields, isSubmitted },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      company: "",
    },
  });

  const onSubmit = async (data: RegisterModel) => {
    try {
      const { data: result } = await registerService(data);

      //store response
      setValue("token", result.token);

      //redirect to dashboard
      navigate("/profile");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errorMessage = err.response?.data?.message ?? err.message;
        toast({
          position: "bottom-right",
          title: "An error occurred",
          description: errorMessage ?? err.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  const checkFieldValidity = (field: Path<RegisterModel>) =>
    (dirtyFields[field] && !!errors[field]?.message) ||
    (isSubmitted && !!errors[field]?.message);

  return (
    <>
      <Heading>Sign Up</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box w="100">
          <FormControl isInvalid={checkFieldValidity("firstName")}>
            <FormLabel>First Name</FormLabel>
            <Input id="firstName" type="text" {...register("firstName")} />
            <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
          </FormControl>
        </Box>

        <Box w="100">
          <FormControl isInvalid={checkFieldValidity("lastName")}>
            <FormLabel>Last Name</FormLabel>
            <Input id="lastName" type="text" {...register("lastName")} />
            <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
          </FormControl>
        </Box>

        <Box w="100">
          <FormControl isInvalid={checkFieldValidity("email")}>
            <FormLabel>Email</FormLabel>
            <Input id="email" type="text" {...register("email")} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
        </Box>

        <Box w="100">
          <FormControl isInvalid={checkFieldValidity("confirmEmail")}>
            <FormLabel>Confirm Email</FormLabel>
            <Input
              id="confirmEmail"
              type="text"
              {...register("confirmEmail")}
            />
            <FormErrorMessage>{errors.confirmEmail?.message}</FormErrorMessage>
          </FormControl>
        </Box>

        <Box w="100">
          <FormControl isInvalid={checkFieldValidity("password")}>
            <FormLabel>Password</FormLabel>
            <Input id="password" type="password" {...register("password")} />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
        </Box>

        <Box w="100">
          <FormControl isInvalid={checkFieldValidity("confirmPassword")}>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword")}
            />
            <FormErrorMessage>
              {errors.confirmPassword?.message}
            </FormErrorMessage>
          </FormControl>
        </Box>

        <Divider w="100" color="red" />

        <Box w="100">
          <FormControl isInvalid={checkFieldValidity("company")}>
            <FormLabel>Company Name</FormLabel>
            <Input id="companyName" type="text" {...register("company")} />
            <FormErrorMessage>{errors.company?.message}</FormErrorMessage>
          </FormControl>
        </Box>

        <Box w="100">
          <Button
            type="submit"
            mt={4}
            w="100%"
            colorScheme="teal"
            variant="solid"
            isLoading={isSubmitting}
          >
            Register
          </Button>
        </Box>
      </form>
      <Divider w="100" />
      Already a member?
      <Link to="/login">
        Login here
      </Link>
    </>
  );
};

export default SignupForm;
