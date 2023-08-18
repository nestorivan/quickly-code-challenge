import axios, { AxiosPromise } from "axios";
import LoginModel, { LoginResponse } from "../models/login";
import RegisterModel from "../models/register";
import { User } from "../models/user";
import { ResponseEnvelope } from "../models/responseEnvelope";

const baseAxios = axios.create({
  baseURL: `${import.meta.env.VITE_QUICKLY_API_BASE_ROUTE}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// usually we would use a token interceptor to add the token to the request
// but since its a small app, we can just add it to the request
export const getUser = (): AxiosPromise<ResponseEnvelope & { user: User }> => {
  let token = localStorage.getItem("token");

  if(token)
    token = JSON.parse(token);

  return baseAxios.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const login = (user: LoginModel) =>
  baseAxios.post("/login", {
    email: user.email,
    password: user.password,
  });

export const register = (user: RegisterModel): AxiosPromise<LoginResponse> =>
  baseAxios.post("/signup", {
    first_name: user.firstName,
    last_name: user.lastName,
    email: user.email,
    password: user.password,
    company: {
      name: user.company,
    },
  });
