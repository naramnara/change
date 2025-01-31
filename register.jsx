import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/authActions";
const Register = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(register(username,password));
    };
    return(
<form
onSubmit={handleSubmit}>
    <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
    <input type="paswword" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
    <button type="submit">Register</button>
</form>
    );
};
export default Register;