import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./Logout.css"

function Logout({ setIsAuth }) {
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth).then((result) => {
      localStorage.setItem("isAuth", false);
      setIsAuth(false);
      navigate("/login");
    });
  };

  const cancel = () => {
    navigate("/");
  };

  return (
    <div className="logout__container">
      <h1>Xからログアウトしますか？</h1>
      <p>いつでも再度ログインできます。<br />
      既存のアカウントを追加することで、アカウントを切り替えることもできます。 </p>
      <button className="cancel__button" onClick={cancel}>
        キャンセル
      </button>
      <button className="logout__button" onClick={logout}>
        ログアウト
      </button>
    </div>
  );
}

export default Logout;
