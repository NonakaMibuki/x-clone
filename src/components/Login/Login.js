import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";

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

  return(
  <div>
    <XIcon className="sidebar__xIcon" />

    <h1>全ての話題が、<br />
            ここに。
        </h1>
        <p>今すぐ参加しましょう。</p>
    <button onClick={loginInWithGoogle}>
      <GoogleIcon className="login__googleIcon" />
      Googleでログイン
    </button>
  </div>
  )
}

export default Login;
