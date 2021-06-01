import React from 'react'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import style from './UserInfo.module.css'
import { getUserInfo } from '../Actions/Requests';

export default function UserInfo() {
    const userInfo= useSelector(state => state.userInfo)
    const dispatch= useDispatch()

    useEffect(() => {
        dispatch(getUserInfo())

    }, [])

    const handleClick= () => {
        localStorage.clear()
        window.location.href = '/';
    }

    return (
        <div className={style.container}>
            <img src={userInfo.avatar}/>
            <ul>
                <li>Name: {userInfo.name}</li>
                <li>Surname: {userInfo.surname}</li>
                <li>Age: {userInfo.age}</li>
                <li>E-mail: {userInfo.email}</li>
                <li>Role: {userInfo.role}</li>
                <li>Id: {userInfo.id}</li>
            </ul>
            <button onClick={handleClick}>Log Out</button>
        </div>
    )
}
