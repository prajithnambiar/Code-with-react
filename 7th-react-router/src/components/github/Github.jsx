// import React, { useEffect } from "react";
// import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
 
    const data = useLoaderData();
    // useEffect(() => {
    //     fetch('https://api.github.com/users/prajithnambiar')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // })
    return (
        <>
        <div className="text-center m-4 bg-gray-600 p-4 text-white text-3xl">
            Github Followers : {data.followers}
        </div>
          <div className="text-center m-4 bg-gray-600 p-4 text-white text-3xl">
            Github repos : {data.public_repos}
        </div>
        </>
    )
}