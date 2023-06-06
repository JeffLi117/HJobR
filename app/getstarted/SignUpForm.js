import { useState } from "react";

function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handlePassword2 = (e) => {
        setPassword2(e.target.value);
    }

    const signUpPressed = (e) => {
        e.preventDefault(); 
        console.log("username is: ", username, " and password is: ", password, " and password2 is: ", password2);
    }
  
    return (
        <div>
            <form action="#" className="flex flex-col justify-center items-center gap-4 bg-gray-400 p-4">

            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" className="rounded" onChange={(e) => {handleUsername(e)}} required />

            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" className="rounded" onChange={(e) => {handlePassword(e)}} required />
            
            <label htmlFor="password2">Confirm Password</label>
            <input type="text" id="password2" name="password2" className="rounded" onChange={(e) => {handlePassword2(e)}} required />
            
            <div className={`text-sm text-center ${password2 && (password !== password2) ? "opacity-100" : "opacity-0"}`}>Please ensure passwords match</div>

            <button type="submit" className="bg-gray-500 w-fit hover:bg-gray-300 flex gap-2 justify-center items-center focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 m-2 rounded" onClick={(e) => {signUpPressed(e)}}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm