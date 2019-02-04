/*  The Sign In component displays the sign in functionlity to the users. Users are able to sign in
*   using their employee email and their unique password. Standard form authentication is used for
*   signing in.
*/

import React, { Component } from "react";
import { Animated } from "react-animated-css";
import swal from "sweetalert";

// Import style
import "./SignIn.css";

function onSubmit(e) {
  e.preventDefault();

  swal(
    "Awesome",
    "You clicked the sign in button! It doesn't do anything tho :)",
    "success"
  );
}

function onChange(e) {
//  this.setState({ [e.target.name]: e.target.value });
}

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

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
            <form className="ui form" submit={onSubmit}>
              <div className="ui stacked secondary segment">
                <div className="field">
                  <label>Email or username</label>
                  <div className="ui left icon envelope">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter email address"
                      onChange={onChange}
                      value={this.state.email}
                    />
                  </div>
                </div>

                <div className="field">
                  <label>Password</label>
                  <div className="ui left icon input">
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      onChange={this.onChange}
                      value={this.state.password}
                    />
                  </div>
                </div>

                <button
                  className="ui fluid small primary submit button"
                  onClick={onSubmit}
                >
                  Sign in
                </button>
              </div>

              {/* Doesn't do anything, but just adding it here */}
              <a href="#" className="forgot-password">
                Trouble signing in?
              </a>
            </form>
          </div>
        </div>
      </Animated>
    );
  }
}

export default SignIn;
