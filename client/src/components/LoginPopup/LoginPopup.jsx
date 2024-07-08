import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign up");
  return (
    <div className="login_popup">
      <form className="login_popup_container">
        <div className="login_popup_title">
          <h2>{currentState}</h2>
          <img
            onClick={() => {
              setShowLogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login_popup_inputs">
          {currentState === "Sign in" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <button>
          {currentState === "Sign up" ? "Create account" : "Sign in"}
        </button>
        <div className="login_popup_condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Sign in" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => {
                setCurrentState("Sign up");
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => {
                setCurrentState("Sign in");
              }}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
