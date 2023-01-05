import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "App.css";
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound";
import Todo from "pages/Todo/Todo";
import About from "pages/About/About";
import Login from "pages/Login/Login";
import SignUp from "pages/SignUp/SignUp";
import Header from "components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
