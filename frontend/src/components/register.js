import React, { useState } from 'react';
import axios from 'axios';
const Register = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/auth/register", { username, password })
            alert("Registration SuccessFull ....")
        } catch (error) {
            alert(error.response.data.message)
        }
    }



    return (

            <div>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Username' value={username} onChange={(e) => setUserName(e.target.value)}></input>
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>

                </form>
            </div>

    )
}


export default Register