import React, { useState, useEffect } from 'react'
import './matt.css'
import Form from './Form'
import User from './User'
import axios from "axios"
import * as yup from "yup"
import schema from './formSchema'

const initialFormValues = {
    name: '',
    email: '',
    language: '',
    password: '',
    passwordConfirmation: '',
    position: '',
    tos: false,
    }

const initialFormErrors = {
    name: '',
    email: '',
    language: '',
    password: '',
    passwordConfirmation: '',
    position: '',
    tos: '\n',
}
const initialUsers = [{},{}]
const initialDisabled = true

function App() {
  
    const [users, setUsers] = useState(initialUsers)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
  
    const getUsers = () => {       
        axios
        .get(`http://localhost:666/api/users`)
        .then((res) => {
            console.log(res)
            setUsers(res.data)
        })
        .catch((err) => {
            alert("Something ain't right here \n Did you start the server?")
            debugger
        })
    }
    
    const postNewUser = (newUser) => {       
        axios
        .post("https://tt-41-use-my-tech.herokuapp.com/api/register", { email: newUser.email, username: `${newUser.name}`, password: `${newUser.password}` }

)
        .then((res) => {
            setUsers([res.data, ...users])
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
        const newUser = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            password: formValues.password,
            language: formValues.language,
            tos: formValues.tos
        }
        postNewUser(newUser)
        setFormValues(initialFormValues)
    }

    useEffect(() => {
        getUsers()
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
            
            {users.map((user) => {
                return <User key={user.id} details={user} />
            })}
        </div>
    )
}

export default App
