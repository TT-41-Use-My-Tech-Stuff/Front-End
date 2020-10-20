import React from 'react'
import './matt.css'

function Form(props){

const { values, submit, change, disabled, errors } = props
const onSubmit = (e) => {
    e.preventDefault()
    submit()
}
const onChange = (e) => {
    const { name, value, type, checked } = e.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
}

return (
    <form className='container' onSubmit={onSubmit}>
        <h2>Log In</h2>
        <div className='errors'>
            {errors.username}
        </div>        
        <div className='input container'>
            <div className='inputRow'>
                <label for='name'>Username/Email</label>
                <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                />
            </div>
            <div className='inputRow'>
                <label for='password'>
                    Password
                </label>
                <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='password'
                />
            </div>
        
        <label for='tos'>
            Even though I still can't be bothered to read the  <a href='./home'> terms of service </a> I'll still check this box so we can move on.
        </label>
        </div>
        <button name='submitButton' disabled={disabled}>Submit</button>
    </form>
)}
export default Form
