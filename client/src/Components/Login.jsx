import React from 'react'
import {useState, useEffect} from 'react'
import style from './Login.module.css'
import {useDispatch, useSelector} from 'react-redux';
import { tokenRequest } from '../Actions/Requests'
import {useHistory} from 'react-router-dom'

export default function Login() {
    const dispatch= useDispatch()
    const history= useHistory()
    const token= useSelector(state => state.token)
    const [userData, setUserData]= useState({email: '', password: ''})
    const [validateEmail, setValidateEmail]= useState(false) // For className change

    function handleChange(e){
        if (e.target.name === 'email'){
            /\S+@\S+\.\S+/.test(e.target.value) ? setValidateEmail(true) : setValidateEmail(false)    
        } 
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        
    }

    useEffect(() => {
        if(token.length > 3){
            history.push('/userInfo')
        }
    }, [token])

    async function handleSubmit(e){
        e.preventDefault()
        if (validateEmail){
            dispatch(tokenRequest(userData))            
        }
    }

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            {
                validateEmail ? 
                <div className={style.inputs}>
                    <input className={style.validEmail} name= 'email' placeholder= 'email' onChange={handleChange}/>
                    <input className={style.validPassword} type='password' name= 'password' placeholder= 'password' onChange={handleChange}/>
                    <input type= 'submit' className={style.send}/>
                </div>
                    :
                <div className={style.inputs}>
                    <input className={style.emailNotValid} name= 'email' placeholder= 'email' onChange={handleChange}/>
                    <input type= 'submit' className={style.send}/>
                </div>
            }
        </form>
    )
}
