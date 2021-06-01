
const initialState={
    token:localStorage.getItem('token') || '',
    userInfo:{}
}

function rootReducer(state= initialState, action){
    switch (action.type){
        case 'TOKEN_REQUEST':
            return {
                ...state,
                token: action.payload
            }

        case 'USER_INFO':
            return {
                ...state,
                userInfo: action.payload
            }

        default: return state
    }
}


export default rootReducer