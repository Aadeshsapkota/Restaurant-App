import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Signup({setIsLoggedIn}) {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
 const handleSubmit = async (e)=>{
  e.preventDefault();

  try{
    const res = await axios.post("http://localhost:5000/signup",{
      name,
      email,
      password
    });

    alert("User Created");
    console.log(res.data);
    

  }catch(err){
    console.log(err);
  }
};
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">

        <h1 className="login-title">Sign Up</h1>

        <form className="login-form" onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button className="login">Create Account</button>

        </form>

      </div>
    </div>
  );
}

export default Signup;