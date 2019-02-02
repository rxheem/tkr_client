import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Input, Button, Checkbox, Form } from "semantic-ui-react";
import { Animated } from "react-animated-css";

// Import style
import "./SignIn.css";

class SignIn extends Component {
  render() {
    return (
      <Animated
        animationIn="bounceInDown"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div className="sign-in">
          <div className="heading">
            <h3>Sign In</h3>
            <p>Sign in to get started!</p>
          </div>

          <div className="mainform">
            <form className="ui form">
              <div className="ui stacked secondary segment">
                <div className="field">
                  <label>Email or username</label>
                  <div className="ui left icon envelope">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                <div className="field">
                  <label>Password</label>
                  <div className="ui left icon input">
                    <i className="lock icon" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                    />
                  </div>
                </div>

                <button className="ui fluid small primary submit button">
                  Sign in
                </button>

                {/* Doesn't do anything, but just adding it here */}
                <a href="#" className="forgot-password fix">
                  Trouble signing in?
                </a>
              </div>
            </form>
          </div>
        </div>
      </Animated>
    );
  }
}

export default SignIn;
