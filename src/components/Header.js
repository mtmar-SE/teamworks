import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <h1>37期共同開発</h1>
      <Link to="/" className="item">
        Chatapp
      </Link>
      <div className="right menu">
        <Link to="/graduate/todo" className="item">
          Todo
        </Link>
        <Link to="/graduate/recommend" className="item">
          Recommend
        </Link>
        <Link to="/graduate/profile" className="item">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Header;
