"use client";

import React, {useState} from 'react';
import Link from "next/link";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const loginPressed = (e) => {
        e.preventDefault(); 
        console.log("username is: ", username, " and password is: ", password);
    }

    return (
      <div>
        <form action="#" className="flex flex-col justify-center items-center gap-4 bg-gray-400">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" className="rounded" onChange={(e) => {handleUsername(e)}} required />
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" className="rounded" onChange={(e) => {handlePassword(e)}} required />
            <button type="submit" className="bg-gray-500 w-fit hover:bg-gray-300 flex gap-2 justify-center items-center focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 m-2 rounded" onClick={(e) => {loginPressed(e)}}>Login</button>
        </form>
        <div>Forgot password? <Link href="/resetpwd"><span className="text-gray-400 hover:text-gray-700">Click Here</span></Link></div>
        <div>Don't have an account yet? <Link href="/getstarted"><span className="text-gray-400 hover:text-gray-700">Create an account</span></Link></div>
      </div>
    )
  }