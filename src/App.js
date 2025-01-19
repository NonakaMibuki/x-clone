import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Timeline from "./components/timeline/Timeline";
import Widget from "./components/widget/Widget";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            isAuth ? (
            <div className="app">
              <Sidebar isAuth={isAuth}/>
              <Timeline isAuth={isAuth}/>
              <Widget isAuth={isAuth}/>
            </div>
            ):(
              <Navigate to="/login" replace/>
            )
          }
        />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
