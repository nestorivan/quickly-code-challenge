import * as yup from 'yup'
import registerSchema from '../schemas/register.schema'

type RegisterModel = yup.InferType<typeof registerSchema>

export default RegisterModel