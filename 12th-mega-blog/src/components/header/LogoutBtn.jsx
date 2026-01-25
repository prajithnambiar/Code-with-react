import React from "react";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = ()=> {
        authService.logOut.then(() => {
            dispatch(logout());
        })
    }
    return(
        <div  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandler}>LogoutBtn</div>
    )
     
}

export default LogoutBtn;