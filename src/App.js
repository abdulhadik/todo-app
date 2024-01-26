import React from "react";
import Login from "./component/Loginpage/Login";
// import Header from "./component/Header/Header";
import About from "./component/About/About";
import Signin from "./component/Signin/Signup";

import TodoApp from "./component/todoapp/Todoapp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/todoapp" element={<TodoApp />} />
        <Route path="/signup" element={<Signin/>}/>
      </Routes>
    </Router>
  );
};


