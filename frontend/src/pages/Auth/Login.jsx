import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";


function Login({setIsLoggedIn}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {username,password};
    if(username == "haha" && password == "212"){
        setIsLoggedIn(true);
      navigate('/');
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        userData,
      );

      console.log(response.data);
      alert("Signup Successful");
      setIsLoggedIn(true);
      const navigate = useNavigate('/');

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="login-title">Login</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
