import * as yup from 'yup';
import loginSchema from '../schemas/login.schema';
import { User } from './user';
import { ResponseEnvelope } from './responseEnvelope';

type LoginModel = yup.InferType<typeof loginSchema>;

export default LoginModel

export interface LoginResponse extends ResponseEnvelope {
  token: string
  user: User
}