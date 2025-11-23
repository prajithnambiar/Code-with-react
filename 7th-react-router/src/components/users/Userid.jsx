import React from "react";
import { useParams } from "react-router-dom";

export default function Userid(){
    const {userid} = useParams()
    return(
        <>
        <div>
            User : {userid}
        </div>
        </>
    )
}