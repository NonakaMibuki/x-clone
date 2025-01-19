import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import "./Login.css";

function Login({ setIsAuth }) {
  const navigate = useNavigate();

  const loginInWithGoogle = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="login__container">
      <XIcon className="sidebar__xIcon" />

      <h1>Xにログイン</h1>
      <p>「いま」起きていることを見つけよう。</p>
      <button onClick={loginInWithGoogle} className="login__btn">
        <GoogleIcon className="login__googleIcon" />
        Googleでログイン
      </button>
    </div>
  );
}

export default Login;
