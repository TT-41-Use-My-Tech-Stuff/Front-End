import React from 'react'
import '../styles/matt.css'
// import Nav from './Nav'

export default function Form(props){

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

const redirectRoute = () => {
    {}
} 

return (
    <div>
        {/* <Nav /> */}
            <form className='container' onSubmit={onSubmit}>
                <h2>Log In</h2>
                <div className='errors'>
                    <p>{errors.username}</p>
                    <p>{errors.password}</p>
                    <p>{errors.tos}</p>
                </div>        
                <div className='input container'>
                    <div className='inputRow'>
                        <label htmlFor='name'>Username / Email</label>
                        <input
                            value={values.username}
                            className='input'
                            onChange={onChange}
                            name='username'
                            type='text'
                        />
                    </div>
                    <div className='inputRow'>
                        <label htmlFor='password'>
                            Password
                        </label>
                        <input
                            value={values.password}
                            className='input'
                            onChange={onChange}
                            name='password'
                            type='password'
                        />
                    </div>
                </div>
                <div className='agree'>
                    <input
                            className='agreeSubmit'
                            type='checkbox'
                            name='tos'
                            checked={values.tos}
                            onChange={onChange}
                        />
                    <label htmlFor='tos' className='terms'
                    >Even though I still can't be bothered to read the  <a href='/'> terms of service </a> I'll still check this box so we can move on.
                    </label>
                </div>
                <button name='submitButton' className='submit-button' disabled={disabled} onClick={redirectRoute}>Submit</button>
            </form>
        </div>
)}
