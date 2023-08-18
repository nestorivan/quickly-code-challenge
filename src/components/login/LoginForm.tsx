import React, { useEffect } from "react";
import { Path, useForm } from "react-hook-form";
import loginSchema from "../../schemas/login.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginModel from "../../models/login";
import { login } from "../../services/auth";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import axios from "axios";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { setValue } = useLocalStorage();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, dirtyFields, isSubmitted },
  } = useForm<LoginModel>({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/profile");
    }
  }, []);

  const onSubmit = async (data: LoginModel) => {
    try {
      const { data: result } = await login(data);

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

  const checkFieldValidity = (field: Path<LoginModel>) =>
    (dirtyFields[field] && !!errors[field]?.message) ||
    (isSubmitted && !!errors[field]?.message);

  return (
    <>
      <Heading>Login</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box w="100">
          <FormControl isInvalid={checkFieldValidity("email")}>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Email" {...register("email")} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
        </Box>

        <Box w="100">
          <FormControl isInvalid={checkFieldValidity("password")}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
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
            Submit
          </Button>
        </Box>
      </form>
      <Box position="relative">
        <Divider />
      </Box>
      <span>Don't have an account?</span>
      <Link to="/register">Register here</Link>
    </>
  );
};

export default LoginForm;
