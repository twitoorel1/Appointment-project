import * as yup from 'yup';
import { passwordRegex } from '../config/constants/regex.constant.js'


const loginRequestSchema = yup.object().shape({
    // email: yup.string().email().required(),
    username: yup.string().required(),
    password: yup.string().required().matches(passwordRegex)
});

const registerRequestSchema = yup.object().shape({
    // email: yup.string().email().required("Email is required"),
    username: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    password: yup.string().required().matches(passwordRegex, "Password not valid"),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
    phoneNumber: yup.string().required(),
});


export { registerRequestSchema, loginRequestSchema }