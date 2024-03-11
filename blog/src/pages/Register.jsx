// import React from "react"
// import '../style/register.css'
// import { Link } from "react-router-dom"
// export default function Register() {
//     return (
//         <div className="register">
//       <span className="registerTitle">Register</span>
//       <form className="registerForm">
//         <label>Username</label>
//         <input className="registerInput" type="text" placeholder="Enter your username..." />
//         <label>Email</label>
//         <input className="registerInput" type="text" placeholder="Enter your email..." />
//         <label>Password</label>
//         <input className="registerInput" type="password" placeholder="Enter your password..." />
//         <button className="registerButton">Register</button>
//       </form>
//         <button className="registerLoginButton">
//           <Link style={{textDecoration:'none', color:'white'}} to='/login'>Login</Link>
//         </button>
//     </div>
//     )
// }

import React, { useState } from "react";
import axios from "axios";
import '../style/register.css';
import { Link } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/createUser', {
                username,
                email,
                password
            });
            console.log(response.data); // Log the response from the server
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Enter your username..." value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="Enter your email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password..." value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="registerButton" type="submit">Register</button>
                <div style={{display:'flex', marginTop: '10px'}}>
                <label style={{marginTop:'13px'}}>If Already registered..</label>
                <button className="registerLoginButton">
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/login'>Login</Link>
            </button>
                </div>
            </form>
            
        </div>
    );
}
