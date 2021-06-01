import axios from 'axios'

export function tokenRequest(userData){
    return async (dispatch) => {
        try {
            let response= await axios({
                method: 'post',
                url: 'http://localhost:3002/api/v0/authenticate',
                data: userData
            })
            console.log(response.data)
            if (response.data){
                localStorage.setItem('token', response.data)  
            }
            dispatch({type: 'TOKEN_REQUEST', payload: response.data})
        }
        catch(error){console.log(error)}
    }
}