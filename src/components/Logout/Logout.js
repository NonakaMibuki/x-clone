import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

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
      <p>いつでも再度ログインできます。アカウントを切り替えたい場合は、既存のアカウントを追加することで切り替えることができます。 </p>
      <button className="logout__button" onClick={logout}>
        ログアウト
      </button>
      <button className="cancel__button" onClick={cancel}>
        キャンセル
      </button>
    </div>
  );
}

export default Logout;
