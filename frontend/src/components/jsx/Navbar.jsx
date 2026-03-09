import React, { use } from "react";
import cart  from "../../Assets/icons/black-shopping-cart-10933_128.png";
import search  from "../../Assets/icons/search.webp";
import avtar  from "../../Assets/icons/avtar.webp";
import { useNavigate } from "react-router-dom";
import "../css/Navbar.css";
function Navbar({isLoggedIn}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="Navbar">
        <div className="left-section">
          <h1 className="title">StayVia</h1>
        </div>
        <div className="middle-section">
          <input
            type="text"
            placeholder="Search For Hotels and Restaurant.........."
          />
          <img
            className="search-icon"
            src={search}
            alt="search"
          />
        </div>
        <div className="right-section">
          <img
            className="cart-icon"
            src={cart}
            alt="cart-icon"
          />
          <button className="booking-btn">Booking</button>

          {
            isLoggedIn? ( <img className="avtar" src={avtar} alt="avtar" />):(<>
              <button className="login-btn" onClick={()=>navigate("/login")}>login</button>
              <button className="signup-btn"  onClick={()=>navigate("/signup")}>SignUp</button>
            </>)
          }
         
        </div>
      </div>
    </>
  );
}

export default Navbar;
