import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Timeline from "./components/timeline/Timeline";
import Widget from "./components/widget/Widget";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
            <div className="app">
              <Sidebar isAuth={isAuth}/>
              <Timeline isAuth={isAuth}/>
              <Widget isAuth={isAuth}/>
            </div>
          }
        />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
