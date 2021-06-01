import React from 'react'
import {useState} from 'react'

export default function Login() {
    const [userData, setUserData]= useState({email: '', password: ''})
    const [validateEmail, setValidateEmail]= useState(false) // For className change

    function onChange(e){
        if (e.target.name === 'email' && e.target.value.includes('@' && '.com')){
            setValidateEmail(true)
            
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name= 'email' placeholder= 'email'/>
            <input name= 'password' placeholder= 'password'/>
            <input type= 'submit'/>
        </form>
    )
}
