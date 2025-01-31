import { LOGIN, LOGIN_SUCCESS, LOGOUT, REGISTER } from "./authActions";

const initState = {
    isAuthenticated: false,
    user: null
};
const authReducer = (state = initState, action) =>{
    switch (action.type) {
       
        case LOGIN:
            return {
                ...state, isAuthenticated:true,
                user: action.payload.username
            };
            case LOGIN_SUCCESS:
                return {...state, isAuthenticated: true};
            case LOGOUT: 
            return {...state, isAuthenticated: false};
            case REGISTER:
                return{
                    ...state
                };
                default: return state;
    }
};
export default authReducer;