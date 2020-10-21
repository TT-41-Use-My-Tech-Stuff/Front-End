import * as yup from 'yup'

export default yup.object().shape({
    username: yup
        .string()
        .required('A username is required'),
    password: yup
        .string()
        .required('Password is required'),
     tos: yup
        .boolean()
        .oneOf([true], 'Terms of Service must be accepted')
})
