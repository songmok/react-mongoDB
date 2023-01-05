import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logowrap">
          <Link to="/" className="logo">
            logo
          </Link>
        </div>
        <nav className="nav">
          <ul className="gnb">
            <li className="deapt1">
              <Link>ABOUT</Link>
            </li>
            <li className="deapt1">
              <Link>개인</Link>
            </li>
            <li className="deapt1">
              <Link>협업</Link>
            </li>
            <li className="deapt1">
              <Link>LINK</Link>
            </li>
          </ul>
        </nav>
        <form className="form">
          <input type="text" />
        </form>
        <div className="user">
          <Link to="/login" className="login">
            로그인
          </Link>
          <Link to="/singup" className="signUp">
            회원가입
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
