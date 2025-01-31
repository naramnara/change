export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const login = (username, password) =>{
    return{
        type: LOGIN,
        payload: {username, password}
    };
};
export const loginSuccess = ()=>({
    type: LOGIN_SUCCESS,
});
export const logout = () =>({
 type: LOGOUT,
});
export const register = (username, password) =>{
    return{
        type: REGISTER,
        payload: {username, password}
    };
};
