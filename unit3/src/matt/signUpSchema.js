import * as yup from 'yup'

export default yup.object().shape({
    name: yup
        .string()
        .required('name is required')
        .min(3, 'name must be 3 character'),
    email: yup
        .string()
        .email('must be a valid email address')
        .required('email is required'),
    password: yup
        .string()
        .required('Password is required'),
    passwordConfirmation: yup
        .string()
        // .oneOf([yup.ref('password')], 'Passwords do not match')
        ,
    language: yup
        .string()
        .oneOf(['javascript', 'c#', 'python', 'dos', 'css', 'java', 'ruby', 'basic', 'c++', 'html', 'blow'], 'You have to choose your preferred language'),
    position: yup
        .string()
        .oneOf(['tl', 'node', 'java', 'reactii', 'reacti', 'uiux'], 'You must choose your position'),
    tos: yup
        .boolean()
        .oneOf([true], 'Terms of Service must be accepted')
       
})
