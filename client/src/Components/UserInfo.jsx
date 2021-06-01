import React from 'react'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import style from './UserInfo.module.css'
import { getUserInfo } from '../Actions/Requests';

export default function UserInfo() {
    const history= useHistory()
    const [token, setToken]= useState(localStorage.getItem('token'))
    const userinfo= useSelector(state => state.userInfo)
    const dispatch= useDispatch()

    useEffect(() => {
        dispatch(getUserInfo(token))
        
    }, [])

    return (
        <div /* className={style.container} */>
            <img /* src={userInfo.avatar} *//>
            <ul>
                <li>Name: </li>
                <li>Surname: </li>
                <li>Age: </li>
                <li>E-mail: </li>
                <li>Role: </li>
                <li>Id: </li>
            </ul>
        </div>
    )
}
