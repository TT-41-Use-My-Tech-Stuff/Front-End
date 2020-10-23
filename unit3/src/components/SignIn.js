import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

function SignIn() {
  const history = useHistory()

  const { register, handleSubmit, setValue, errors } = useForm()

  const onSubmit = (data) => {
    console.log(data)

    axiosWithAuth()
      .post("api/login", data)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token)
        window.localStorage.setItem("id", res.data.id)
        history.push("/devicelist")
      })
      .catch((err) => console.log(err))
    setValue("username", "")
    setValue("password", "")
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='username'
          name='username'
          ref={register({
            required: 'username required',
            minlength: { value: 4, message: 'Please enter a valid username' }
          })}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          ref={register({
            required: 'Password required',
            minLength: { value: 3, message: 'Incorrect password' }
          })}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignIn
