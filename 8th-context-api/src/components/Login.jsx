import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

const Login = ()=> {
    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");
    const {setUser} = useContext(UserContext)
    function formSubmit(e){
        e.preventDefault();
        setUser({userName, password})

    }
    return (
        <div>
            <h1>Login</h1>
        <input type="text" placeholder="Username" value={userName} onChange={(e)=> setUserName(e.target.value) }/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value) } />
        <button type="submit" onClick={formSubmit}>Submit</button>
        </div>
    )

}

export default Login;