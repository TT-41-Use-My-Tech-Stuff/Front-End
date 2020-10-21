import React, { useState, useEffect } from 'react'
import '../styles/matt.css'
import Form from './SignInForm'

import axios from "axios"
import * as yup from "yup"
import schema from './signInSchema'

const initialFormValues = {
    username: '',
    password: '',
    tos: false
    }

const initialFormErrors = {
    username: '',
    password: '',
    tos: ''
}

let initialDisabled = true

function App() {

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
  
    
    
    const postLogin = (user) => {       
        axios
        .post("https://tt-41-use-my-tech.herokuapp.com/api/login", { username: `${user.username}`, password: `${user.password}` }

)
        .then((res) => {
            setFormValues(initialFormValues)
        })
        .catch((err) => {
            alert("Something ain't right here \n Did you check the server?")
            debugger
        })
    }

    const inputChange = (name, value) => {
    yup
        .reach(schema, name)
        .validate(value)
        .then(() => {
            setFormErrors({
                ...formErrors,
                [name]: "",
            })
        })
        .catch((err) => {
            setFormErrors({
                ...formErrors,
                [name]: err.errors[0],
            })
        })

        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const formSubmit = () => {
        const user = {
            username: formValues.name,
            password: formValues.password,
        }
        postLogin(user)
        setFormValues(initialFormValues)
    }

    useEffect(() => {
        {}
    }, [])

    useEffect(() => {
        schema.isValid(formValues).then((valid) => {
            setDisabled(!valid)
        })
    }, [formValues])



    return (
        <div className="App">
            <Form 
                values={formValues}
                change={inputChange}
                submit={formSubmit}
                disabled={disabled}
                errors={formErrors}
            />
        </div>
    )
}

export default App
