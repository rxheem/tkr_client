
/*
*   This was originally a functional component but I swithced it to a component
*   to add the alert functionalities to simulate actual user interaction.
*
*   I'm still allowing it to stay under ./views as it essentially does nothing
*   but diplay non-functional footer items with animations and a static alert
*/

import React, { Component } from "react";
import { Animated } from "react-animated-css";
import { Container, Label } from "semantic-ui-react";
import "./Footer.css";

// Importing SweetAlert here
import swal from 'sweetalert';

function defaultAlert(e) {
  e.preventDefault();

  // Shows the default SweetAlert
  swal ( "Hmmm" ,  "This link takes you no where!" ,  "error" );
}

class Footer extends Component {

  render(){
    return (
      <footer>

        {/* For safe practice lets wrap the content in a div */}
        <Container className="footer">
          <nav className="footer-nav">

          <Animated animationIn="zoomInUp" animationOut="fadeOut" isVisible={true}>

            {/* For the time being, we can put a little label here */}
            <h5 className="footer-label">Client Tracker</h5>
          </Animated>

            <ul>
              <li className="nav-item">
                <a onClick={defaultAlert} className="footer-nav-item" href="#"> Terms of Use </a>
              </li>

              <li className="nav-item">

                {/* Right here, we want to animate this one with a fade in  */}
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                  <a onClick={defaultAlert}  className="footer-nav-item" href="#"> Privacy Policy </a>
                </Animated>
              </li>
            </ul>
          </nav>
        </Container>
      </footer>
    )
  }
}

export default Footer;
