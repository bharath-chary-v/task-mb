import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/auth/login", { username, password }).then((response) => {
                localStorage.setItem("token", response.data.token)
                alert("login SuccessFull")
            })
        } catch (error) {
            alert(error.response.data.message)
        }
    }



    return (
        <>
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Username' value={username} onChange={(e) => setUserName(e.target.value)}></input>
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button type='submit'>Login</button>
                </form>
            </div>


        </>
    )
}


export default Login