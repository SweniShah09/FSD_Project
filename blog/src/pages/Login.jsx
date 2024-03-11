// import React from "react";
// import '../style/login.css';
// import { Link } from "react-router-dom";
// export default function Login() {
//     return (
//       <div className="login">
//         <span className="loginTitle">Login</span>
//         <form className="loginForm">
//           <label>Email</label>
//           <input className="loginInput" type="text" placeholder="Enter your email..." />
//           <label>Password</label>
//           <input className="loginInput" type="password" placeholder="Enter your password..." />
//           <button className="loginButton">Login</button>
//         </form>
//           <button className="loginRegisterButton">
//             <Link style={{textDecoration:'none', color:'white'}} to='/register'>Register</Link>
//           </button>
//       </div>
//     );
//   }

import React, { useState } from "react";
import axios from "axios";
import '../style/login.css';
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [userId, setUserId] = useState(""); // Define userId state variable
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', {
                id: userId,
                password: password
            });
            console.log(response.data);
            navigate('/write'); // Log the authenticated user data
            // Handle successful login (e.g., redirect to dashboard)
        } catch (error) {
          console.error('Error:', error);
          // Navigate to register page if password is incorrect
          navigate('/register');
      }
    };

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>User ID</label>
                <input className="loginInput" type="text" placeholder="Enter your user ID..." value={userId} onChange={(e) => setUserId(e.target.value)} />
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter your password..." value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="loginButton" type="submit">Login</button>
            </form>
        </div>
    );
}
