import axios from 'axios'

export function tokenRequest(userData){
    return async (dispatch) => {
        try {
            let response= await axios({
                method: 'post',
                url: 'http://localhost:3002/api/v0/authenticate',
                data: userData
            })
            if (response.data){
                localStorage.setItem('token', response.data)  
            }
            dispatch({type: 'TOKEN_REQUEST', payload: response.data})
        }
        catch(error){console.log(error)}
    }
}



export function getUserInfo(token){
    return async (dispatch) => {
        try{
            /* const config = {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            } */
            //let response= await axios.get('http://localhost:3002/api/v0/users/me', config)
            const response= await axios({
                method: 'get',
                url: 'http://localhost:3002/api/v0/users/me',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
                
            })
            dispatch({type: 'USER_INFO', payload: response.data})
        }
        catch(error){}
    }
}