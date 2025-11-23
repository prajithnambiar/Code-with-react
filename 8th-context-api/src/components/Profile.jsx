import React from "react";
import UserContext from "../context/userContext";
import { useContext } from "react";

function Profile(){
    const {user} = useContext(UserContext)
    return(
        <>
        <h1>The login details are - {user.userName} </h1>
        </>
    )
}

export default Profile;