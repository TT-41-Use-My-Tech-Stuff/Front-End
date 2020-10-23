import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { axiosWithAuth } from '../utils/axiosWithAuth'

const SignUp = () => {
  const { register, handleSubmit, errors, setValue } = useForm()
  const history = useHistory()

  const onSubmit = (data) => {
    console.log(data)
    const newUser = {
      email: data.email,
      username: data.username,
      password: data.password
    };
    axiosWithAuth()
      .post('/api/register', newUser)
      .then((res) => {
        console.log(res);
        history.push('/login')
      })
      .catch((err) => console.log(err))
    // history.push('/login')
    setValue('email', '')
    setValue('password', '')
    setValue('username', '')
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='email'
          placeholder='Example@example.com'
          name='email'
          ref={register({ required: 'Email required' })}
        />
        <input
          type='username'
          placeholder='username'
          name='username'
          ref={register({ required: 'Username required' })}
        />
        <input
          type='password'
          placeholder='Password"'
          name='password'
          ref={register({
            required: 'Password required'
            minlength: {
              value: 8,
              message: "Passwords must be atleast 8 characters long"
            }
          })}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default SignUp;
