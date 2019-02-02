import React, { Component } from 'react';
import { Container } from "semantic-ui-react";
import { Animated } from "react-animated-css";
import { NavLink } from 'react-router-dom';

import "./Header.css";

const Header = () => {
  return (
    <div className="ui secondary container menu main-header">

      <NavLink className="ui item" to="/">Home</NavLink>

      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
        <NavLink className="ui item" to="/signin">Sign in</NavLink>
      </div>
    </div>
  );
}

export default Header;
