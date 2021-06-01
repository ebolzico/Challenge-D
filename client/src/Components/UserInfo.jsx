import React from 'react'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export default function UserInfo() {
    const history= useHistory()
    const [token, setToken]= useState(localStorage.getItem('token'))

    useEffect(() => {
        // Chequeo el token con el back
        if(token !== 'Paso'){
            history.push('/')
        }
    }, [])

    return (
        <div>
            UserInfo
        </div>
    )
}
