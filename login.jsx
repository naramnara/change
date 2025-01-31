import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authActions";
const Login = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(login(username, password));
    };
    return(
        <form
        onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value = {username} onChange={(e)=>setUsername(e.target.value)}></input>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button type="submit">Login</button>
        </form>
    );
};
export default Login;