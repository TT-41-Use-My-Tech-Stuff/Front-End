import React from 'react'
// import '../styles/matt.css'

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
        <h2>Add New User</h2>
        <div className='errors'>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.passwordConfirmation}</div>
            <div>{errors.language}</div>
            <div>{errors.position}</div>
            <div>{errors.tos}</div>
        </div>        
        <div className='input container'>
            <div className='inputRow'>
                <label htmlFor='name'>Name</label>
                <input
                    value={values.name}
                    className='input'
                    placeholder= 'Name'
                    onChange={onChange}
                    name='name'
                    type='text'
                />
            </div>
            <div className='inputRow'>
                <label htmlFor='email'>
                    E-mail
                </label>
                <input
                    value={values.email}
                    className='input'
                    placeholder= 'E-Mail'
                    onChange={onChange}
                    name='email'
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
                placeholder='Password' 
                onChange={onChange}
                name='password'
                type='password'
            />
        </div>
        <div className='inputRow'>
            <label htmlFor='passwordConfirmation'>
                Confirm Password
            </label>
            <input
                value={values.passwordConfirmation}
                className='input'
                onChange={onChange}
                placeholder='Repeat Passwprd'
                name='passwordConfirmation'
                type='password'
            />
        </div>
        <div className='inputRow'>
            <label htmlFor='language'>
                Preferred Language
            </label>        
            <select onChange={onChange} value={values.language} name='language' className='select input'>
                <option value=''>- Select an option -</option>
                <option value='javascript'>JavaScript</option>
                <option value='c#'>C#</option>
                <option value='python'>Python</option>
                <option value='dos'>DOS</option>
                <option value='css'>CSS</option>
                <option value='java'>Java</option>
                <option value='ruby'>Ruby</option>
                <option value='basic'>Basic</option>
                <option value='c++'>C++</option>
                <option value='html'>HTML</option>
                <option value='blow'>Blowing into a Nintendo cartridge</option>
            </select>
        </div>
        <div className='inputRow'>
            <label htmlFor='position'>
                Team Position
            </label>        
            <select onChange={onChange} value={values.position} name='position' className='select input'>
                <option value=''>- Select an option -</option>
                <option value='tl'>Team Lead</option>
                <option value='node'>Back End (Node)</option>
                <option value='java'>Back End (Java)</option>
                <option value='reactii'>React II</option>
                <option value='reacti'>React I</option>
                <option value='uiux'>UI/UX</option>
            </select>
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
        <label htmlFor='tos'className='terms'>
            I agree to the <a href='/'> terms of service </a> even though I haven't read them
        </label>
        </div>
            <button name='submitButton' className='submit-button' disabled={disabled}>Submit</button>
    </form>
)}
export default Form
