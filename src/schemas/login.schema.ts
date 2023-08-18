import * as yup from 'yup';

const loginSchema = yup.object().shape({
    email: yup.string().email().required('Email is required.'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long.')
})

export default loginSchema;