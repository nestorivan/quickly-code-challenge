import * as yup from 'yup'

const registerSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    confirmEmail: yup.string().oneOf([yup.ref('email')], 'Emails must match'),
    password: yup.string().required().min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
    company: yup.string().required(),
})


export default registerSchema;