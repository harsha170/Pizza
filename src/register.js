import React, { useState, useEffect } from "react";


const Login = () =>{
    useEffect(() => {
        let url = "https:localhost:5000/login"
        fetch(url,{
            method: 'GET',
            headers:{
                'Accept':'Application/JSON',
                'content-type': 'Application/json'
            }
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
            })
        })
    },[])
}



export default Login