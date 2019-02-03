/*  
*   The Header serves as a constant navigation that will be displayed throughout the application, 
*   regardless of which screen/ page the user navigates to. Only on link is working, the "Sign In"
*   which redirects the user to the Sign In page if te member has nto yet been authenticated. 
*/

import React from "react";
import { NavLink } from "react-router-dom";

// Importing the CSS file here for styling
import "./Header.css";

const Header = () => {
  return (
    <div className="ui secondary container menu main-header">
      <NavLink className="ui item" to="/">
        Home
      </NavLink>

      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon" />
          </div>
        </div>
    
        <NavLink className="ui item" to="/signin">
          Sign in
        </NavLink>
    
      </div>
    </div>
  );
};

export default Header;
