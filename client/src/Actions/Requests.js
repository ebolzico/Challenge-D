import axios from 'axios'

export function tokenRequest(userData){
    return async (dispatch) => {
        try {
            let response= await axios({
                method: 'post',
                url: `/api/v0/authenticate`,
                data: userData
            })
            if (response.data){
                localStorage.setItem('token', response.data)  
            }
            dispatch({type: 'TOKEN_REQUEST', payload: response.data})
        }
        catch(error){alert('Wrong user or password')}
    }
}



export function getUserInfo(){
    return async (dispatch) => {
        try{
            const token= localStorage.getItem('token')
            const response= await axios({
                method: 'get',
                url: `/api/v0/users/me`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
                
            })
            dispatch({type: 'USER_INFO', payload: response.data})
        }
        catch(error){
            alert('No authorization token')
            window.location.href = '/';
        }
    }
}